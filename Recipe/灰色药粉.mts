const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("灰色药粉");

recipe.Amount = 4;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("乌木果");
recipe.AddIngredient("蜘蛛牙", 2);
recipe.AddIngredient("食人花叶", 4);

export default recipe;