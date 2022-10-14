import {
    insertNewLook,
    updateClothingToLook,
    getLookById,
    removeLookById
} from "../data/look";
import { getClothingById } from "../data/clothing";
import { ObjectId } from "mongodb";
import { bodyStreamToNodeStream } from "next/dist/server/body-streams";
import { showOneCloth } from "./clothing";

/*
{
   id: look

    vestido ocupa top and bottom
}
*/

//cria um look
async function createNewLook(clothes, closetId) {
    const look = insertNewLook(clothes, closetId)
    return look
}

//editar ou adicionar roupa no look
async function insertClothOnLook(lookId, cloth) {
    return await updateClothingToLook(lookId, cloth._id, cloth.slot)
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