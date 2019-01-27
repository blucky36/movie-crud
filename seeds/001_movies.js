exports.seed = (knex) => {
  return knex('movies').del().then(() => {
    return knex('movies').insert([
      {title:'Shawshank Redemption',director:"Frank Darabont",year:"1994",my_rating:9},
      {title:'A Clockwork Orange',director:"Stanley Kubrick",year:"1972",my_rating:7},
      {title:'Kill Bill Vol:1',director:"Quentin Tarantino",year:"2003",my_rating:8}
    ])
  }).then(()=>knex.raw("SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies))"))
}
