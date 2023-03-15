import { ApiGet } from "./server_core/api_get";
import { endpoints } from "./server_core/endpoint";

export const exemplo_get = async () => {
    const endp = endpoints.EXEMPLO
    return await ApiGet(endp)
}
