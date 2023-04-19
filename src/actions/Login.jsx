import { ApiGet } from "./server_core/api_get";
import { endpoints } from "./server_core/endpoint";

export const login_teacher = async (cpf, password) => {
    const endp = endpoints.PROFESSOR_GET + "/?cpf=" + cpf;
    return await ApiGet(endp)
}