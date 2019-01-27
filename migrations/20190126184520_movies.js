exports.up = (knex) => {
  return knex.schema.createTable("movies",(table)=>{
    table.increments()
    table.string("title").notNullable().defaultsTo("")
    table.string("director").notNullable().defaultsTo("")
    table.string("year").notNullable().defaultsTo("")
    table.integer("my_rating").notNullable()
    table.string("poster_url").notNullable().defaultsTo("")
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable("movies")
}
