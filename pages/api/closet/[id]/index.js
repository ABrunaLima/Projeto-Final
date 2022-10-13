import { moveClosetToTrash, showLooksOnCloset, showOneCloset } from "../../../../scr/services/closet"


export default async function handler(req, res) {


    //deleta um closet especifico pelo id
    if (req.method === "DELETE") {
        const
            id
                = req.query.id

        const closet = await showOneCloset(id)
        console.log(closet)
        if (closet != null) {
            await moveClosetToTrash(id)
            res.status(200).json("apagado")
        } else {
            res.status(404).json("O closet inserido não existe!")
        }

    }


    //mostrar todos os looks(em um array) de um closet especifico
    if (req.method === "GET") {
        const id = req.query.id

        const closet = await showLooksOnCloset(id)
        console.log(closet, id)
        if (closet != null) {
            res.status(200).json(closet)
        } else {
            res.status(404).json("O closet inserido não existe")
        }

    }



}
