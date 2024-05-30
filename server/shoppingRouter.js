const express = require('express')
const pool = require('./modules/pool')

const router = express.Router()

router.get('/', (req,res) => {
    const queryText = `
    SELECT * FROM "shoppinglist"
        ORDER BY "name" DESC ;
    `

    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    })
    .catch((err)=> {
        console.error('Error in GET for /api/shoppinglist', err)
        //in a get request need to add a sendStatus to the catch
        //
        res.sendStatus(500)
    })

})

router.post('/', (req,res) => {
    const queryText = `
    INSERT INTO "shoppinglist"
        ("name", "quantity", "unit")
        VALUES
        ($1,$2,$3);
    `
    let item = req.body
    pool.query(queryText, [item.name, item.quantity, item.unit])
    .then((results) => {
        res.sendStatus(201)
        //need to add a sendstatus the result for the put route 
    })
    .catch((err) => {
        console.error("error in post for /api/shoppinglist", err)
    
    })

})

router.delete('/:id', (req,res) =>{
    const queryText = `
    DELETE FROM "shoppinglist"
    WHERE id = $1;
    `
    pool.query(queryText, [req.params.id])
        .then((results) => {
            res.sendStatus(204)
        })
        .catch((err) => {
            console.error('Issue with the DELETE', err)
        })

})