
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
async function createCloset(userId) {
    const closetId = insertNewCloset({
        closet: [],
        userId: userId,
    })
    return closetId
}

//salvar o token e o id do look no closet correspondente
async function saveLookOnCloset(lookId, closetId) {
    const savedLook = await insertLookToCloset(lookId, closetId)
    return savedLook
}

//mostrar todos os looks de um closet
async function showLooksOnCloset(closetId) {
    const closet = await getAClosetById(closetId)
    return closet.closet

}

//retorna um closet especifico
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
    moveLookOfClosetToTrash,
    showLooksOnCloset
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