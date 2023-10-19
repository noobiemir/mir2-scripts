const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("红玉环");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("红宝石矿", 1, 12000);
recipe.AddIngredient("生铁戒指");
recipe.AddIngredient("红线", 10);

export default recipe;