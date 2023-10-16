import 体力恢复药_特 from "./体力恢复药(特).mjs";
import 魔力恢复药_特 from "./魔力恢复药(特).mjs";
import 集中宝玉 from "./集中宝玉.mjs";
import 回避宝玉 from "./回避宝玉.mjs";
import 苏生符籍 from "./苏生符籍.mjs";
import 肉饺 from "./肉饺.mjs";
import 黑线 from "./黑线.mjs";
import 骨 from "./骨.mjs";
import 大骨 from "./大骨.mjs";

export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    context.RecipeDefinitions.Add(体力恢复药_特);
    context.RecipeDefinitions.Add(魔力恢复药_特);
    context.RecipeDefinitions.Add(集中宝玉);
    context.RecipeDefinitions.Add(回避宝玉);
    context.RecipeDefinitions.Add(苏生符籍);
    context.RecipeDefinitions.Add(肉饺);
    context.RecipeDefinitions.Add(黑线);
    context.RecipeDefinitions.Add(骨);
    context.RecipeDefinitions.Add(大骨);
}