import express from 'express';
import { dbGet, dbPost, dbGetByName, dbUpdate, dbDelete, cartPost, cartGet, cartDelete } from './dbControlles.js';
import cors from 'cors'

const port=8080;
const app = express();
let newBook={}

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(234).send('hi nodejs !')

});

app.get('/book', async (req,res)=>{
    const data= await dbGet();
    console.log(`the post mothed return data is ${data}`)
    res.send(data)
})

app.get('/book/:name', async (req,res) =>{
    console.log(`the name is ${req.params.name}`);
    const data=await dbGetByName(req.params.name);
    res.send(data)
})

app.post('/book', (req,res) =>{
    try {
        if(
            !req.body.title || !req.body.author || !req.body.publishYear
        ){
            res.status(400).send(
                'SEND ALL DATA FIELDS IS REQURIED TITLE, AUTHOR, PUBLISHYEAR'
            )
        }
        newBook ={
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const data =dbPost(newBook);
        res.send(data)
        
    } catch (error) {
        console.log('error')
        res.status(500).send('error')
    }
})

app.put('/book/:name/:newname',async(req,res) =>{
    console.log(`the old year is ${req.params.name} and the new year is ${req.params.newname}`);
    const data= await dbUpdate(req.params.name, req.params.newname);
    res.send(data);
})

app.delete('/book/:name', async (req,res) =>{
    console.log(`the ${req.params.name}'s record had been deleted `);
    const data = await dbDelete(req.params.name);
    res.send(data)
})

app.post('/cart', (req,res)=>{
    newBook={
        author:req.body.author,
        country:req.body.country,
        imageLink:req.body.imageLink,
        language:req.body.language,
        link:req.body.language,
        pages:req.body.pages,
        title:req.body.title,
        year:req.body.year
    }
    const data=cartPost(newBook)
    res.send(data)
})

app.get('/cart',async (req,res)=>{
    const data = await cartGet();
    res.send(data)
})

app.delete('/cart/:name', async (req,res) =>{
    console.log(`the ${req.params.name}'s record had been deleted `);
    const data = await cartDelete(req.params.name);
    res.send(data)
})

app.listen(port,()=>{
    console.log(`app is listing on port : ${port}`) 
})
