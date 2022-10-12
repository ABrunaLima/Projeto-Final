import { getSessionByToken } from "../data/sessions";
import {
    getUserByEmail,
    addUser,
    checkIfEmailExists,
    getUserById
} from "../data/users";


//verificar se o email existe
async function verifyEmail(email) {
    const user = await checkIfEmailExists(email)
    return user !== null
}

//criar novo usuário
async function newUser(dados) {
    const user = await addUser(
        dados)
    return user
}

//verificar se existe algum usuário com o email inserido e retorna o usuario
async function valideUser(email) {
    const user = await getUserByEmail(email)
    return user
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
    verifyEmail,
    newUser,
    valideUser,
    findUserByToken
}