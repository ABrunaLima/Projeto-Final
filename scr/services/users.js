import { getSessionByToken } from "../data/sessions";
import {
    getUserByEmail,
    addUser,
    checkIfEmailExists
} from "../data/users";

import { getSessionByToken } from "../data/sessions";

//verificar se o email existe
async function checkIfEmailExists(email) {
    const user = await getUserByEmail(email)
    return user !== null
}

//criar novo usuário
async function newUser(email, username) {
    const user = addUser({
        email,
        username
    })
    return user
}

//verificar se existe algum usuário com o email inserido e retorna o usuario
async function valideUser(email) {
    const user = await getUserByEmail(email)
    return user !== null
}

//encontra o usuario a partir do token
async function findUserByToken(token) {
    const session = await getSessionByToken(token)

    if (!session) {
        //erro
        return undefined
    } else {
        return await getUserById(session.userId)
    }

}

export {
    checkIfEmailExists,
    newUser,
    valideUser,
    findUserByToken
}