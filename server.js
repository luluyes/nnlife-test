const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const {GetRecipes, GetRecipe, postRecipes, patchRecipes, deleteRecipes} = require('./controllers')
// https://app.tracks.run/editor/sql/create.sql

const app = express()

// Middle ware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/recipes', GetRecipes)

app.get('/recipes/:id', GetRecipe)

app.post('/recipes', postRecipes)

app.patch('/recipes/:id', patchRecipes)

app.delete('/recipes/:id', deleteRecipes)

app.listen(port, () => console.log(`Server started on port ${port}`))