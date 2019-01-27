exports.up = (knex) => {
  return knex.schema.createTable("movies",(table)=>{
    table.increments()
    table.string("title").notNullable().defaultsTo("")
    table.string("director").notNullable().defaultsTo("")
    table.string("year").notNullable().defaultsTo("")
    table.integer("my_rating").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable("movies")
}
