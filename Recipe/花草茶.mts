const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("花草茶");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 300;

recipe.AddIngredient("食人花果");
recipe.AddIngredient("食人花叶");
recipe.AddIngredient("太阳水");

export default recipe;