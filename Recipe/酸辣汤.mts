const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("酸辣汤");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 500;

recipe.AddIngredient("牛肉");
recipe.AddIngredient("千年雪霜");
recipe.AddIngredient("魔力药水(小)");

export default recipe;