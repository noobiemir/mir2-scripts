const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("大骨头");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 10;

recipe.AddIngredient("骨头", 10);

export default recipe;