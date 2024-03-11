import { MongoClient } from 'mongodb'


const dbUrl='mongodb://0.0.0.0:27017/';
const client = new MongoClient(dbUrl);
const dbName='books';


export async function cartPost(data){
    console.log(data)
    await client.connect();
    console.log('Connected successfully to database server');
    const db= client.db(dbName);
    const collection=db.collection('cartdata');
    const insertToCollection= await collection.insertMany([data])
    console.log(insertToCollection)
    client.close();
}
export async function cartGet(){
    await client.connect();
    console.log('Connected successfully to database server');
    const db= client.db(dbName);
    const collection=db.collection('cartdata');
    const findResult = await collection.find({}).toArray();
    return findResult;
    client.close();

}
export async function cartDelete(name){
    await client.connect();
    console.log('Connected successfully to database server');
    const db=client.db(dbName)
    const collection=db.collection('cartdata');
    const deleteResult = await collection.deleteMany({ author: name });
    return deleteResult;
}
export async function dbPost(data){
    console.log(data)
    await client.connect();
    console.log('Connected successfully to database server');
    const db= client.db(dbName);
    const collection=db.collection('book');
    const insertToCollection= await collection.insertMany([data])
    console.log(insertToCollection)
    client.close();

}

export async function dbGet(){
    await client.connect();
    console.log('Connected successfully to database server');
    const db= client.db(dbName);
    const collection=db.collection('book');
    const findResult = await collection.find({}).toArray();
    return findResult;
    client.close();

}

export async function dbGetByName(name){
    await client.connect();
    console.log('Connected successfully to database server');
    const db=client.db(dbName);
    const collection= db.collection('book');
    const filteredDocs = await collection.find({ author: name }).toArray();
    return filteredDocs;
}

export async function dbUpdate(name, newName){
    await client.connect();
    console.log('Connected successfully to database server');
    const db=client.db(dbName);
    const collection=db.collection('book');
    const updateResult= await collection.updateOne({author: name},{$set:{author:newName}});
    return updateResult;    
}
export async function dbDelete(name){
    await client.connect();
    console.log('Connected successfully to database server');
    const db=client.db(dbName)
    const collection=db.collection('book');
    const deleteResult = await collection.deleteMany({ author: name });
    return deleteResult;
}