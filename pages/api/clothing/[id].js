import { showOneCloth } from "../../../scr/services/clothing";

export default async function handler(req, res) {
    if (req.method === "GET") {

        const clothId = req.query.id

        const cloth = await showOneCloth(clothId)

        if (cloth) {
            res.status(200).json(cloth)
        } else {
            res.status(404).json("Roupa não encontrada!")
        }

    }
}
