import { ApiGet } from './server_core/api_get';
import { ApiPut } from './server_core/api_put';
import { ApiPost } from './server_core/api_post';
import { ApiDelete } from './server_core/api_delete';
import { endpoints } from './server_core/endpoint';

export const teacher_get = async (cpf) => {
    const endp = endpoints.PROFESSOR_GET + '/?cpf=' + cpf;
    return await ApiGet(endp)
}

export const teacher_post = async (
    name,
    email,
    cpf,
    department,
    school,
    college,
    university_id
) => {
    const endp = endpoints.PROFESSOR_POST;
    const data = {
        name: name,
        email: email,
        cpf: cpf,
        department: department,
        school: school,
        college: college,
        university_id: university_id
    }
    return await ApiPost(endp, data)
}

export const teacher_put = async (
    name,
    email,
    cpf,
    department,
    school,
    college,
    university_id
) => {
    const endp = endpoints.PROFESSOR_PUT;
    const data = {
        name: name,
        email: email,
        cpf: cpf,
        department: department,
        school: school,
        college: college,
        university_id: university_id
    }
    return await ApiPut(endp, data)
}

export const teacher_delete = async (cpf) => {
    const endp = endpoints.PROFESSOR_DELETE + '/?cpf=' + cpf;
    return await ApiDelete(endp)
}