const { ObjectId } = require("mongodb")

const { getMongoCollection } = require("./mongodb")

const DB_NAME = "my_closet"
const COLLECTION_NAME = "session"


//cria um token
//(token é basicamente um id criptografado criado pelo sistema para deixar os dados do usuário mais seguro)
async function addSession(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne({ userId })).insertedId
}

//verificar qual a corrêspondencia do token definido
//caso o token não seja validado, retorna "null"
async function getSessionByToken(token) {
    if (!ObjectId.isValid(token)) return null
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(token) })
}

export {
    addSession,
    getSessionByToken
}