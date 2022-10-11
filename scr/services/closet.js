
import {
    insertLookToCloset,
    getCloset,
    getLookById,
    removeLookById
} from "../data/closet";

import { createLook } from "./clothing";


async function saveLookOnCloset() {

    //insertLookToCloset
    //createLook

}

async function showCloset() {
    const looks = await getCloset()
    if (looks == undefined) {
        return "Nenhuma roupa disponível"
    }
    return looks
}

async function pushOneLook(idLook) {
    const LookOne = getClothingById(idLook)
    if (clothOne === undefined) {
        return "código inexistente"
    }
    return LookOne
}

async function moveLookToTrash(idLook) {
    return removeLookById(idLook)
}


export {
    saveLookOnCloset,
    showCloset,
    pushOneLook,
    moveLookToTrash
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