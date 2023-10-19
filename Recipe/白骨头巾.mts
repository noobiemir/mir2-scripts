const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("白骨头巾");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("骨头", 20);
recipe.AddIngredient("魔法头盔");
recipe.AddIngredient("铜矿", 1, 12000);
recipe.AddIngredient("蜘蛛网", 10);

export default recipe;