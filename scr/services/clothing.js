import {
    insertClothing,
    getAllClothing,
    getClothingById,
} from "../data/clothing";


//adicionar uma roupa a base de dados
async function pullCloth(pathToImage, color, type, slot, title) {
    const cloth = await insertClothing({
        pathToImage,
        title,
        slot, //top, bottom, shoes
        type,
        color
    })
    //todos os slots começam inicialmente com false
    return cloth
}

//mostrar todas as roupas armazenadas no sistema
async function showAllClothes() {
    const clothes = await getAllClothing()
    if (clothes == undefined) {
        return "Nenhuma roupa disponível"
    }
    return clothes
}

//mostrar uma roupa com o id correspondente 
async function showOneCloth(idCloth) {
    const clothOne = await getClothingById(idCloth)
    if (clothOne === undefined) {
        return "Roupa não encontrada"
    }
    return clothOne
}



export {
    pullCloth,
    showAllClothes,
    showOneCloth
}

