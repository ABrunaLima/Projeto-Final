import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "my_closet"
const COLLECTION_NAME = "look"

//criar um novo look
//recebe um array de ids de roupas
async function insertNewLook(clothes) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(clothes)).insertedId
}

//adicionar roupa ao look
async function insertClothingToLook(lookId, clothId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.updateOne(
        { _id: lookId },
        { $push: { cloth: { clothId } } },
        { upserted: true }
    )
}

//atualiza peça de roupa já existente
async function updateClothingToLook(lookId, clothId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.updateOne(
        { _id: lookId },
        { $set: { cloth: { clothId } } }
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
    insertClothingToLook,
    updateClothingToLook,
    getLookById,
    removeLookById
}
