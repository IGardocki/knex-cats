/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('color').del()
  await knex('color').insert([
    {id: 1, name: 'orange_lad'},
    {id: 2, name: 'grey_boi'},
    {id: 3, name: 'fancy_tuxedo_unit'},
    {id: 4, name: 'jet_black_chonk'}
  ]);
};
