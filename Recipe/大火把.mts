const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("大火把");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("红线");
recipe.AddIngredient("骨头");
recipe.AddIngredient("蜡烛");
recipe.AddIngredient("修复油");

export default recipe;