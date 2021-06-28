import React from 'react'

const Order = ({data}) => {
    console.log(data)
    return (
        <div style={{border:'1px solid black'}}>
            <h1>{data.id}</h1>
            {data.purchase?.map(x=>{return(
                <div>
                <h1>{x.title}</h1>
                <span>{x.id}</span>
                <img src={x.image}></img>
                </div>
                
            )})}
        </div>
    )
}

export default Order

