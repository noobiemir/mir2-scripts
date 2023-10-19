const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("制魔宝玉");

recipe.Amount = 1;
recipe.Chance = 75;
recipe.Gold = 10000;

recipe.AddIngredient("白金矿", 1, 11000);
recipe.AddIngredient("黑铁矿", 1, 11000);

export default recipe;