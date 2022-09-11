/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cat').del()
  await knex('cat').insert([
    {id: 1, name: 'Romad', color_id: 1, favorite_food_id: 4},
    {id: 2, name: 'The Detective', color_id: 3, favorite_food_id: 3},
    {id: 3, name: 'Smoke', color_id: 1, favorite_food_id: 2},
    {id: 4, name: 'Fire', color_id: 2, favorite_food_id: 2},
    {id: 5, name: 'John Boi', color_id: 3, favorite_food_id: 1},
    {id: 6, name: 'Mimi', color_id: 2, favorite_food_id: 5},
  ]);
};
