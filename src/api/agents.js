import api from './api'

export const viewAgents = () => {
    return api.get(`/agents`)
}