export default function addRoupaCloset(req, res) {
    if (req.method === "POST") {
        //Esta linha danos sempre o user que fez o pedido
        const user = findUserByToken(req.headers("authentication"))
        if (!user) res.sendStatus(404)
        else {
            getClosetByUserId(user._id)
        }
    }
}