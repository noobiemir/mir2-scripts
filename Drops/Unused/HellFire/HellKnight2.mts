import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2500, 20));

// 武器
drops.Add(new Drop("炼狱", 600))
drops.Add(new Drop("银蛇", 600))
drops.Add(new Drop("魔杖", 600))
drops.Add(new Drop("双极刀", 600))

// 衣服

// 头盔

// 项链
drops.Add(new Drop("青魔项链", 780))
drops.Add(new Drop("蓝狐项链", 120))
drops.Add(new Drop("水波颈饰", 1180))
drops.Add(new Drop("灵玉项链", 780))

// 手镯
drops.Add(new Drop("蓝狐套袖", 120))

// 戒指
drops.Add(new Drop("蓝狐戒指", 120))

// 护身符

// 腰带
drops.Add(new Drop("金刚腰带", 580))

// 鞋子
drops.Add(new Drop("紫绸靴", 360))

// 石头

// 火把

// 药水
drops.Add(new Drop("体力药水(小)", 100))
drops.Add(new Drop("攻击药水(小)", 100))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("疾风药水(小)", 100))
drops.Add(new Drop("强效太阳水", 20))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("迷魂术", 800))
drops.Add(new Drop("召唤月灵", 2000))
drops.Add(new Drop("轻身步", 800))
drops.Add(new Drop("狮子吼", 200))
drops.Add(new Drop("净化术", 800))
drops.Add(new Drop("噬血术", 200))

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
