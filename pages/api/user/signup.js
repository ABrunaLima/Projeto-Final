
import { newUser } from "../../../scr/services/users"

export default async function handler(req, res) {
    if (req.method === "POST") {

        const {
            email,
            username
        } = req.body

        console.log(email)

        const dados = { email, username }

        const User = await newUser(dados)

        res.status(200).json(dados)
    } else {

        res.status(401).json("dados insuficientes")
    }

}