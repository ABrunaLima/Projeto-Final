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
async function getLastClosetCreatedByUserId(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find({ userId: new ObjectId(userId) }).sort({ _id: -1 }).limit(1).toArray();
}

//inserir o look ao closet
async function insertLookToCloset(lookId, closetId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    //adicionar roupa que tenha um id existente
    return await collection.updateOne(
        { closetId: closetId },
        { $push: { closet: { lookId } } },
        { upserted: true }
    )
}

//retorna todos os closets criados por um usuário
async function getClosetsByUserId(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find({ userId: new ObjectId(userId) }).toArray()
}

// async function getALookFromClosetById(lookId, closetId) {
//     const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
//     return await collection.findOne({ looks: new ObjectId(lookId) })
// }

//mostrar todos os closets armazenados
async function getClosets() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()

}

async function getAClosetById(closetId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(closetId) })
}

//remover closet por Id
async function removeClosetById(closetId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.deleteOne({ _id: new ObjectId(closetId) })
}

async function removeOneLookFromClosetById(closetId, lookId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.updateOne(
        { _id: closetId },
        { $pull: { looks: { lookId } } }
    )
}

export {
    insertNewCloset,
    insertLookToCloset,
    getClosets,
    getAClosetById,
    removeClosetById,
    removeOneLookFromClosetById,
    getLastClosetCreatedByUserId,
    getClosetsByUserId
    // getALookFromClosetById
}