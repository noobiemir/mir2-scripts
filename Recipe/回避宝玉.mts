const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("回避宝玉");

recipe.Amount = 1;
recipe.Chance = 75;
recipe.Gold = 20000;

recipe.AddIngredient("铂金矿", 1, 14000);
recipe.AddIngredient("金矿", 1, 14000);
recipe.AddIngredient("避魂珠", 5);

export default recipe;