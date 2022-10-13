import { valideUser } from "../../../scr/services/users"
import { newToken } from "../../../scr/services/sessions"

export default async function handler(req, res) {
    if (req.method === "POST") {

        const email = "MM@gmail.com"
        const user = await valideUser(email)
        console.log(user)

        const token = await newToken(user._id)
        res.status(200)
            .json({ token })
    }
}

/*


*/