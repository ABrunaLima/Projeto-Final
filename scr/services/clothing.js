import {
    insertClothing,
    getAllClothing,
    getClothingById,
    insertClothingToLook
} from "../data/clothing";


//adicionar uma roupa a base de dados
async function pullCloth(idCloth, path_to_image, color_clothing, type, slot) {
    const cloth = await insertClothing({
        idCloth,
        path_to_image,
        color_clothing,
        type,
        slot
    })
    return cloth
}

//mostrar todas as roupas armazenadas no sistema
async function pushAllClothes() {
    const clothes = await getAllClothing()
    if (clothes == undefined) {
        return "Nenhuma roupa disponível"
    }
    return clothes
}

//mostrar uma roupa com o id correspondente 
async function pushOneCloth(idCloth) {
    const clothOne = getClothingById(idCloth)
    if (clothOne === undefined) {
        return "OPA! EMAIL ERRADO!"
    }
    return clothOne
}

async function createLook(look, userId) {

    //se o look tiver ao menos duas peças de roupa, podera ser salvo
    if (Object.keys(look).length > 2) {
        const look = insertClothingToLook(look, userId)

        // if (Object.keys(look).filter(ele => ele != undefined) > 2) {
        //     return (
        //         look,
        //         true
        //     )
        // } else {
        //     return false
        // }
    }
}


export {
    pullCloth,
    pushAllClothes,
    pushOneCloth,
    createLook
}

