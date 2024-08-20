// src/pages/Login.js

import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function RegisterForm() { 
    const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post(`/classroom/team-os/authapi/register`, { 
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
        })
        .then(response => {
        if(response.status === 200) {
            alert("Valid Registration!"); 
        }
        console.log(response.message); 
        })
        .catch(error => { 
        console.error('Error with registration:', error);
        alert("Invalid Registration!");
        });
    };
    
    return (
        <div className="RegForm">
        <h2>Register a new account:</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
            />
            </label>
            <br />
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
            />
            </label>
            <br />
            <label>
            Password:
            <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
            />
            </label>
            <br />
            <button type="submit">Register!</button>
        </form>
        </div>
    );
};

function LoginForm() { 
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ email: '', password: '' });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post(`/classroom/team-os/authapi/login`, {
        email: inputs.email,
        password: inputs.password
        })
        .then(response => {
        if(response.status === 200) {
            alert("Valid User!"); 
            navigate('/projects');                                   //Redirect to projects page
        }
        console.log(response.message); 
        })
        .catch(error => {
        console.error('Error with login:', error); 
        alert("Invalid User!");
    
        });
    };
    
    return (
        <div className="LoginForm">
        <h2>Login to Existing Account:</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
            />
            </label>
            <br />
            <label>
            Password:
            <input
                type="password" 
                name="password"
                value={inputs.password}
                onChange={handleChange}
            />
            </label>
            <br />
            <button type="submit">Login!</button>
        </form>
        </div>
    );
    }


const Login = () => {
    return (
        <div>
            {RegisterForm()}

            {LoginForm()}
        </div>


    )
};

export default Login;
