const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("软玉轮");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("软玉矿", 1, 12000);
recipe.AddIngredient("道士手镯");
recipe.AddIngredient("黑线", 10);

export default recipe;