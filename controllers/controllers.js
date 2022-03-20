const asyncHandler = require('express-async-handler')

const POST_FAIL_MESSEGE = "Recipe creation failed!"
const POST_FAIL_EXPLANATION = "title, making_time, serves, ingredients, cost"
const DELETE_FAIL_MESSAGE = "No Recipe found"
const DELETE_SUCCESS_MESSAGE = "Recipe successfully removed!"
const Recipe = require('../models/recipesModel')


const GetRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find()
  res.status(200).json({recipes})
})

const GetRecipe = asyncHandler(async (req, res) => {
  let id = Number(req.params.id)
  let recipe = await Recipe.findById(id)
  if (!recipe) {
    id = 1
    recipe = await Recipe.findById(id)
  }
  res.status(200).json(recipe)
})

const postRecipes = asyncHandler(async (req, res) => {
  const {title, making_time, serves, ingredients, cost} = req.body
  if (!title || !making_time || !serves || !ingredients || !cost) {
    res.status(404).json({
      message: POST_FAIL_MESSEGE,
      required: POST_FAIL_EXPLANATION
    })
  }
  const recipe = await Recipe.create({
    title,
    making_time,
    serves,
    ingredients,
    cost
  })

  res.status(200).json(recipe)
})

const patchRecipes = asyncHandler(async (req, res) => {
  let id = req.params.id
  let recipe = await Recipe.findById(id)
  if (!recipe) {
    id = 1
    const recipe = await Recipe.findById(id)
  }
  const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {new: true})
  res.status(200).json(updatedRecipe)
})

const deleteRecipes = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  if (!recipe) {
    res.status(404).json({message: DELETE_FAIL_MESSAGE})
  }
  await recipe.remove();
  res.status(200).json({message: DELETE_SUCCESS_MESSAGE}
  
)})

module.exports = {
  GetRecipes,
  GetRecipe,
  postRecipes,
  patchRecipes,
  deleteRecipes
}

