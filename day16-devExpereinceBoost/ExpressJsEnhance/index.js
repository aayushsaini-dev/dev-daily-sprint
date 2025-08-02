import 'dotenv/config'
import express from 'express'
import logger from "./logger.js";
import morgan from "morgan";


const app = express()
const port = process.env.PORT || 3000 // use the port number from .env file if failed then this 
app.use(express.json())


const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);


let teaData = []
let nextId = 1

// add a new tea
app.post('/teas', (req,res)=>{
    logger.info("A post request is made to add tea")
    const {name, price} = req.body // take input fro body
    const newtea = {id: nextId++, name, price} // create a new object
    teaData.push(newtea) // push them in array
    res.status(201).send(newtea)
})

// to get  all the tea
app.get('/teas', (req,res) =>{
    res.status(200).send(teaData)
})

// to get the tea by id
app.get('/teas/:id', (req,res) =>{
   const tea = teaData.find(t => t.id === parseInt(req.params.id)) // .params -> to get id from the url / .find is the way to find the object in the array 
   if(!tea){
    return res.status(404).send('tea is not found')
   }
   res.status(200).send(tea)
})
//update the tea
app.put('/teas/:id', (req,res) =>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send('Tea not found')
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.send(200).send(tea)
})

// delete tea

app.delete('/teas/:id', (req, res) =>{
   const index = teaData.findIndex(t => t.id === parseInt(req.params.id))
   if(index === -1){
    return res.status(404).send('tea not found')
   }
   teaData.splice(index,1)
    return res.status(204).send('deleted...')

})

app.listen(port, () =>{
    console.log(`Server is running at port: ${port}...`);
    
})