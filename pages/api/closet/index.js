import { getMaxClosetId } from "../../../scr/data/closet"
import { createCloset, showAllClosets } from "../../../scr/services/closet"
import { findUserByToken } from "../../../scr/services/users"

export default async function handler(req, res) {

    //adicionar um closet a base de dados
    if (req.method === "POST") {

        const token = req.headers["authorization"]
        const user = await findUserByToken(token)

        console.log(user)
        const objCloset = await createCloset(user._id)

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

