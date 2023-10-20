import 鸡 from "./鸡.mjs"

export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    context.AddMonsterDropDefinitions("鸡", 鸡);
}