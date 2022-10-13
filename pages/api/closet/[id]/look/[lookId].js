import { ObjectId } from "mongodb"
import { moveLookOfClosetToTrash, saveLookOnCloset, showLooksOnCloset, showOneCloset } from "../../../../../scr/services/closet"
import { moveLookToTrash, showOneLook } from "../../../../../scr/services/look"

export default async function handler(req, res) {

    //adicionar um look ao closet selecionado
    if (req.method === "POST") {

        const id = req.query.id
        const lookId = req.query.lookId

        //PEGA O ARRAY DE LOOK DO CLOSET
        const closet = await showLooksOnCloset(id)


        //VERIFICA SE ID DO LOOK EXISTE NO ARRAY DO CLOSET
        const look = JSON.parse(closet).some(ele => ele == lookId)

        //VERIFICA SE É UM ID VÁLIDO
        const existLook = await showOneLook(lookId)
        if (closet) {
            //encontrar o id no array do closet
            if (existLook) {
                if (!look) {
                    await saveLookOnCloset(lookId, id)
                    res.status(200).json("adicionado", closet)
                } else {
                    res.status(404).json("Look já existe no closet!")
                }
            } else {
                res.status(404).json("Não foi possível encontrar o look!")
            }
        } else {
            res.status(404).json("Nenhum closet identificado!")
        }

    }

    //mostrar um look especifico do closet
    if (req.method === "GET") {

        const id = req.query.id
        const lookId = req.query.lookId

        //PEGA O ARRAY DE LOOK DO CLOSET
        const closet = await showLooksOnCloset(id)

        //VERIFICA SE O LOOK EXISTE NO ARRAY DO CLOSET
        const look = JSON.parse(closet).some(ele => ele == lookId)


        if (closet) {
            //encontrar o id no array do closet
            if (look) {
                const theLook = await showOneLook(lookId)
                res.status(200).json(theLook)
            } else {
                res.status(404).json("Look não encontrado")
            }
        } else {
            res.status(404).json("Nenhum closet identificado!")
        }
    }

    //apagar look do closet especifico
    if (req.method === "DELETE") {

        const id = req.query.id
        const lookId = req.query.lookId

        //PEGA O ARRAY DE LOOK DO CLOSET
        const closet = await showLooksOnCloset(id)

        //VERIFICA SE O LOOK EXISTE NO ARRAY DO CLOSET
        const look = JSON.parse(closet).some(ele => ele == lookId)


        if (closet) {
            //encontrar o id no array do closet
            if (look) {
                await moveLookOfClosetToTrash(id, lookId)
                await moveLookToTrash(lookId)
                res.status(200).json("apagado.")
            } else {
                res.status(404).json("Look não encontrado")
            }
        } else {
            res.status(404).json("Nenhum closet identificado!")
        }

    }

}