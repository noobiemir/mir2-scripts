const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("魔法药(特大)");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("蘑菇");
recipe.AddIngredient("食人花果");
recipe.AddIngredient("魔法药(大量)");

export default recipe;