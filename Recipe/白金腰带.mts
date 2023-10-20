const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("白金腰带");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("白金矿", 1, 12000);
recipe.AddIngredient("青铜腰带");
recipe.AddIngredient("白线", 15);

export default recipe;