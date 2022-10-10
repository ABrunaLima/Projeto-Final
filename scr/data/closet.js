import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "my_closet"
const COLLECTION_NAME = "closet"

//////////////////////////////////////////////////////////////
//CLOSET
//////////////////////////////////////////////////////////////


//armazenar um look no closet
async function insertLookToCloset(look) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(look)).insertedId

}

//mostrar todos os looks armazenados
async function getCloset(looks) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find(looks)

}

//mostra look armazenada através do Id
async function getLookById(lookId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _idLook: ObjectId(lookId) })

}

//remover look do closet por Id
async function removeLookById(lookId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.deleteOne({ _idLook: ObjectId(lookId) })

}

export {
    insertLookToCloset,
    getCloset,
    getLookById,
    removeLookById
}