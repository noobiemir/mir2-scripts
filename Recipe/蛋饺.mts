const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("蛋饺");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 300;

recipe.AddIngredient("猎鹰蛋");
recipe.AddIngredient("千年雪霜");
recipe.AddIngredient("太阳水");

export default recipe;