const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("针线");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 500;

recipe.AddIngredient("白线", 3);
recipe.AddIngredient("大骨头");
recipe.AddIngredient("铁矿", 2);

export default recipe;