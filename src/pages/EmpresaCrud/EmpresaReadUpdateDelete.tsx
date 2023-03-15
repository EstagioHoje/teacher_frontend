import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from "../../data/logo.png";
import InputMask from "react-input-mask";
import { useSearchParams, Route, Link } from 'react-router-dom'

import { api_links } from '../../actions/server_core/endpoint';

export default function EmpresaReadUpdateDelete() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
            const params = new URLSearchParams(window.location.pathname);
            console.log(params.get("id"))
        }

        window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    })

    /*const [info, setInfo] = useState([])

    useEffect(() => {

        ( async () => {
            let info = await info()
            console.log(produtos.data)
            setInfo(produtos.data)
            }
        )()

    }, []);*/

    const recruterInfo = async () => {
        /*const name = document.getElementById("name_prod_cadastro").value
        const valor = parseFloat(document.getElementById("valor_prod_cadastro").value)
        const desc = document.getElementById("desc_prod_cadastro").value
        const categoria = document.getElementById("categoria_prod_cadastro").value
        const quantidade = parseInt(document.getElementById("quantidade_prod_cadastro").value)
        */
        //await produto_post_new(name, valor, desc, categoria, quantidade)
    }


    return (
        <Route render={({ history }) => (
            <Container disableGutters maxWidth={windowWidth} sx={{ padding: 0 }}>
                <Box sx={{ minWidth: 600, minHeight: 300, height: windowHeight, padding: 0, mb: 0 }}>
                    <Grid container spacing={0} sx={{
                        height: windowHeight,
                        minHeight: 400,
                        maxHeight: windowHeight,
                        mb: 0
                    }}>
                        <Grid xs={4} sx={{
                            height: windowHeight,
                            minHeight: 400,
                            maxHeight: windowHeight,
                            mb: 0
                        }}>
                            <Box sx={{
                                height: windowHeight,
                                minHeight: 400,
                                maxHeight: windowHeight,
                                backgroundColor: 'blue',
                                mb: 0
                            }}>
                                <Box sx={{
                                    height: windowHeight / 8,
                                    minHeight: 400 / 8,
                                    maxHeight: windowHeight / 8,
                                    backgroundColor: 'blue',
                                    mb: 0
                                }}>

                                </Box>
                                <Grid container justifyContent="center"
                                    sx={{
                                        height: windowHeight / 4,
                                        minHeight: 400 / 4,
                                        maxHeight: windowHeight / 4,
                                        backgroundColor: 'blue',
                                        mb: 0
                                    }}
                                >
                                    <img src={logo} style={{ height: "100%", width: "auto", maxWidth: "100%" }}></img>
                                </Grid>
                            </Box>
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
                                    Informações da Empresa
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Grid container spacing={0} columns="16">
                                        <Grid xs={10}>
                                            <Box sx={{ mr: 1 }}>
                                                <TextField
                                                    id="Razao"
                                                    fullWidth
                                                    label="Razão Social"
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid xs>
                                            <Box sx={{ ml: 1 }}>
                                                <InputMask
                                                    mask="99.999.999/99999-99"
                                                    disabled={false}
                                                    maskChar=" "
                                                    value="99.999.999/99999-99"
                                                >
                                                    {() => <TextField
                                                        id="CNPJ"
                                                        label="CNPJ"
                                                        fullWidth
                                                        size="small"
                                                        inputProps={{ readOnly: true, disableUnderline: true }}
                                                    />}
                                                </InputMask>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Box sx={{ m: 0 }}>
                                        <TextField
                                            id="Ramo"
                                            fullWidth
                                            label="Ramo de atuação"
                                            defaultValue=""
                                            size="small"
                                        />
                                    </Box>
                                </Box>

                                <Box sx={{ my: 2 }}>
                                    Informações do Representante e RH
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Grid container spacing={0} columns="16">
                                        <Grid xs={10}>
                                            <Box sx={{ mr: 1 }}>
                                                <TextField
                                                    id="NameRepresentante"
                                                    fullWidth
                                                    label="Nome do representante"
                                                    defaultValue=""
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid xs>
                                            <Box sx={{ ml: 1 }}>
                                                <TextField
                                                    id="Cargo"
                                                    label="Cargo"
                                                    defaultValue=""
                                                    fullWidth
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Grid container spacing={0} columns="16">
                                        <Grid xs={8}>
                                            <Box sx={{ mr: 1 }}>
                                                <InputMask
                                                    mask="(99)999999999"
                                                    disabled={false}
                                                    maskChar=" "
                                                >
                                                    {() => <TextField
                                                        id="Telefone"
                                                        fullWidth
                                                        label="Telefone do RH"
                                                        defaultValue=""
                                                        size="small"
                                                    />}
                                                </InputMask>
                                            </Box>
                                        </Grid>
                                        <Grid xs>
                                            <Box sx={{ ml: 1 }}>
                                                <TextField
                                                    id="Email"
                                                    label="Email do RH"
                                                    defaultValue=""
                                                    fullWidth
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>


                                <Box sx={{ my: 2 }}>
                                    Informações de endereço
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Grid container spacing={0} columns="16">
                                        <Grid xs={5}>
                                            <Box sx={{ mr: 1 }}>
                                                <InputMask
                                                    mask="99999-999"
                                                    disabled={false}
                                                    maskChar=" "
                                                >
                                                    {() => <TextField
                                                        id="CEP"
                                                        fullWidth
                                                        label="CEP"
                                                        defaultValue=""
                                                        size="small"
                                                    />}
                                                </InputMask>
                                            </Box>
                                        </Grid>
                                        <Grid xs>
                                            <Box sx={{ ml: 1 }}>
                                                <TextField
                                                    id="Endereco"
                                                    label="Endereço"
                                                    defaultValue=""
                                                    fullWidth
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ my: 2 }}>
                                    <Grid container spacing={0} columns="16">
                                        <Grid xs={4}>
                                            <Box sx={{ mr: 1 }}>
                                                <TextField
                                                    id="Number"
                                                    fullWidth
                                                    label="Número"
                                                    defaultValue=""
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid xs>
                                            <Box sx={{ mx: 1 }}>
                                                <TextField
                                                    id="Cidade"
                                                    label="Cidade"
                                                    defaultValue=""
                                                    fullWidth
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid xs>
                                            <Box sx={{ ml: 1 }}>
                                                <TextField
                                                    id="Estado"
                                                    label="Estado"
                                                    defaultValue=""
                                                    fullWidth
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ my: 2 }}>
                                    <Grid container spacing={0} columns="16">
                                        <Grid xs>
                                            <Box sx={{ m: 0 }}>
                                                <TextField
                                                    id="Complemento"
                                                    label="Complemento"
                                                    defaultValue=""
                                                    fullWidth
                                                    size="small"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ my: 2 }}>
                                    <Grid container spacing={0} columns="16">
                                        <Grid xs>
                                            <Box sx={{ my: 2, mr: 1 }}>
                                                <Button fullWidth sx={{
                                                    backgroundColor: "yellow"

                                                }}>
                                                    Salvar informações
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Grid xs>
                                            <Box sx={{ my: 2, ml: 1 }}>
                                                <Button fullWidth sx={{
                                                    backgroundColor: "red"

                                                }}>
                                                    Excluir conta
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        )} />
    );
}