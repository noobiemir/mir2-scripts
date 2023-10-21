import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(5000, 5));

// 武器

// 衣服

// 头盔

// 项链

// 手镯

// 戒指

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(小量)", 1))
drops.Add(new Drop("魔法药(小量)", 1))
drops.Add(new Drop("金疮药(小量)", 5))
drops.Add(new Drop("魔法药(小量)", 5))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("猎鹰蛋", 10))
drops.Add(new Drop("猎鹰蛋", 10))

// 卷轴
drops.Add(new Drop("回城卷", 1))
drops.Add(new Drop("回城卷", 1))
drops.Add(new Drop("回城卷", 1))
drops.Add(new Drop("回城卷", 2))
drops.Add(new Drop("回城卷", 2))

// 宝石

// 坐骑

// 技能书

// 杂物

// 缰绳

// 铃铛

// 马鞍

// 丝带

// 面具

// 食物

// 钩

// 浮标

// 饵

// 探鱼器

// 鱼线轮

// 鱼

// 任务

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
