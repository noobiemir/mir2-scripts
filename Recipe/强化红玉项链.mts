const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("强化红玉项链");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 5000;

recipe.AddIngredient("红宝石矿", 2, 12000);
recipe.AddIngredient("红玉项链");
recipe.AddIngredient("大骨头", 55);
recipe.AddIngredient("红线", 80);

export default recipe;