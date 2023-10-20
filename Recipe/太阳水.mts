const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("太阳水");

recipe.Amount = 2;
recipe.Chance = 50;
recipe.Gold = 10;

recipe.AddIngredient("鸡肉");
recipe.AddIngredient("食人花叶", 2);

export default recipe;