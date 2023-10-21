import initRecipes from './Recipe/init.mjs';
import initDrops from './Drops/init.mjs';
import initServerSettings from './server_settings.mjs';

export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    initServerSettings(context);
    initRecipes(context);
    initDrops(context);
}