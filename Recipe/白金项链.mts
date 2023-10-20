const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("白金项链");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("白金矿", 1, 12000);
recipe.AddIngredient("魔鬼项链");
recipe.AddIngredient("白线", 10);

export default recipe;