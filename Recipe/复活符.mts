const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("复活符");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 1000;

recipe.AddIngredient("强效太阳水");
recipe.AddIngredient("护身符");

export default recipe;