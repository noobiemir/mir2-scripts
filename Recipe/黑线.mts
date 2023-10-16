const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("黑线");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 10;

recipe.AddIngredient("蜘蛛网", 10);
recipe.AddIngredient("虫壳");

export default recipe;