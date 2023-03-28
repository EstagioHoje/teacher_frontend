export const endpoints = {
  PROFESSOR_GET_ALL: 'teacher/get/all',
  PROFESSOR_GET: 'teacher/get',
  PROFESSOR_PUT: 'teacher/put',
  PROFESSOR_POST: 'teacher/post',
  PROFESSOR_DELETE: 'teacher/delete',

  VAGA_GET_ALL: 'vacancy/get/all',
  VAGA_GET: 'vacancy/get',
  VAGA_PUT: 'vacancy/put',
  VAGA_POST: 'vacancy/post',
  VAGA_DELETE: 'vacancy/delete',

  CONTRATO_GET_ALL: 'contract/get/all',
  CONTRATO_GET: 'contract/get',
  CONTRATO_PUT: 'contract/put',
  CONTRATO_POST: 'contract/post',
  CONTRATO_DELETE: 'contract/delete',

  RELATORIO_GET_ALL: 'report/get/all',
  RELATORIO_GET: 'report/get',
  RELATORIO_PUT: 'report/put',
  RELATORIO_POST: 'report/post',
  RELATORIO_DELETE: 'report/delete',
};

export const api_links = {
  BACKEND: 'http://ec2-34-207-221-75.compute-1.amazonaws.com:8000/',
  FRONTEND: 'http://localhost:1234'
};

export const headers = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
};

export const headers_post = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};