
import { cloneElement } from "react";
import {
    insertNewCloset,
    insertLookToCloset,
    getClosets,
    getLooksOnEspecificClosetById,
    getMaxClosetId
} from "../data/closet";


//Recebe um argumento que e um array de ids de looks
async function createCloset(looks, title, userId) {
    const maxId = await getMaxClosetId()

    const closetId = insertNewCloset({
        closet: looks,
        title: title,
        userId: userId,
        idx: maxId + 1
    })
    return closetId
}

//salvar o token e o id do look no closet correspondente
async function saveLookOnCloset(lookId, userId) {
    const savedLook = await insertLookToCloset(lookId, userId)
    return savedLook
}


async function showOneCloset(closetId) {
    const closet = await getLooksOnEspecificClosetById(closetId)
    if (closet == null) {
        return "Closet não encontrado!!!!!!"
    }
    return closet
}

async function showAllClosets() {
    const closets = await getClosets()
    return closets
}

export {
    showAllClosets,
    showOneCloset,
    saveLookOnCloset,

}


// export default async function insertTheClothing(req, res) {
//     if (req.method === "POST") {

//         await insertClothing({


//         })
//     }

// }

// export default async function signUpOne(req, res) {
//     if (req.method === "GET") {
//         const email = req.body.req
//         if (email == "MM@gmail.com") {
//             await loginOne(id)
//             res.senStatus(200)
//         } else {
//             return false
//         }
//     }
// }