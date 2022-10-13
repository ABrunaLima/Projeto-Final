import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "my_closet"
const COLLECTION_NAME = "clothing"

//////////////////////////////////////////////////////////////
//ROUPAS
//////////////////////////////////////////////////////////////


//adiciona roupa a base de dados
async function insertClothing(cloth) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(cloth)).insertedId

}

//mostra a roupa armazenada através do Id
async function getClothingById(clothId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: ObjectId(clothId) })

}

//mostra todas as roupas armazenadas no sistema
async function getAllClothing() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()
}




//adicionar roupa a um look especifico




export {
    insertClothing,
    getAllClothing,
    getClothingById
}