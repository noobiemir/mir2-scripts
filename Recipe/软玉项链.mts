const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("软玉项链");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("软玉矿", 1, 12000);
recipe.AddIngredient("珍玉项链");
recipe.AddIngredient("黑线", 10);

export default recipe;