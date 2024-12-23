import api from './api'

export const viewAgents = () => {
    return api.get(`/agents?language=pt-BR`)
}

export const specificAgent = (uuidAgent) => {
    return api.get(`/agents/${uuidAgent}?language=pt-BR`)
}