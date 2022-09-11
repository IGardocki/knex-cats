/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('cat', table => {
    table.increments();
    table.string('name', 255);
    table.integer('color_id');
    table.integer('favorite_food_id');
    table.foreign('color_id').references('color.id');
    table.foreign('favorite_food_id').references('favorite_food.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('cat', table =>{
    table.dropForeign('color_id');
    table.dropForeign('favorite_food_id');
  })
//   .then(()=>{}

//   )
  .then(() =>{
    return knex.schema.dropTableIfExists('cat')
  })
};