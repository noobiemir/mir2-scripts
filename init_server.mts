import initRecipes from './Recipe/init.mjs';
import initDrops from './Drops/init.mjs';

export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    initRecipes(context);
    initDrops(context);
}