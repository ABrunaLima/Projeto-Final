import { valideUser } from "../../../scr/services/users"
import { newToken } from "../../../scr/services/sessions"

export default async function handler(req, res) {
    if (req.method === "POST") {

        const {
            email
        } = req.body


        const user = await valideUser(email)
        console.log(user)
        if (user.email == "MM@gmail.com") {
            res.status(200).json(user.username)
        }

        const token = await newToken(user._id)
        res.status(200)
            .json({ token })
    }
}

/*


*/