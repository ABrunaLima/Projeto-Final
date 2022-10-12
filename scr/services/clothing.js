import {
    insertClothing,
    getAllClothing,
    getClothingById,
} from "../data/clothing";


//adicionar uma roupa a base de dados
async function pullCloth(path_to_image, color_clothing, type, slot) {
    const cloth = await insertClothing({
        path_to_image,
        color_clothing,
        type,
        slot
    })
    //todos os slots começam inicialmente com false
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



export {
    pullCloth,
    pushAllClothes,
    pushOneCloth
}

