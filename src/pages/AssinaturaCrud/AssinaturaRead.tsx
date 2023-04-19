import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Collapse } from '@mui/material';

import { Sidebar } from '../../components/sidebar/sidebar';
import { assinatura_get_all_uni } from '../../actions/Assinatura';
import { teacher_get } from '../../actions/Professor';


export default function AssinaturaRead({ setAuthorized }) {
  const [cpf, setCpf] = useState(sessionStorage.getItem("cpf"))

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [rows, setRows] = useState([])
  const dictStatus = {
    "a": "Aguardando assinatura aluno",
    "b": "Aguardando assinatura professor",
    "c": "Contrato assinado por todos",
    "f": "Rejeitado pelo aluno",
    "g": "Rejeitado pelo professor"
  }

  const columns: GridColDef[] = [{
    field: 'id',
    headerName: '',
    width: 90,
    renderCell: (params) => (
      <Link component={RouterLink} to={`/assinatura/read?id=${params.value}`}>
        Acessar
      </Link>
    )
  }, {
    field: 'student_name',
    headerName: 'Nome do estágiario',
    width: 200
  }, {
    field: 'start_date',
    headerName: 'Inicio do estágio',
    width: 120
  }, {
    field: 'end_date',
    headerName: 'Fim do estágio',
    width: 120
  }, {
    field: 'status',
    headerName: 'Status',
    width: 250
  }, {
    field: 'reject_reason',
    headerName: 'Motivo de rejeição',
    width: 300
  }];

  useEffect(() => {
    (async () => {
      let teacher = await teacher_get(cpf);
      let uni = teacher.data.data[0].college;
      let contratos = await assinatura_get_all_uni(uni);
      if (contratos != null) {
        if (contratos.data[0] != null) {
          if (contratos.data != null) {
            const listOfContratos = contratos.data.reduce(function (result, element) {
              const arrayRelatorio = {};
              arrayRelatorio.id = element.id;
              arrayRelatorio.student_name = element.student_data.name;
              arrayRelatorio.start_date = element.start_date;
              arrayRelatorio.end_date = element.end_date;
              arrayRelatorio.status = dictStatus[element.status];
              arrayRelatorio.reject_reason = element.reject_reason;
              result.push(arrayRelatorio);
              return result;
            }, []);
            setRows(listOfContratos);
          }
        }
      }
    }
    )()
  }, []);

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
            display: "flex",
            flexDirection: "column",
            height: windowHeight,
            minHeight: 400,
            minWidth: 360,
            overflow: "hidden",
            overflowY: "scroll",
          }}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 20,
                    },
                  },
                }}
                slots={{
                  toolbar: GridToolbar,
                }}
                disableRowSelectionOnClick
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}