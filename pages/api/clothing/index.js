import { showAllClothes } from "../../../scr/services/clothing";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const clothes = await showAllClothes()
        res.status(200).json(clothes)
    }
}
