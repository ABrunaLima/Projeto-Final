


import {
    checkIfEmailExists, valideUser, findUserByToken
} from "../../../scr/data/users"


export default async function handler(req, res) {
    if (req.method === "GET") {

        const {
            email
        } = req.body

        console.log(email)

        const userByUsername = await getUserByUsername(usernameOrEmail)
        const userByEmail = await getUserByEmail(usernameOrEmail)
        let user = null

        if (!userByEmail && !userByUsername) {
            return res
                .status(404)
                .json({
                    "message": "O utilizador não foi encontrado!"
                })
        }
        if (!userByEmail)
            user = userByUsername
        else
            user = userByEmail

        if (user.password !== password) {
            return res
                .status(401)
                .json({
                    "message": "A password introduzida é inválida!"
                })
        }

        const token = await addSession(user._id)
        res.status(200)
            .json({ token })
    }
}