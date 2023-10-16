const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("肉饺");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("肉");
recipe.AddIngredient("人参");
recipe.AddIngredient("体力恢复药(大)");

export default recipe;