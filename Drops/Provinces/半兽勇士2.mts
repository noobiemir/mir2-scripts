import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(7000, 1));

// 武器
drops.Add(new Drop("半月", 20))
drops.Add(new Drop("CompoundBow", 20))
drops.Add(new Drop("音速刀", 20))
drops.Add(new Drop("海魂", 20))
drops.Add(new Drop("短剑", 10))
drops.Add(new Drop("暴虎刀", 10))
drops.Add(new Drop("BoneBow", 10))
drops.Add(new Drop("八荒", 20))
drops.Add(new Drop("ShortBow", 10))
drops.Add(new Drop("青铜剑", 10))
drops.Add(new Drop("EbonyBow", 10))
drops.Add(new Drop("乌木剑", 10))
drops.Add(new Drop("匕首", 10))
drops.Add(new Drop("铁剑", 10))

// 衣服
drops.Add(new Drop("中型盔甲(男)", 2000))
drops.Add(new Drop("布衣(男)", 10))
drops.Add(new Drop("布衣(女)", 10))
drops.Add(new Drop("轻型盔甲(男)", 20))
drops.Add(new Drop("轻型盔甲(女)", 20))
drops.Add(new Drop("中型盔甲(女)", 2000))

// 头盔
drops.Add(new Drop("魔法头盔", 20))
drops.Add(new Drop("青铜头盔", 10))

// 项链
drops.Add(new Drop("黄色水晶项链", 10))
drops.Add(new Drop("魔鬼项链", 20))
drops.Add(new Drop("琥珀项链", 20))
drops.Add(new Drop("黑檀项链", 10))
drops.Add(new Drop("凤凰明珠", 20))
drops.Add(new Drop("传统项链", 10))
drops.Add(new Drop("金项链", 10))
drops.Add(new Drop("黑色水晶项链", 10))

// 手镯
drops.Add(new Drop("铁手镯", 10))
drops.Add(new Drop("皮制手套", 10))
drops.Add(new Drop("小手镯", 10))
drops.Add(new Drop("银手镯", 10))
drops.Add(new Drop("钢手镯", 10))
drops.Add(new Drop("大手镯", 10))
drops.Add(new Drop("坚固手套", 10))
drops.Add(new Drop("魔法手镯", 10))

// 戒指
drops.Add(new Drop("蛇眼戒指", 30))
drops.Add(new Drop("骷髅戒指", 50))
drops.Add(new Drop("金戒指", 30))
drops.Add(new Drop("珍珠戒指", 30))
drops.Add(new Drop("黑色水晶戒指", 30))
drops.Add(new Drop("蓝色水晶戒指", 20))
drops.Add(new Drop("玻璃戒指", 10))
drops.Add(new Drop("六角戒指", 10))
drops.Add(new Drop("牛角戒指", 10))
drops.Add(new Drop("古铜戒指", 10))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 6))
drops.Add(new Drop("魔法药(中量)", 6))
drops.Add(new Drop("金疮药(中量)", 6))
drops.Add(new Drop("魔法药(中量)", 6))
drops.Add(new Drop("金疮药(大量)", 6))
drops.Add(new Drop("魔法药(大量)", 6))
drops.Add(new Drop("魔法药水(小)", 35))
drops.Add(new Drop("魔力药水(小)", 35))
drops.Add(new Drop("攻击药水(小)", 35))
drops.Add(new Drop("道力药水(小)", 35))
drops.Add(new Drop("体力药水(小)", 35))
drops.Add(new Drop("魔法药(中量)", 6))
drops.Add(new Drop("疾风药水(小)", 35))
drops.Add(new Drop("金疮药(中量)", 6))
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
drops.Add(new Drop("地狱火", 15))
drops.Add(new Drop("雷电术", 25))
drops.Add(new Drop("双刀术", 25))
drops.Add(new Drop("刺杀剑术", 75))
drops.Add(new Drop("SummonVampire", 35))
drops.Add(new Drop("Meditation", 15))
drops.Add(new Drop("DelayedExplosion", 75))
drops.Add(new Drop("大火球", 25))
drops.Add(new Drop("BackStep", 100))
drops.Add(new Drop("ExplosiveTrap", 15))
drops.Add(new Drop("攻杀剑术", 25))
drops.Add(new Drop("DoubleShot", 55))
drops.Add(new Drop("抗拒火环", 7))
drops.Add(new Drop("施毒术", 7))
drops.Add(new Drop("StraightShot", 5))
drops.Add(new Drop("精神力战法", 5))
drops.Add(new Drop("Focus", 4))
drops.Add(new Drop("绝命剑法", 4))
drops.Add(new Drop("治愈术", 4))
drops.Add(new Drop("火球术", 4))
drops.Add(new Drop("基本剑术", 4))
drops.Add(new Drop("ElementalShot", 130))
drops.Add(new Drop("诱惑之光", 25))

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
