const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("虫血戒指");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("蜘蛛牙", 10);
recipe.AddIngredient("蛇眼戒指");
recipe.AddIngredient("银矿", 1, 12000);
recipe.AddIngredient("蜘蛛网", 15);

export default recipe;