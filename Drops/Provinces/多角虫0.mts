import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2000, 1));

// 武器
drops.Add(new Drop("八荒", 40))
drops.Add(new Drop("杉木铁弓", 40))
drops.Add(new Drop("音速刀", 40))
drops.Add(new Drop("海魂", 40))
drops.Add(new Drop("半月", 40))
drops.Add(new Drop("短剑", 22))
drops.Add(new Drop("铁剑", 12))
drops.Add(new Drop("暴虎刀", 10))
drops.Add(new Drop("弩弓", 12))
drops.Add(new Drop("青铜剑", 10))
drops.Add(new Drop("革弓", 9))
drops.Add(new Drop("乌木剑", 9))
drops.Add(new Drop("匕首", 9))
drops.Add(new Drop("木弓", 6))
drops.Add(new Drop("虎牙刀", 6))
drops.Add(new Drop("木剑", 6))
drops.Add(new Drop("铁弓", 10))

// 衣服
drops.Add(new Drop("布衣(男)", 10))
drops.Add(new Drop("布衣(女)", 10))
drops.Add(new Drop("轻型盔甲(男)", 30))
drops.Add(new Drop("轻型盔甲(女)", 30))

// 头盔
drops.Add(new Drop("青铜头盔", 15))
drops.Add(new Drop("魔法头盔", 20))

// 项链
drops.Add(new Drop("凤凰明珠", 70))
drops.Add(new Drop("黄色水晶项链", 20))
drops.Add(new Drop("琥珀项链", 70))
drops.Add(new Drop("魔鬼项链", 70))
drops.Add(new Drop("传统项链", 8))
drops.Add(new Drop("黑色水晶项链", 20))
drops.Add(new Drop("金项链", 6))
drops.Add(new Drop("黑檀项链", 20))

// 手镯
drops.Add(new Drop("大手镯", 40))
drops.Add(new Drop("铁手镯", 8))
drops.Add(new Drop("小手镯", 30))
drops.Add(new Drop("皮制手套", 30))
drops.Add(new Drop("银手镯", 40))
drops.Add(new Drop("钢手镯", 40))

// 戒指
drops.Add(new Drop("蓝色水晶戒指", 20))
drops.Add(new Drop("玻璃戒指", 11))
drops.Add(new Drop("六角戒指", 11))
drops.Add(new Drop("牛角戒指", 11))
drops.Add(new Drop("古铜戒指", 6))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(小量)", 6))
drops.Add(new Drop("魔法药(小量)", 6))
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("太阳水", 20))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("精神力战法", 14))
drops.Add(new Drop("抗拒火环", 24))
drops.Add(new Drop("必中闪", 14))
drops.Add(new Drop("绝命剑法", 14))
drops.Add(new Drop("天日闪", 24))
drops.Add(new Drop("火球术", 14))
drops.Add(new Drop("基本剑术", 14))
drops.Add(new Drop("施毒术", 24))
drops.Add(new Drop("治愈术", 14))

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
