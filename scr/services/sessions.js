import {
    addSession,
    getSessionByToken
} from "../data/sessions";

async function newSession(userId) {
    const sessao = addSession(userId)
    return sessao

}

async function travelWithToken(token) {
    const token = getSessionByToken(token)
    return token

}

export {
    newSession,
    travelWithToken
}