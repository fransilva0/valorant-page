import api from './api'

export const viewWeapons = () => {
    return api.get(`/weapons?language=pt-BR`)
}