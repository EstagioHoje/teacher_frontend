import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from "../../data/logo.png";
import { useNavigate } from 'react-router-dom';
import InputMask from "react-input-mask";
import { useSearchParams, Route, Link } from 'react-router-dom'

import { api_links } from '../../actions/server_core/endpoint';
import { aluno_put } from '../../actions/Aluno';
import { aluno_get_search } from '../../actions/Aluno';
import { aluno_delete } from '../../actions/Aluno';

import { Sidebar } from '../../components/sidebar/sidebar';

export default function ProfessorReadUpdate({ setAuthorized }) {
    const navigate = useNavigate()
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [email, Set_email] = useState([]);
    const [name, Set_name] = useState([]);
    const [cpf, Set_cpf] = useState(localStorage.getItem("cpf"));
    const [college, Set_college] = useState([]);
    const [school, Set_school] = useState([]);
    const [university_id, Set_university_id] = useState([]);

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

    const [info, setInfo] = useState([])

    useEffect(() => {

        (async () => {
            var cpfString = String(cpf)
            const cpfStringMod = (cpfString.replace(/\D/g, ""))
            let info = await aluno_get_search(parseInt(cpfStringMod))
            console.log(info)
            if (info != null) {
                if (info.data.data != null) {
                    Set_email(info.data.data[0].email)
                    Set_college(info.data.data[0].college)
                    Set_name(info.data.data[0].name)
                    Set_school(info.data.data[0].school)
                    Set_university_id(info.data.data[0].university_id)
                }
            }

        }
        )()

    }, []);

    return (
        <Container disableGutters maxWidth={windowWidth} sx={{ padding: 0 }}>
            <Box sx={{ minWidth: 600, minHeight: 300, height: windowHeight, padding: 0, mb: 0 }}>
                <Grid container spacing={0}>
                    <Grid xs sx={{ maxWidth: 240, minWidth: 240 }}>
                        <Sidebar
                            setAuthorized={setAuthorized}>
                        </Sidebar>
                    </Grid>
                    <Grid xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: windowHeight,
                        minHeight: 400,
                        overflow: "hidden",
                        overflowY: "scroll",
                    }}>
                        <Box sx={{
                            mx: 2
                        }}>
                            <Box sx={{ my: 2 }}>
                                Informações do Aluno
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs={7}>
                                        <Box sx={{ mr: 1 }}>

                                            <TextField
                                                id="name"
                                                value={name}
                                                fullWidth
                                                label="Nome"
                                                defaultValue=""
                                                size="small"
                                                onChange={(e) => Set_name(e.target.value)}
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <InputMask
                                                mask="999.999.999-99"
                                                value={cpf}
                                                disabled={false}
                                                maskChar=" "
                                            >
                                                {() => <TextField
                                                    id="cpf"
                                                    fullWidth
                                                    label="CPF"
                                                    defaultValue=""
                                                    size="small"
                                                    inputProps={{ readOnly: true, disableUnderline: true }}
                                                />}
                                            </InputMask>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Box>

                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs={6}>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                id="college"
                                                value={college}
                                                fullWidth
                                                label="Universidade"
                                                defaultValue=""
                                                size="small"
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />

                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                id="university_id"
                                                value={university_id}
                                                fullWidth
                                                label="ID da universidade"
                                                defaultValue=""
                                                size="small"
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                id="school"
                                                value={school}
                                                label="Faculdade"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                                inputProps={{ readOnly: true, disableUnderline: true }}
                                            />
                                        </Box>

                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                id="email"
                                                value={email}
                                                label="Email"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
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