const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("白骨衣(男)");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("骨头", 30);
recipe.AddIngredient("轻型盔甲(男)");
recipe.AddIngredient("铜矿", 1, 12000);
recipe.AddIngredient("蜘蛛网", 20);

export default recipe;