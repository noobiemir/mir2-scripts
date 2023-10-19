const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("鱼饵");

recipe.Amount = 1;
recipe.Chance = 100;
recipe.Gold = 100;

recipe.AddIngredient("虫腿",10);
recipe.AddIngredient("兽人牙齿",10);
recipe.AddIngredient("虫眼",10);
recipe.AddIngredient("虫壳",10);

export default recipe;