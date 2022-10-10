import {
    getUserByEmail,
    addUser,
    checkIfEmailExists
} from "../data/users";

async function checkIfEmailExists(email) {
    const user = await getUserByEmail(email)
    return user !== null
}

async function newUser(email, username) {
    const user = addUser({
        email,
        username
    })
    return user
}

async function valideUser(email) {
    const user = await getUserByEmail(email)
    return user !== null
}

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
    valideUser
}