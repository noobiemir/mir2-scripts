const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("黄色药粉");

recipe.Amount = 5;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("蛆卵");
recipe.AddIngredient("蝎尾");
recipe.AddIngredient("食人花叶", 4);

export default recipe;