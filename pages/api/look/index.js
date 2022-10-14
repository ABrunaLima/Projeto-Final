import { showOneCloth } from "../../../scr/services/clothing"
import { createNewLook, insertClothOnLook, showOneLook } from "../../../scr/services/look"

export default async function handler(req, res) {
    const clothes = req.body
    if (req.method === "POST") {
        const look = await createNewLook(clothes)
        res.status(200).json(look)
    }
}
/*
export default async function handler(req, res) {

    //adicionar um closet a base de dados
    if (req.method === "POST") {
        const {
            looks,
            title,
            userId
        } = req.body

        const objCloset = await createCloset(looks, title, userId)

        if (objCloset != undefined) {
            res.status(200).json(objCloset)
        } else {
            res.status(404).json("Não foi possível inserir um novo closet")
        }

    } else if (req.method === "GET") {

        //mostrar todos os closets armazenados
        const allClosets = await showAllClosets()
        if (allClosets != null) {
            res.status(200).json(allClosets)
        } else {
            res.status(404).json("Nenhum closet encontrado!")
        }

    }

}

*/