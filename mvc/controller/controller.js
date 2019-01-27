const moviesModel = require("../models/movies.js")

const getMovies = (req,res,next) => {
  return moviesModel.getAllMovies().then((movies)=>{
    return movies.error ? next({status:404,message:"movies not found",error:movies.error}) : res.status(200).send(movies)
  })
}

const getOneMovie = (req,res,next) => {
  return moviesModel.getSingleMovie(req.params.id).then((movie)=>{
    return movie.error ? next({status:404,message:"movie not found",error:movie.error}) : res.status(200).send(movie)
  })
}

const postMovie = (req,res,next) => {
  return moviesModel.createMovie(req.body).then((movie)=>{
    return movie.error ? next({status:400,message:"movie not posted",error:movie.error}) : res.status(201).send(movie[0])
  })
}

const putMovie = (req,res,next) => {
  return moviesModel.updateMovie(req.params.id,req.body).then((movie)=>{
    return movie.error ? next({status:400,message:"movie not put",error:movie.error}) : res.status(202).send(movie[0])
  })
}

const deleteMovie = (req,res,next) => {
  return moviesModel.removeMovie(req.params.id).then((movie)=>{
    return movie.error ? next({status:400,message:"movie not deleted",error:movie.error}) : res.status(204).send(movie[0])
  })
}

module.exports = {
  getMovies,
  getOneMovie,
  postMovie,
  putMovie,
  deleteMovie
}
