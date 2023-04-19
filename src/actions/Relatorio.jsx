import { ApiGet } from "./server_core/api_get";
import { ApiPut } from "./server_core/api_put";
import { ApiPost } from "./server_core/api_post";
import { ApiDelete } from "./server_core/api_delete";
import { endpoints } from "./server_core/endpoint";

export const relatorio_get_search = async (id) => {
    const endp = endpoints.RELATORIO_GET + "/?id=" + id;
    return await ApiGet(endp)
}

export const relatorio_get_all_uni = async (uni) => {
    const endp = endpoints.RELATORIO_GET_ALL_UNI + "?uni=" + uni;
    return await ApiGet(endp)
}

export const relatorio_post = async (id,report) => {
    const endp = endpoints.RELATORIO_POST;
    const data = {
        id: id,
        report: report,
    }
    console.log(data)
    //return await ApiPost(endp, data)
}

export const aluno_get_search = async (cpf) => {
    const endp = endpoints.ALUNO_GET + "/?cpf=" + cpf;
    return await ApiGet(endp)
}

export const empresa_get_search = async (cnpj) => {
    const endp = endpoints.EMPRESA_GET + "/?cnpj=" + cnpj;
    return await ApiGet(endp)
}