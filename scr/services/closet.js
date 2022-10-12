
import {
    insertNewCloset,
    insertLookToCloset,
    getClosets,
    getAClosetById,
    getMaxClosetId,
    removeClosetById,
    removeOneLookFromClosetById
} from "../data/closet";


//Recebe um argumento que e um array de ids de looks
async function createCloset(looks, title, userId) {
    const maxId = await getMaxClosetId()

    const closetId = insertNewCloset({
        closet: looks,
        title: title,
        userId: userId,
        idx: JSON.stringify(maxId) + 1 //vai numerar os closets (closet 1, closet 2....)
    })
    return closetId
}

//salvar o token e o id do look no closet correspondente
async function saveLookOnCloset(lookId, userId) {
    const savedLook = await insertLookToCloset(lookId, userId)
    return savedLook
}

//mostrar todos os looks de um closet
async function showOneCloset(closetId) {
    const closet = await getAClosetById(closetId)
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



async function moveLookOfClosetToTrash(closetId, lookId) {
    return removeOneLookFromClosetById(closetId, lookId)
}

export {
    createCloset,
    showAllClosets,
    showOneCloset,
    saveLookOnCloset,
    moveClosetToTrash,
    moveLookOfClosetToTrash

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