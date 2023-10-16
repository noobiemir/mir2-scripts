const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("魔力恢复药(特)");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("蘑菇");
recipe.AddIngredient("食人花果实");
recipe.AddIngredient("魔力恢复药(大)");

export default recipe;