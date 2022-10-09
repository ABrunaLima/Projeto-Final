export default async function addUser(req, res) {
    if (req.method === "GET") {
        const id = req.params.id
        await callClient(id)
        res.sendStatus(204)
    } else {
        return res.status(404)
    }
}