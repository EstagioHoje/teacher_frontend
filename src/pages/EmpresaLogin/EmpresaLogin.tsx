import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from "../../data/logo.png";
import InputMask from "react-input-mask";
import { useSearchParams, Route, Link } from 'react-router-dom'

import { api_links } from '../../actions/server_core/endpoint';
import { empresa_put } from '../../actions/Empresa';
import { empresa_get_search } from '../../actions/Empresa';
import { empresa_delete } from '../../actions/Empresa';

export default function EmpresaLogin({ isAuthorized }) {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
            console.log(window.location.href)
        }

        window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    })


    if (isAuthorized == true) {
        const returnPathname = sessionStorage.getItem("lastPage") ?? "/";
        sessionStorage.removeItem("lastPage");
        console.log(returnPathname)
        return(
            <Navigate to={returnPathname} replace></Navigate>
        );
    }

    return (
        <Container disableGutters maxWidth={windowWidth} sx={{ padding: 0 }}>
            <Box sx={{ minWidth: 800, minHeight: 300, height: windowHeight, padding: 0, mb: 0 }}>
                Teste Login
            </Box>
        </Container>
    );
}