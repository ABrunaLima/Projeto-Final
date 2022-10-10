import { insertClothing } from "../data/operacoes";

export default async function insertTheClothing(req, res) {
    if (req.method === "POST") {

        await insertClothing({


        })
    }

}

export default async function signUpOne(req, res) {
    if (req.method === "GET") {
        const email = req.body.req
        if (email == "MM@gmail.com") {
            await loginOne(id)
            res.senStatus(200)
        } else {
            return false
        }
    }
}