/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  //Deletes ALL existing entries
  await knex('cat').del()
  await knex('cat').insert([
    {id: 1, name: 'Romad', color_id: 1, favorite_food_id: 4, image: 'https://sharedmovieuniverse.files.wordpress.com/2020/06/rambo2.jpg'},
    {id: 2, name: 'The Detective', color_id: 3, favorite_food_id: 3, image: 'https://wallpapercave.com/wp/wp5842483.jpg'},
    {id: 3, name: 'Smoke', color_id: 1, favorite_food_id: 2, image: 'https://blogs.columbian.com/cat-tales/wp-content/uploads/sites/43/2017/12/OrangeCat1.jpg'},
    {id: 4, name: 'Fire', color_id: 2, favorite_food_id: 2, image: 'https://www.felineliving.net/wp-content/uploads/2017/12/Chartreux-cat-e1522099807347.jpg'},
    {id: 5, name: 'John Boi', color_id: 3, favorite_food_id: 1, image: 'https://www.petmoo.com/wp-content/uploads/2018/07/Black-Cat-Breed-990x556.jpg'},
    {id: 6, name: 'Mimi', color_id: 2, favorite_food_id: 5, image: 'https://petsfeed.co/wp-content/uploads/2020/04/Munchkin-03.jpg'},
  ]);
};
