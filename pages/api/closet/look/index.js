import { showLastClosetCreatedByUserId } from "../../../../scr/services/closet"
import { createNewLook } from "../../../../scr/services/look"

export default async function handler(req, res) {


    //CRIA UM LOOK
    //inicialmente o look será adicionado SEMPRE no ultimo closet criado

    if (req.method === "POST") {

        //encontrar ID do usuario
        const token = req.headers["authorization"]
        const user = await findUserByToken(token) //user._id



        const { clothes } = req.body

        //retorna ultimo closet criado por esse usuario
        const lastCloset = await showLastClosetCreatedByUserId(user._id)

        if (lastCloset) {
            const look = await createNewLook(clothes, lastCloset._id)
            res.status(200).json(look)
        } else {
            res.status(404).json("Closet indefinido ou indisponível!")
        }

    }


}