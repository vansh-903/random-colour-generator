import React, { useEffect, useState } from 'react'

function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function handleCreateRandomHexColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let randomHex = '#';
        for(let i = 0; i < 6; i++){
            randomHex += hex[Math.floor(Math.random() * hex.length)];
        }
        setColor(randomHex);
    }


    function handleCreateRandomRgbColor(){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        let randomRGB = `rgb(${red}, ${green}, ${blue})`;
        setColor(randomRGB);
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor])

    return (
            <div style = {{
                width: "100vw",
                height: "100vh",
                background: color,
            }}>
                <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button onClick={() => setTypeOfColor('Rgb')}>Create RGB Color</button>
                <button onClick={
                    typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor
                }>Create Random Color</button>
            
            <div style = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '60px',
                color: '#fff',
                fontSize: '48px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{typeOfColor === 'hex' ? 'HEX Color' : 'Rgb Color '}</h3>
                <h1> {color} </h1>
            </div>
        </div>
    )
}

export default RandomColor