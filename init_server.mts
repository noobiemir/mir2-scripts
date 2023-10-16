import initRecipes from './Recipe/init.mjs'

export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    initRecipes(context);
}