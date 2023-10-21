export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    const settings = context.ServerSettingsDefinitions;

    // 服务器总体掉率，1为100%，即原掉率。可带小数。
    settings.DropRate = 1.0;
}