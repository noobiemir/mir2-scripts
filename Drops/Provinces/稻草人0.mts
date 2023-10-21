import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(2000, 1));

// 武器
drops.Add(new Drop("木剑", 5))
drops.Add(new Drop("虎牙刀", 5))
drops.Add(new Drop("WoodenBow", 5))
drops.Add(new Drop("匕首", 10))
drops.Add(new Drop("乌木剑", 10))
drops.Add(new Drop("EbonyBow", 10))

// 衣服
drops.Add(new Drop("布衣(男)", 10))
drops.Add(new Drop("布衣(女)", 10))

// 头盔

// 项链
drops.Add(new Drop("传统项链", 10))
drops.Add(new Drop("金项链", 8))

// 手镯

// 戒指
drops.Add(new Drop("六角戒指", 20))
drops.Add(new Drop("玻璃戒指", 20))
drops.Add(new Drop("古铜戒指", 20))
drops.Add(new Drop("牛角戒指", 20))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("太阳水", 40))
drops.Add(new Drop("金疮药(小量)", 4))
drops.Add(new Drop("金疮药(小量)", 4))
drops.Add(new Drop("魔法药(小量)", 6))
drops.Add(new Drop("金疮药(小量)", 4))
drops.Add(new Drop("魔法药(小量)", 6))
drops.Add(new Drop("魔法药(小量)", 6))

// 矿石

// 肉

// 工艺材料

// 卷轴

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
drops.Add(new Drop("姜茶", 5, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
