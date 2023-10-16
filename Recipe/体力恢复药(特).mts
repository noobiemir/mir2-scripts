const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("体力恢复药(特)");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("乌木果实");
recipe.AddIngredient("食人花树叶");
recipe.AddIngredient("体力恢复药(大)");

export default recipe;