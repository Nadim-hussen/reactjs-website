import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './About.css';
export default function About() {
    const [color,setColor] = useState('')
    const [text,setText] = useState('Change Color')
    const bgColor = ()=>{
        setColor(' #80adcb')
        if(color === '#80adcb'){
            setColor('')
            setText('Change Color')
        }else{
            setColor('#80adcb')
            setText('Go Back')
        }
    }
    const services = [
        {
            id: 1,
            name: "Nadim Hussan",
            content: "fullstack developer",
            body: "Lorem ipsum dolor sit amet, consectetur  maximus felis ac, imperdiet elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis finibus felis, id eleifend dolor.",
            footer: "courses",
            backgroundColor: "yellow"
        },
        {
            id: 2,
            name: "kamrul Islam",
            content: "web designer",
            body: "Lorem ipsum dolor sit amet, consectetur  maximus felis ac, imperdiet elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis finibus felis, id eleifend dolor.",
            footer: "courses",
            backgroundColor: "purple"
        },
        {
            id: 3,
            name: "Muaimin",
            content: "web developer",
            body: "Lorem ipsum dolor sit amet, consectetur  maximus felis ac, imperdiet elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis finibus felis, id eleifend dolor.",
            footer: "courses",
            backgroundColor: "lightgray"
        },
        {
            id: 4,
            name: "Khaled",
            content: "graphic designer",
            body: "Lorem ipsum dolor sit amet, consectetur  maximus felis ac, imperdiet elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis finibus felis, id eleifend dolor.",
            footer: "courses",
            backgroundColor: "orange"
        },
        {
            id: 5,
            name: "Habib chondra",
            content: "Android developer",
            body: "Lorem ipsum dolor sit amet, consectetur  maximus felis ac, imperdiet elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis finibus felis, id eleifend dolor.",
            footer: "courses",
            backgroundColor: " courses"
        },
        {
            id: 6,
            name: "Sahib Talukdar",
            content: "Digital marketer",
            body: "Lorem ipsum dolor sit amet, consectetur  maximus felis ac, imperdiet elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis finibus felis, id eleifend dolor.",
            footer: "courses",
            backgroundColor: "cyan"
        }
    ];
    return (
        <>
        <div className = "mt-5">
            <h1 className='text-center service-header my-2 fw-bold text-success text-uppercase'>our instructors</h1> <button onClick={()=>bgColor()} className="btn btn-light p-2">{text}</button>
            </div>
            <div className="container d-flex justify-content-center text-center mx-auto row">
                {services.map((items) => {
                    return (
                        <div className="card bgcolor my-5 col-md-4 col-sm-6 mx-xl-4 mx-2 " key={items.id} style={{ width: "18rem", backgroundColor:color}}>
                            <img src='https://www.w3schools.com/bootstrap4/img_avatar3.png' className='card-img-top' alt='images' />
                            <div className="card-body">
                                <h5 className="card-title">{items.name} <br /> {items.content}</h5>
                                <p className="card-text">{items.body}</p>

                                <NavLink exact to="/Service" className="btn btn-primary fw-bold px-5 w-100%">{items.footer}</NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>);
}