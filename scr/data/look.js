import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "my_closet"
const COLLECTION_NAME = "look"

//criar um novo look
//recebe um array de ids de roupas
async function insertNewLook(clothes, closetId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(clothes, closetId)).insertedId
}


//atualiza ou insere peça de roupa no look
async function updateClothingToLook(lookId, clothId, slot) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.updateOne(
        { _id: lookId },
        { $set: { [slot]: { clothId } } },
        { upserted: true }
    )
}

//mostra look armazenada através do Id
async function getLookById(lookId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _idLook: new ObjectId(lookId) })
}

//remover look por Id
async function removeLookById(lookId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.delete({ _idLook: new ObjectId(lookId) })
}

export {
    insertNewLook,
    updateClothingToLook,
    getLookById,
    removeLookById
}
