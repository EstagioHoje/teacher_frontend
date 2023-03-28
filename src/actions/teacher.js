import { ApiGet } from "./server_core/api_get";
import { ApiPut } from "./server_core/api_put";
import { ApiPost } from "./server_core/api_post";
import { ApiDelete } from "./server_core/api_delete";
import { endpoints } from "./server_core/endpoint";

// GETs
export const getTeacher = async (cpf) => {
  const endp = endpoints.PROFESSOR_GET + '/?cpf=' + cpf;
  return await ApiGet(endp)
}

export const getAllJobOffers = async () => {
  return await ApiGet(endpoints.VAGA_GET_ALL)
}

export const getJobOffer = async (id) => {
  const endp = endpoints.VAGA_GET + '/?id=' + id;
  return await ApiGet(endp)
}

export const getAllContracts = async () => {
  return await ApiGet(endpoints.CONTRATO_GET_ALL)
}

export const getContract = async (id) => {
  const endp = endpoints.CONTRATO_GET + '/?id=' + id;
  return await ApiGet(endp)
}

export const getAllReports = async () => {
  return await ApiGet(endpoints.RELATORIO_GET_ALL)
}

export const getReport = async (id) => {
  const endp = endpoints.RELATORIO_GET + '/?id=' + id;
  return await ApiGet(endp)
}

// PUTs
export const putTeacher = async (
  email,
  name,
  cpf,
  department,
  school,
  university,
  universityId,
) => {
  const endp = endpoints.PROFESSOR_PUT
  const data = {
    email: email,
    name: name,
    cpf: cpf,
    department: department,
    school: school,
    university: university,
    universityId: universityId
  }
  return await ApiPut(endp, data)
}

export const putContract = async (
  id,
  student_data,
  company_data,
  duration,
  start_date,
  end_date,
  weekly_hours,
  salary,
  transport_bonus,
  status,
  description
) => {
  const endp = endpoints.CONTRATO_PUT
  const data = {
    id: id,
    student_data: student_data,
    company_data: company_data,
    duration: duration,
    start_date: start_date,
    end_date: end_date,
    weekly_hours: weekly_hours,
    salary: salary,
    transport_bonus: transport_bonus,
    status: status,
    description: description
  }
  return await ApiPut(endp, data)
}

export const putReport = async (
  id,
  student_name,
  student_full_name,
  company_name,
  student_report,
  company_report,
  grade
) => {
  const endp = endpoints.RELATORIO_PUT
  const data = {
    id: id,
    student_name: student_name,
    student_full_name: student_full_name,
    company_name: company_name,
    student_report: student_report,
    company_report: company_report,
    grade: grade
  }
  return await ApiPut(endp, data)
}

// DELETEs
export const deleteTeacher = async (cpf) => {
    const endp = endpoints.PROFESSOR_DELETE + "/?cpf=" + cpf;
    return await ApiDelete(endp)
}