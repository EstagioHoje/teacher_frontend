import { ApiGet } from "./server_core/api_get";
import { ApiPut } from "./server_core/api_put";
import { ApiPost } from "./server_core/api_post";
import { ApiDelete } from "./server_core/api_delete";
import { endpoints } from "./server_core/endpoint";
import { ApiDelet } from "./server_core/api_delete";

export const aluno_get_search = async (cpf) => {
    const endp = endpoints.ALUNO_GET + "/?cpf=" + cpf;
    return await ApiGet(endp)
}

export const aluno_post = async (name, cpf, course, college, entry_year,
    email, resumee, university_id, school, telephone, address, cep,
    city, number, state,complement) => {
    const endp = endpoints.ALUNO_POST;
    const data = {
        cpf: cpf,
        name: name,
        course: course,
        college: college,
        entry_year: `${entry_year}-01-01`,
        email: email,
        resumee: resumee,
        university_id: university_id,
        school: school,
        telephone: telephone,
        address: address,
        cep: cep,
        city: city,
        number: number,
        state: state,
        complement: complement
    }
    console.log(data)
    return await ApiPost(endp, data)
}

export const aluno_put = async (name, cpf, course, college, entry_year,
    email, resumee, university_id, school, telephone, address, cep,
    city, number, state,complement) => {
    const endp = endpoints.ALUNO_PUT;
    const data = {
        cpf: cpf,
        name: name,
        course: course,
        college: college,
        entry_year: `${entry_year}-01-01`,
        email: email,
        resumee: resumee,
        university_id: university_id,
        school: school,
        telephone: telephone,
        address: address,
        cep: cep,
        city: city,
        number: number,
        state: state,
        complement: complement
    }
    console.log(data)
    return await ApiPut(endp, data)
}

export const aluno_delete = async (cpf) => {
    const endp = endpoints.ALUNO_DELETE + "/?cpf=" + cpf;
    return await ApiDelete(endp)
}