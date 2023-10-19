const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("牛肉饺");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("牛肉");
recipe.AddIngredient("千年雪霜");
recipe.AddIngredient("金疮药(大量)");

export default recipe;