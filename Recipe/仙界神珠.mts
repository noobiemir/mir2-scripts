const recipe = new CS.Daboluo.Mir2.MirScripts.RecipeDefinition("仙界神珠");

recipe.Amount = 1;
recipe.Chance = 20;
recipe.Gold = 10000;

recipe.Tools.Add("制作书");

recipe.AddIngredient("道术守护石");
recipe.AddIngredient("道力药水(大)");
recipe.AddIngredient("金疮药(特大)");
recipe.AddIngredient("魔法药(特大)");

export default recipe;