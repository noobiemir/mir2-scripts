import HP_DrugXL from "./(HP)DrugXL.mjs";

export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    context.RecipeDefinitions.Add(HP_DrugXL);
}