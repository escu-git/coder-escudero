import React from 'react'

const UploadCustom = () => {
    const handleFileInput = () =>{

    }
    return (
        <div className = 'file-uploader'>
            <input type='file'
                value={design}
                onChange={(e)=>setDesign(e.target.files[0])}
            />
        </div>
    )
}

export default UploadCustom
