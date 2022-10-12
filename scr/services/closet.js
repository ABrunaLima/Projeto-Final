
import {
    insertNewCloset,
    insertLookToCloset,
    getClosets,
    getLooksOnEspecificClosetById,
    getMaxClosetId,
    removeClosetById
} from "../data/closet";


//Recebe um argumento que e um array de ids de looks
async function createCloset(looks, title, userId) {
    const maxId = await getMaxClosetId()

    const closetId = insertNewCloset({
        closet: looks,
        title: title,
        userId: userId,
        idx: maxId + 1 //vai numerar os closets (closet 1, closet 2....)
    })
    return closetId
}

//salvar o token e o id do look no closet correspondente
async function saveLookOnCloset(lookId, userId) {
    const savedLook = await insertLookToCloset(lookId, userId)
    return savedLook
}


//mostrar um closet a partir do id do mesmo 
async function showOneCloset(closetId) {
    const closet = await getLooksOnEspecificClosetById(closetId)
    if (closet == null) {
        return "Closet não encontrado!!!!!!"
    }
    return closet
}

//mostrar todos os closets disponíneis
async function showAllClosets() {
    const closets = await getClosets()
    return closets
}

//apagar um closet
async function moveClosetToTrash(closetId) {
    return removeClosetById(closetId)
}

export {
    createCloset,
    showAllClosets,
    showOneCloset,
    saveLookOnCloset,
    moveClosetToTrash

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