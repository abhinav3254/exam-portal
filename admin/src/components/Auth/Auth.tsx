import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        const data = {
            email: email,
            password: password
        }
        try {
            const res = await axios.post('/auth/login', data);
            if (res.status === 200) {
                const token = res.data.response;
                console.log(res.data);

                sessionStorage.setItem('token', token);
                navigate('/home');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='Auth'>
            <div className="form">
                <div className='element'>
                    <InputText placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='element'>
                    <InputText placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='element'>
                    <Button onClick={login} label="Submit" />
                </div>
            </div>
        </div>
    )
}

export default Auth