/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorite_food').del()
  await knex('favorite_food').insert([
    {id: 1, food_name: 'dry food', food_description: 'yuck. Who likes this.'},
    {id: 2, food_name: 'wet food', food_description: 'A decent choice. Most cats enjoy this.'},
    {id: 3, food_name: 'salmon', food_description: 'Only the fanciest cats have such a preference.'},
    {id: 4, food_name: 'MREs', food_description: 'Good for the cat out in the field performing missions.'},
    {id: 5, food_name: 'My toes, while I am half-asleep trying to get my morning coffee. literally. EVERY. MORNING.', food_description: 'MIMI. WHY. WHY? WHY???? It would literally cost you zero dollars to not bite my toes.'},
  ]);
};
