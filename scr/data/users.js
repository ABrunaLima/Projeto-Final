import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "my_closet"
const COLLECTION_NAME = "users"

//chamar a conta pelo email
async function getUserByEmail(userEmail) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ email: userEmail })
}

//adicionar a conta e conseguir um id
async function addUser(user) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(user)).insertedId
}


//verificar se o email existe na base de dados
async function checkIfEmailExists(userEmail) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    const a = await collection.findOne({ email: userEmail })
    return a
}

export {
    getUserByEmail,
    addUser,
    checkIfEmailExists
}