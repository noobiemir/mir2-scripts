import 金疮药_特大 from "./金疮药(特大).mjs";
import 魔法药_特大 from "./魔法药(特大).mjs";
import 集中宝玉 from "./集中宝玉.mjs";
import 回避宝玉 from "./回避宝玉.mjs";
import 复活符 from "./复活符.mjs";
import 牛肉饺 from "./牛肉饺.mjs";
import 黑线 from "./黑线.mjs";
import 骨头 from "./骨头.mjs";
import 大骨头 from "./大骨头.mjs";
import 大骨汤 from "./大骨汤.mjs";
import 龙骨刀 from "./龙骨刀.mjs";

export default function Init(context: CS.Daboluo.Mir2.MirScripts.ServerInitializationScriptContext) {
    context.RecipeDefinitions.Add(金疮药_特大);
    context.RecipeDefinitions.Add(魔法药_特大);
    context.RecipeDefinitions.Add(集中宝玉);
    context.RecipeDefinitions.Add(回避宝玉);
    context.RecipeDefinitions.Add(复活符);
    context.RecipeDefinitions.Add(牛肉饺);
    context.RecipeDefinitions.Add(黑线);
    context.RecipeDefinitions.Add(骨头);
    context.RecipeDefinitions.Add(大骨头);
    context.RecipeDefinitions.Add(大骨汤);
    context.RecipeDefinitions.Add(龙骨刀);
}