import api from './api'

export const viewAgents = () => {
    return api.get(`/agents?language=pt-BR`)
}