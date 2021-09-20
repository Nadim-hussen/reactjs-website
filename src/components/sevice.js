import React, { useState } from "react";
import data from '../data/data.json'
import { NavLink } from 'react-router-dom';
import './About.css'
export default function Service() {
    const [color,setColor] = useState('')
    const [text,setText] = useState('change color')
    const changes = () =>{
        setColor('#80adcb')
        if(color === '#80adcb'){
            setColor('')
            setText('Change Color')
        }else{
            setColor('#80adcb')
            setText('Go Back')
        }
    }
    return (
        <>
        <div className="container text-align-center service-h1 mt-5">
            <h1 className="text-success">Our Services</h1>
            <button className="btn btn-light p-2" onClick={()=>changes()}>{text}</button>
        </div>
            <div className='container d-flex justify-content-center text-center mx-auto row'>
                
                {data.map((items) => {
                    return (
                        <div className="card bgcolor my-5 col-md-4 col-sm-6 mx-xl-4 mx-2 " key={items.id} style={{ width: "18rem", backgroundColor:color}}>
                            <div className="card-body">
                                <h5 className="card-title service-title">{items.id}. {items.name}</h5>
                                <p className="card-text sevice-body">{items.body}</p>
                                
                                <NavLink to={items.footer} target="_blank" className="btn btn-primary fw-bold px-5 w-100%">{items.favColor}</NavLink>
                            </div>
                        </div>
                    )
                })}
                </div>
            
        </>
    )
}