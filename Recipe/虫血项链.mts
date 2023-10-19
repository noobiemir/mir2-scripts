const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("虫血项链");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("虫眼", 20);
recipe.AddIngredient("斗士项链");
recipe.AddIngredient("银矿", 1, 12000);
recipe.AddIngredient("蜘蛛网", 15);

export default recipe;