const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("锤子");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("黑线", 3);
recipe.AddIngredient("大骨头");
recipe.AddIngredient("铜矿", 2);

export default recipe;