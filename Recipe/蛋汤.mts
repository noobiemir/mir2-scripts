const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("蛋汤");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("猎鹰蛋");
recipe.AddIngredient("千年雪霜");
recipe.AddIngredient("魔力药水(小)");

export default recipe;