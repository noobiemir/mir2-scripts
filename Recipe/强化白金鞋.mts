const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("强化白金鞋");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 5000;

recipe.AddIngredient("白金矿", 2, 12000);
recipe.AddIngredient("白金鞋");
recipe.AddIngredient("大骨头", 60);
recipe.AddIngredient("白线", 90);

export default recipe;