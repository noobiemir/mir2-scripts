const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("觉醒宝玉");

recipe.Amount = 1;
recipe.Chance = 75;
recipe.Gold = 20000;

recipe.AddIngredient("白金矿", 1, 14000);
recipe.AddIngredient("金矿", 1, 14000);
recipe.AddIngredient("避水珠", 5);

export default recipe;