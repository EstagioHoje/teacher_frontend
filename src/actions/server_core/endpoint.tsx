export const endpoints = {
    VAGA_APPLY: 'vacancy/apply',
    VAGA_GET: 'vacancy/getID',
    VAGA_GET_ALL: 'vacancy/get/all',
    VAGA_POST: 'vacancy/post/',
    VAGA_PUT: 'vacancy/put/',
    VAGA_DELETE: 'vacancy/delete',

    ASSINATURA_GET: 'contract/get',
    ASSINATURA_GET_ALL: 'contract/get/all',
    ASSINATURA_GET_ALL_UNI: 'contract/get/all_uni',
    ASSINATURA_SIGN: 'contract/put/sign_teacher',
    ASSINATURA_REJECT: 'contract/put/reject_teacher',

    RELATORIO_GET: 'report/get',
    RELATORIO_GET_ALL: 'report/get/all',
    RELATORIO_GET_ALL_CPF: 'report/get/all_cpf',
    RELATORIO_POST: 'report/post/',

    ALUNO_GET: 'teacher/get',
    ALUNO_POST: 'teacher/post/',
    ALUNO_PUT: 'teacher/put/',
    ALUNO_DELETE: 'teacher/delete',
    ALUNO_GET_ALL: 'teacher/get/all',

    EMPRESA_GET: 'company/get',
    EMPRESA_POST: 'company/post/',
    EMPRESA_PUT: 'company/put/',
    EMPRESA_DELETE: 'company/delete',
    EMPRESA_GET_ALL: 'company/get/all',
  };

export const api_links = {
  BACKEND: 'http://ec2-54-146-77-15.compute-1.amazonaws.com:8000',
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