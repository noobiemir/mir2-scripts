const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("强化软玉鞋");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 5000;

recipe.AddIngredient("软玉矿", 2, 12000);
recipe.AddIngredient("软玉鞋");
recipe.AddIngredient("大骨头", 60);
recipe.AddIngredient("黑线", 90);

export default recipe;