import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from '../../data/logo.png';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useSearchParams, Route, Link } from 'react-router-dom'

import { api_links } from '../../actions/server_core/endpoint';
import { aluno_put, teacher_get } from '../../actions/Professor';
import { aluno_get_search } from '../../actions/Professor';
import { aluno_delete } from '../../actions/Professor';

import { Sidebar } from '../../components/sidebar/sidebar';

export default function ProfessorReadUpdate({ setAuthorized }) {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState(sessionStorage.getItem('cpf'));
    const [department, setDepartment] = useState('')
    const [school, setSchool] = useState('');
    const [college, setCollege] = useState('');
    const [university_id, setUniversity_id] = useState('')

    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    })

    useEffect(() => {
        (async () => {
            let teacher = await teacher_get(String(cpf).replace(/\D/g, ''))
            if (teacher.data.data !== undefined) {
                setName(teacher.data.data[0].name)
                setEmail(teacher.data.data[0].email)
                setDepartment(teacher.data.data[0].department)
                setSchool(teacher.data.data[0].school)
                setCollege(teacher.data.data[0].college)
                setUniversity_id(teacher.data.data[0].university_id)
            }
        }
        )()
    }, []);

    return (
        <Container disableGutters maxWidth={windowWidth} sx={{ padding: 0 }}>
            <Box sx={{ minWidth: 600, minHeight: 300, height: windowHeight, padding: 0, mb: 0 }}>
                <Grid container spacing={0}>
                    <Grid sx={{ maxWidth: 240, minWidth: 240 }}>
                        <Sidebar
                            setAuthorized={setAuthorized}>
                        </Sidebar>
                    </Grid>
                    <Grid xs sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: windowHeight,
                        minHeight: 400,
                        minWidth: 360,
                        overflow: 'hidden',
                        overflowY: 'scroll',
                    }}>
                        <Box sx={{
                            mx: 2
                        }}>
                            <Box sx={{ my: 2 }}>
                                <h1>Suas Informações:</h1>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns='16'>
                                    <Grid xs={7}>
                                        <Box sx={{ mr: 1 }}>

                                            <TextField
                                                id='name'
                                                value={name}
                                                fullWidth
                                                label='Nome'
                                                defaultValue=''
                                                size='small'
                                                onChange={(e) => setName(e.target.value)}
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <InputMask
                                                mask='999.999.999-99'
                                                value={cpf}
                                                disabled={false}
                                                maskChar=' '
                                            >
                                                {() => <TextField
                                                    id='cpf'
                                                    fullWidth
                                                    label='CPF'
                                                    defaultValue=''
                                                    size='small'
                                                    inputProps={{ readOnly: true, disableUnderline: true }}
                                                />}
                                            </InputMask>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns='16'>
                                    <Grid xs={6}>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                id='college'
                                                value={college}
                                                fullWidth
                                                label='Universidade'
                                                defaultValue=''
                                                size='small'
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />

                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                id='university_id'
                                                value={university_id}
                                                fullWidth
                                                label='ID da universidade'
                                                defaultValue=''
                                                size='small'
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns='16'>
                                    <Grid xs>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                id='school'
                                                value={school}
                                                label='Faculdade'
                                                defaultValue=''
                                                fullWidth
                                                size='small'
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                id='email'
                                                value={email}
                                                label='Email'
                                                defaultValue=''
                                                fullWidth
                                                size='small'
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}