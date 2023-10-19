const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("魔性宝玉");

recipe.Amount = 1;
recipe.Chance = 75;
recipe.Gold = 10000;

recipe.AddIngredient("白金矿", 1, 11000);
recipe.AddIngredient("软玉矿", 1, 11000);
recipe.AddIngredient("魔法守护石(小)", 5);

export default recipe;