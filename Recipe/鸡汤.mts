const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("鸡汤");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("鸡肉");
recipe.AddIngredient("千年雪霜");
recipe.AddIngredient("攻击药水(小)");

export default recipe;