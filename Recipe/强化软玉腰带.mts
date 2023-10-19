const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("强化软玉腰带");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 5000;

recipe.AddIngredient("软玉矿", 2, 12000);
recipe.AddIngredient("软玉腰带");
recipe.AddIngredient("大骨头", 80);
recipe.AddIngredient("黑线", 120);

export default recipe;