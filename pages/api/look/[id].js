export default async function handler(req, res) {
    if (req.method === "POST") {
        const id = req.query.id
        const { cloth } = req.body

        const clothin = showOneCloth(cloth.id)

        if (clothin) {
            await insertClothOnLook(id, cloth)
            res.status(200).json(showOneLook(id))
        } else {
            res.status(400).json("DEU RUIM")
        }

    }
}