import {
    addSession,
    getSessionByToken
} from "../data/sessions";

//Criar um token
async function newToken(userId) {
    const sessao = addSession(userId)
    return sessao

}

//verificar qual a corrêspondencia do token definido
async function travelWithToken(token) {
    const token = getSessionByToken(token)
    return token

}

export {
    newToken,
    travelWithToken
}