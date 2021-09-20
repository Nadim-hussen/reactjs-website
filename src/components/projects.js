import React, { useState } from 'react';


function Project(){
    const [text,setText] = useState('dark mode')
    const [bgColor,setbgColor] = useState({
            color: '#121212',
            backgroundColor:'#fff'
        })
    const changemode =() =>{
        
        if(text === 'light mode'){
            setbgColor({
                color: '#121212',
                backgroundColor:'#fff'
            })
            setText('dark mode')
        }else{
            setbgColor({
                color: '#fff',
                backgroundColor:'#121212'
            })
            setText('light mode')
        }
    }
    
    return(
        <>
 <button className="btn btn-primary my-5" style={bgColor} onClick={changemode}>{text}</button>
        <div className="container text-center" style={bgColor}>
        
        <div className="jumbotron my-5 py-5">
            <h1>What is Lorem Ipsum?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="jumbotron my-5 py-5">
            <h1>What is Lorem Ipsum?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="jumbotron my-5 py-5">
            <h1>What is Lorem Ipsum?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="jumbotron my-5 py-5">
            <h1>What is Lorem Ipsum?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div></div>

        </>
    )
}
export default Project;