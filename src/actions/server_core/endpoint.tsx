export const endpoints = {
    EXEMPLO: 'student/get/all',

    EMPRESA_GET: 'company/get',
    EMPRESA_POST: 'company/post/',
    EMPRESA_PUT: 'company/put/',
    EMPRESA_DELETE: 'company/delete'
  };

export const api_links = {
  BACKEND: 'http://0.0.0.0:8000',
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