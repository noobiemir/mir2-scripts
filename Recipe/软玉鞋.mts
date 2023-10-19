const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("软玉鞋");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("软玉矿", 1, 12000);
recipe.AddIngredient("紫绸靴");
recipe.AddIngredient("黑线", 15);

export default recipe;