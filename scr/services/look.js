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

//o array será recebido pelo frontend!!

async function createNewLook(clothesIds) {
    //looks só podem ser criados se tiverem no minimo 2 slots de roupa preenchidos
    const clothes = clothesIds.map(async id => await getClothingById(ObjectId(id)))
    //clothes[0].slot



    //verifica com o reduce se existe valores com a mesma posição, se sim, o look não pode ser criado.
    const verificaDiferentes = clothes.reduce(function (allClothes, cloth) {
        if (cloth.slot in allClothes.slot) {
            return false
        } else {
            return true
        }

    })

    //se o tipo os slots forem diferentes e o array tiver mais de dois elementos, o look é criado
    if (verificaDiferentes && clothes.length > 1) {
        const look = insertNewLook({
            look: clothes
        })
        return look
    }
}

//editar ou adicionar roupa no look
async function insertClothOnLook(lookId, clothId) {
    //pesquisa o look pelo id na base de dados para verificar em qual tipo de atualização ele se enquadra.
    const theLook = getLookById(lookId)

    //pesquisa a roupa para verificar qual posição ela ocupa
    const theCloth = getClothingById(clothId)

    //se o look já existir, e a sua posição for diferente das opções já ocupadas
    //a roupa é inserida no look
    if (theLook.slots != theCloth.slot) {
        const look = insertClothingToLook(lookId, clothId)
        return look
    }
    //caso contrário, a/as roupa/que ocupa/m o/s mesmo/s slot/s é/são atualizada/s
    else {
        const look = updateClothingToLook(theLook)
    }

}


//adicionar um look ao closet
async function pushOneLook(idLook) {
    const lookOne = getLookById(idLook)
    if (clothOne === undefined) {
        return "código inexistente"
    }
    return lookOne
}

//apagar um look
async function moveLookToTrash(idLook) {
    return removeLookById(idLook)
}


export {
    insertClothOnLook,
    pushOneLook,
    moveLookToTrash
}