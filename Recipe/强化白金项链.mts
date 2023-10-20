const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("强化白金项链");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 5000;

recipe.AddIngredient("白金矿", 2, 12000);
recipe.AddIngredient("白金项链");
recipe.AddIngredient("大骨头", 55);
recipe.AddIngredient("白线", 80);

export default recipe;