import { newUser, valideUser } from "../../../scr/services/users"
import { newToken } from "../../../scr/services/sessions"

export default async function handler(req, res) {
    if (req.method === "POST") {

        const email = "MM@gmail.com"
        let user = await valideUser(email)
        if (!user) {
            const email = "MM@gmail.com"
            const username = "Marta Maria"

            const dados = { email, username }

            const User = await newUser(dados)
        }
        user = await valideUser(email)
        console.log(user)

        const token = await newToken(user._id)
        res.status(200)
            .json({ token })
    }
}

/*


*/