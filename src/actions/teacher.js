import { ApiGet } from "./server_core/api_get";
import { ApiPut } from "./server_core/api_put";
import { ApiPost } from "./server_core/api_post";
import { ApiDelete } from "./server_core/api_delete";
import { endpoints } from "./server_core/endpoint";

export const empresa_get_search = async (cnpj) => {
    const endp = endpoints.EMPRESA_GET + "/?cnpj=" + cnpj;
    return await ApiGet(endp)
}

export const empresa_post = async (cnpj, corporate_name, line_of_business, rh_person_name,
    rh_position_in_company, rh_email, rh_telephone, address_cep, address, address_number,
    address_city, address_state, address_complement) => {
    const endp = endpoints.EMPRESA_POST;
    const data = {
        cnpj: cnpj,
        corporate_name: corporate_name,
        line_of_business: line_of_business,
        rh_person_name: rh_person_name,
        rh_position_in_company: rh_position_in_company,
        rh_email: rh_email,
        rh_telephone: rh_telephone,
        address_cep: address_cep,
        address: address,
        address_number: address_number,
        address_city: address_city,
        address_state: address_state,
        address_complement: address_complement
    }
    console.log(data)
    return await ApiPost(endp, data)
}

export const empresa_put = async (cnpj, corporate_name, line_of_business, rh_person_name,
    rh_position_in_company, rh_email, rh_telephone, address_cep, address, address_number,
    address_city, address_state, address_complement) => {
    const endp = endpoints.EMPRESA_PUT;
    const data = {
        cnpj: cnpj,
        corporate_name: corporate_name,
        line_of_business: line_of_business,
        rh_person_name: rh_person_name,
        rh_position_in_company: rh_position_in_company,
        rh_email: rh_email,
        rh_telephone: rh_telephone,
        address_cep: address_cep,
        address: address,
        address_number: address_number,
        address_city: address_city,
        address_state: address_state,
        address_complement: address_complement
    }
    return await ApiPut(endp, data)
}

export const empresa_delete = async (cnpj) => {
    const endp = endpoints.EMPRESA_DELETE + "/?cnpj=" + cnpj;
    return await ApiDelete(endp)
}