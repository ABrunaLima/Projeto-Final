
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




/*
app.post("/signup", async (req, res) => {
    const {
        email,
        password,
        passwordConfirmation,
        acceptsTerms,
        acceptsCommunications
    } = req.body

    const validation = await validateFields(req.body)
    if (validation.success) {
        const id = await addUser({
            email,
            password,
            passwordConfirmation,
            acceptsTerms,
            acceptsCommunications
        })
        res.status(201)
            .json({
                "message": "Utilizador Criado com Sucesso!",
                "_id": id
            })
    } else {
        res.status(400).json({
            "message": "Os dados introduzidos não são válidos.",
            "errors": validation.errors
        })
    }
})
*/