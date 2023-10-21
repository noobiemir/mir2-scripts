import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(3500, 1));

// 武器
drops.Add(new Drop("半月", 30))
drops.Add(new Drop("CompoundBow", 30))
drops.Add(new Drop("音速刀", 30))
drops.Add(new Drop("海魂", 30))
drops.Add(new Drop("短剑", 20))
drops.Add(new Drop("暴虎刀", 20))
drops.Add(new Drop("BoneBow", 20))
drops.Add(new Drop("八荒", 30))
drops.Add(new Drop("ShortBow", 20))
drops.Add(new Drop("青铜剑", 20))
drops.Add(new Drop("EbonyBow", 20))
drops.Add(new Drop("乌木剑", 20))
drops.Add(new Drop("匕首", 20))
drops.Add(new Drop("铁剑", 20))

// 衣服
drops.Add(new Drop("中型盔甲(男)", 3500))
drops.Add(new Drop("布衣(男)", 20))
drops.Add(new Drop("布衣(女)", 20))
drops.Add(new Drop("轻型盔甲(男)", 30))
drops.Add(new Drop("轻型盔甲(女)", 30))
drops.Add(new Drop("中型盔甲(女)", 3500))

// 头盔
drops.Add(new Drop("魔法头盔", 30))
drops.Add(new Drop("青铜头盔", 20))

// 项链
drops.Add(new Drop("黄色水晶项链", 20))
drops.Add(new Drop("魔鬼项链", 30))
drops.Add(new Drop("琥珀项链", 30))
drops.Add(new Drop("黑檀项链", 20))
drops.Add(new Drop("凤凰明珠", 30))
drops.Add(new Drop("传统项链", 20))
drops.Add(new Drop("金项链", 20))
drops.Add(new Drop("黑色水晶项链", 20))

// 手镯
drops.Add(new Drop("铁手镯", 20))
drops.Add(new Drop("皮制手套", 20))
drops.Add(new Drop("小手镯", 20))
drops.Add(new Drop("银手镯", 20))
drops.Add(new Drop("钢手镯", 20))
drops.Add(new Drop("大手镯", 20))
drops.Add(new Drop("坚固手套", 20))
drops.Add(new Drop("魔法手镯", 20))

// 戒指
drops.Add(new Drop("蛇眼戒指", 50))
drops.Add(new Drop("骷髅戒指", 70))
drops.Add(new Drop("金戒指", 50))
drops.Add(new Drop("珍珠戒指", 50))
drops.Add(new Drop("黑色水晶戒指", 50))
drops.Add(new Drop("蓝色水晶戒指", 30))
drops.Add(new Drop("玻璃戒指", 20))
drops.Add(new Drop("六角戒指", 20))
drops.Add(new Drop("牛角戒指", 20))
drops.Add(new Drop("古铜戒指", 20))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药水(小)", 60))
drops.Add(new Drop("魔力药水(小)", 60))
drops.Add(new Drop("攻击药水(小)", 60))
drops.Add(new Drop("道力药水(小)", 60))
drops.Add(new Drop("体力药水(小)", 60))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("疾风药水(小)", 60))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 1))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("地狱火", 30))
drops.Add(new Drop("雷电术", 40))
drops.Add(new Drop("双刀术", 40))
drops.Add(new Drop("刺杀剑术", 110))
drops.Add(new Drop("SummonVampire", 50))
drops.Add(new Drop("Meditation", 40))
drops.Add(new Drop("DelayedExplosion", 100))
drops.Add(new Drop("大火球", 40))
drops.Add(new Drop("BackStep", 140))
drops.Add(new Drop("ExplosiveTrap", 30))
drops.Add(new Drop("攻杀剑术", 40))
drops.Add(new Drop("DoubleShot", 80))
drops.Add(new Drop("抗拒火环", 20))
drops.Add(new Drop("施毒术", 20))
drops.Add(new Drop("StraightShot", 16))
drops.Add(new Drop("精神力战法", 16))
drops.Add(new Drop("Focus", 10))
drops.Add(new Drop("绝命剑法", 10))
drops.Add(new Drop("治愈术", 10))
drops.Add(new Drop("火球术", 10))
drops.Add(new Drop("基本剑术", 10))
drops.Add(new Drop("ElementalShot", 200))
drops.Add(new Drop("诱惑之光", 40))

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
