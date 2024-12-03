import { useApi } from "../useApi"

export async function usePerMonth(params = {}) {
    const { api } = useApi();

    const request = await api.post("AtendimentoPorServico/BuscaMensal", params);

    return request.data;
}