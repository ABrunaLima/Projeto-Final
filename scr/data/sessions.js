const { ObjectId } = require("mongodb")
const { generateToken } = require("../services/common")
const { getMongoCollection } = require("./mongodb")

const DB_NAME = "my_closet"
const COLLECTION_NAME = "session"

async function addSession(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne({ userId })).insertedId
}

async function getSessionByToken(token) {
    if (!ObjectId.isValid(token)) return null
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(token) })
}

export {
    addSession,
    getSessionByToken
}