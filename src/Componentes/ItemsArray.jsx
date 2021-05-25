import React from 'react'
import cuadro1 from '../assets/images/cuadro1.jpg'
import cuadro2 from '../assets/images/cuadro2.jpg'
import cuadro3 from '../assets/images/cuadro3.jpg'
import cuadro4 from '../assets/images/cuadro4.jpg'

const itemsArray= [
    {
        id:1,
        title:"NASA",
        alt:"Cuadrito1",
        price:"$300",
        linea:"RETRO",
        description:"Cuadrito espacial",
        pictureUrl:cuadro1
    },
    {
        id:2,
        title:"CACTUS",
        alt:"Cuadrito2",
        price:"$300",
        linea:"RETRO",
        description:"Cuadrito desertico",
        pictureUrl:cuadro2
    },
    {
        id:3,
        title:"FEM POWAH",
        alt:"Cuadrito3",
        price:"$300",
        linea:"FEMINIST POWAH",
        description:"Cuadrito fem power",
        pictureUrl:cuadro3
    },
    {
        id:4,
        title:"FRESH BEER",
        alt:"Cuadrito4",
        price:"$300",
        linea:"BAR",
        description:"Best in town",
        pictureUrl:cuadro4
    },
    
];

export default itemsArray;