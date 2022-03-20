const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 3000
const connectDB = require('./config/dbconfig')
const {GetRecipes, GetRecipe, postRecipes, patchRecipes, deleteRecipes} = require('./controllers/controllers')
// https://app.tracks.run/editor/sql/create.sql
const {errorHandler} = require('./middleware/errorHandler')

connectDB();
const app = express()

// Middle ware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/recipes', GetRecipes)

app.get('/recipes/:id', GetRecipe)

app.post('/recipes', postRecipes)

app.patch('/recipes/:id', patchRecipes)

app.delete('/recipes/:id', deleteRecipes)

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`))