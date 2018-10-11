require('dotenv').config();
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const{create, getAll, getOne, update} = require('./products_controller')
const products_controller = require('./products_controller')

const port = 3000

const app= express()
app.use(json())


massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)

    //  dbInstance.create_product()
    //     .then(response => {
    //     console.log(response)
    //     }).catch(error => console.log(error))

  }).catch( err => console.log(err) );

app.post( '/api/products', create );
app.get( '/api/products', getAll );
app.get( '/api/products/:id', getOne );
app.put( '/api/products/:id', update );
app.delete( '/api/products/:id', products_controller.delete);




app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})