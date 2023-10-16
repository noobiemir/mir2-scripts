const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("(HP)DrugXL");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("EbonyFruit");
recipe.AddIngredient("CannibalLeaf");
recipe.AddIngredient("(HP)DrugLarge");

export default recipe;