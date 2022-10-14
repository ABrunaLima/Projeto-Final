
import {
    insertNewCloset,
    insertLookToCloset,
    getClosets,
    getAClosetById,
    getClosetsByUserId,
    removeClosetById,
    removeOneLookFromClosetById,
    getLastClosetCreatedByUserId
} from "../data/closet";


//Recebe um argumento que e um array de ids de looks
async function createCloset(userId) {
    const closetId = insertNewCloset({
        closet: [],
        userId: userId
    })
    return closetId
}

//salvar o token e o id do look no closet correspondente
async function saveLookOnCloset(lookId, closetId) {
    const savedLook = await insertLookToCloset(lookId, closetId, token)
    return savedLook
}

async function showLastClosetCreatedByUserId(userId) {
    const lastCloset = getLastClosetCreatedByUserId(userId)
    return lastCloset
}

async function showClosetsByUserId(userId) {
    const closets = await getClosetsByUserId(userId)
    return closets
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
    showLooksOnCloset,
    showClosetsByUserId,
    showLastClosetCreatedByUserId
}
