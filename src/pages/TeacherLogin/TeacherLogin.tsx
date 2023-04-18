import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css'
import logo from '../../images/logo.svg'

import { login_teacher } from '../../actions/Login';

export default function TeacherLogin({ isAuthorized, setAuthorized, passCpf }) {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    // const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const navigate = useNavigate()

    // useEffect(() => {
    //     function handleResize() {
    //         setWindowHeight(window.innerHeight)
    //         setWindowWidth(window.innerWidth)
    //         console.log(window.location.href)
    //     }
    //     window.addEventListener('resize', handleResize);
    //     return _ => {
    //         window.removeEventListener('resize', handleResize);
    //     }
    // })

    const login = async () => {
        let teacher = await login_teacher(cpf, password);
        // console.log(teacher)
        if(teacher.data !== undefined) {
            passCpf(cpf)
            const returnPathname = sessionStorage.getItem('lastPage') ?? '/';
            sessionStorage.removeItem('lastPage');
            localStorage.setItem('authorized', 'true')
            setAuthorized(true)
            return(
                <Navigate to={returnPathname} replace></Navigate>
            );
        } else {
            setCpf('')
        }
    }

    function onCpfChange(value) {
        if(value >= 0) {
            setCpf(value)
        }
    }

    if (isAuthorized == true) {
        const returnPathname = sessionStorage.getItem('lastPage') ?? '/vagas';
        sessionStorage.removeItem('lastPage');
        // console.log(returnPathname);
        return(
            <Navigate to={returnPathname} replace></Navigate>
        );
    }

    return (
        <div className='logInBackground'>
            <div className='popup'>
                <img src={logo} alt='Estágio Hoje' />
                <div className='container'>
                    <div className='popupForm'>
                        <h1>Professor</h1>
                        <p>CPF</p>
                        <input
                            id='cpf'
                            name='cpf'
                            type='text'
                            value={cpf}
                            onChange={(e) => onCpfChange(e.target.value)}
                        />
                        <p>Senha</p>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='highButton' onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
      )
}