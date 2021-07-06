import React,{ useState} from 'react'
import { useAuth } from '../../../Contexts/AuthContext';
import firebase from 'firebase/app';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { getFirestore } from '../../../firebase';
import { app } from '../../../firebase';
import {NavLink} from 'react-router-dom';

const CustomItem = () => {
    const INITIAL_TITLE = 'SET YOUR ARTWORK NAME!';
    const preview = 'https://firebasestorage.googleapis.com/v0/b/deco-etcetera.appspot.com/o/designPreview.jpg?alt=media&token=bbe80d41-85c7-4ca3-a086-f9e1ac11ebb1';
    const[design, setDesign]=useState(null);
    const[img, setImg]=useState(null);
    const[title, setTitle]=useState(INITIAL_TITLE);
    const[uploaded, setUploaded]=useState(false);
    const[ready, setReady]=useState(false);
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    
    const titleHandler = (e)=>{
        title ===""? setTitle(INITIAL_TITLE) : setTitle(e.target.value); 
    }
    const changeHandler= async(e) =>{
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const file = e.target.files[0];
        setDesign(URL.createObjectURL(file));
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name+randomNumber) // If user uploads a generic named file, it won't cause errors on further uses of that file.
        const filePut = await fileRef.put(file);
        let uploadProgress = (filePut.bytesTransferred / filePut.totalBytes) *100;
        console.log(`Upload progress is ${uploadProgress}% done`)
        await filePut.ref.getDownloadURL().then((res)=>{
            setImg(res)
            setReady(true)
        })
    }
    console.log(img)

    const uploadFile =(e)=>{
        e.preventDefault();
        if(title === INITIAL_TITLE || img === null){
            alert('Please, choose a image and set a title to continue 😅');
            return;
        } 
        const user = firebase.auth().currentUser;
        if(!user) return;
        let {displayName, uid, email, phoneNumber} = user;
        
        const newCustom ={
            alt:'Custom artwork',
            category:'Custom',
            description:`Custom by ${user.displayName}`,
            image:img,
            title:title,
            stock:10,
            price:450,
            custom:true,
            buyer:{
                name:displayName,
                email:email,
                userId:uid,
                phoneNumber:phoneNumber},
            date:firebase.firestore.Timestamp.fromDate(new Date())
        }
        itemsCollection.add(newCustom).then((res)=>{
            setUploaded(true)
        }).catch(err=>console.log(err))
    }


    return (
        <FormContainer>
            <span>{title}</span>
        <div className='previewContainer'>
            <img className='preview' src={preview} alt='Preview'/>
            <img src={design? design : null} alt={design? 'Your custom design': null} className={design? 'isDesign' : 'notDesign'}/>
        </div>
        {uploaded? 
        <div className='uploaded'>
            <span>UPLOADED!</span>
            <NavLink to='/item/custom-items' style={{color:'inherit', textDecoration:'none'}}>
                <span>CHECK YOUR CUSTOMIZED ARTWORKS 🎴</span>
            </NavLink>
        </div>:
        <div className='formDiv'>
            <form>
                <input type='text' placeholder={'Set your artwork name!'}
                    onChange={(e)=>titleHandler(e)}
                />
                <input type='file'
                    accept='.jpg, .jpeg, .png'
                    onChange={changeHandler}
                />
            </form>
            {ready && <Button onClick={uploadFile} variant="outlined" className='buyBtn'>CREATE CUSTOM</Button>}
        </div>}
        </FormContainer>
    )
}


const FormContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
span{
    display:block;
    text-align:center;
    font-size:2em;
    font-weight:bold;
    margin:20px;
}

.previewContainer{
    position:relative;
    width:400px;
    height:500px;
    border:2px solid black;
    border-radius:10px;
    margin:20px;
}

.preview{
    width:100%;
    height:100%;
    border-radius:8px;
}

.isDesign{
    position:absolute;
    width:55%;
    height:59%;
    left:50%;
    top:50%;
    margin-left:-110px;
    margin-top:-145px;
}

.notDesign{
    display:none;
}
.buyBtn{
    margin:30px;
    color:green;
    border:1px solid green;
}
.formDiv{
    display:flex;
    flex-direction:column;
    form{
        display:flex;
        flex-direction:column;
        gap:10px;
        
    }
    button{
        width:100%;
        font-size:1em;
        align-self:center;
    }
    .uploaded{
        display:flex;
        flex-direction:column;

        span{
            font-size:0.5em;
        }
    }
}
`
export default CustomItem
