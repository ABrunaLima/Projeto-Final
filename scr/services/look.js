import {
    insertNewLook,
    insertClothingToLook,
    updateClothingToLook,
    getLookById,
    removeLookById
} from "../data/look";
import { getClothingById } from "../data/clothing";
import { ObjectId } from "mongodb";

/*
{
    top,
    bottom,
    shoes

    vestido ocupa top and bottom
}
*/


async function createNewLook(clothesIds) {

}

//editar ou adicionar roupa no look
async function insertClothOnLook(lookId, clothId) {

}


// mostra um look armazenado atraves do seu id
async function showOneLook(idLook) {
    const lookOne = getLookById(idLook)
    if (lookOne === undefined) {
        return "código inexistente"
    }
    return lookOne
}

//apagar um look
async function moveLookToTrash(idLook) {
    return removeLookById(idLook)
}


export {
    createNewLook,
    insertClothOnLook,
    showOneLook,
    moveLookToTrash
}