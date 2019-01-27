const knex = require("../../knex.js")

const getAllMovies = () => {
  return knex("movies").then(movies=>movies).catch(error=>{return{error}})
}

const getSingleMovie = (id) => {
  if(!id)return{error:"ssssssss snake"}
  return knex("movies").where("movies.id",id).first()
  .then(movie=>movie)
  .catch(error=>{return{error}})
}

const createMovie = ({title,director,year,rating}) => {
  if(!title||!director||!year||!rating) return {error:"ssssssssssss error snake"}
  return knex("movies").insert({title,director,year,my_rating:rating}).returning("*")
  .then(movie=>movie)
  .catch(error=>{return{error}})
}

const updateMovie = (id,{title,director,year,rating}) => {
  if(!id||!title||!director||!year||!rating) return {error:"ssssssssssss error snake"}
  return knex("movies").where("movies.id",id).first().update({title,director,year,my_rating:rating}).returning("*")
  .then(movie=>movie)
  .catch(err=>{return{error}})
}

const removeMovie = (id) => {
  if(!id)return{error:"ssssssssssserrorsnakenodelete4u"}
  return knex("movies").where("movies.id",id).first().del().returning("*")
  .then(movie=>movie)
  .catch(error=>{return{error}})
}

module.exports = {
  getAllMovies,
  getSingleMovie,
  createMovie,
  updateMovie,
  removeMovie
}
