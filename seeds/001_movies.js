exports.seed = (knex) => {
  return knex('movies').del().then(() => {
    return knex('movies').insert([
      {title:'Shawshank Redemption',director:"Frank Darabont",year:"1994",my_rating:9,poster_url:"https://images-na.ssl-images-amazon.com/images/I/51SZp7RhtQL.jpg"},
      {title:'A Clockwork Orange',director:"Stanley Kubrick",year:"1972",my_rating:7,poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCDoDQ7MWktowfse2PDFcGP7UuLUu_Vh7OyWvPDClSPtD0Bun3Q"},
      {title:'Kill Bill Vol:1',director:"Quentin Tarantino",year:"2003",my_rating:8,poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlhfQwUTB7WpfGv_LGEoKVcpjhsel3aY42dudMsVVK4NLrNAgMg"}
    ])
  }).then(()=>knex.raw("SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies))"))
}
