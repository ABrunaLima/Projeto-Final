import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "my_closet"
const COLLECTION_NAME = "closet"

//////////////////////////////////////////////////////////////
//CLOSET
//////////////////////////////////////////////////////////////

//adicionar um closet
async function insertNewCloset(closet) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(closet)).insertedId
}

//Retorna o maior id existente num closet
async function getMaxClosetId() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().sort({ idx: -1 }).limit(1)
}

//inserir o look ao closet
async function insertLookToCloset(lookId, userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    //adicionar roupa que tenha um id existente
    return await collection.updateOne(
        { userId: userId },
        { $push: { look: { lookId } } },
        { upserted: true }
    )
}

//mostrar todos os closets armazenados
async function getClosets() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()

}

async function getLooksOnEspecificClosetById(closetId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: ObjectId(closetId) }).toArray()
}

//remover closet por Id
async function removeClosetById(closetId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.delete({ _idCloset: ObjectId(closetId) })
}

export {
    insertNewCloset,
    insertLookToCloset,
    getClosets,
    getLooksOnEspecificClosetById,
    getMaxClosetId,
    removeClosetById
}