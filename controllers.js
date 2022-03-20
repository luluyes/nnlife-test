const asyncHandler = require('express-async-handler')
const POST_FAIL_MESSEGE = "Recipe creation failed!"
const POST_FAIL_EXPLANATION = "title, making_time, serves, ingredients, cost"
const DELETE_FAIL_MESSAGE = "No Recipe found"



const GetRecipes = asyncHandler(async (req, res) => {
  console.log(req.body)
  res.status(200).json({message: 'Get OK'}
)})

const GetRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Get ${req.params.id}`}
)})

const postRecipes = asyncHandler(async (req, res) => {
  const {title, making_time, serves, ingredients, cost} = req.body
  if (!title || !making_time || !serves || !ingredients || !cost) {
    res.status(404).json({
      message: POST_FAIL_MESSEGE,
      required: POST_FAIL_EXPLANATION
    })
  }
  res.status(200).json({message: 'Post OK'}
)})

const patchRecipes = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update ${req.params.id}`}
  
)})

const deleteRecipes = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete ${req.params.id}`}
  
)})

module.exports = {
  GetRecipes,
  GetRecipe,
  postRecipes,
  patchRecipes,
  deleteRecipes
}

