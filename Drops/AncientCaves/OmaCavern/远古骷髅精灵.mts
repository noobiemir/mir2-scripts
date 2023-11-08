import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(8500, 1));

// 武器
drops.Add(new Drop("降魔", 50))
drops.Add(new Drop("八荒", 25))
drops.Add(new Drop("海魂", 25))
drops.Add(new Drop("半月", 25))
drops.Add(new Drop("音速刀", 25))
drops.Add(new Drop("杉木铁弓", 25))
drops.Add(new Drop("钢斧", 25))
drops.Add(new Drop("凌风", 30))
drops.Add(new Drop("破魂", 50))
drops.Add(new Drop("斩马刀", 50))
drops.Add(new Drop("偃月", 50))
drops.Add(new Drop("墨铁刀", 50))
drops.Add(new Drop("绝命弓", 50))

// 衣服
drops.Add(new Drop("轻型盔甲(男)", 15))
drops.Add(new Drop("轻型盔甲(女)", 15))

// 头盔
drops.Add(new Drop("魔法头盔", 25))
drops.Add(new Drop("黄铜头盔", 500))
drops.Add(new Drop("黄金头盔", 50))
drops.Add(new Drop("骷髅头盔", 70))
drops.Add(new Drop("道士头盔", 70))

// 项链
drops.Add(new Drop("斗士项链", 25))
drops.Add(new Drop("灯笼项链", 20))
drops.Add(new Drop("凤凰明珠", 25))
drops.Add(new Drop("琥珀项链", 25))
drops.Add(new Drop("黑檀项链", 10))
drops.Add(new Drop("黄色水晶项链", 10))
drops.Add(new Drop("黑色水晶项链", 10))
drops.Add(new Drop("魔鬼项链", 25))

// 手镯
drops.Add(new Drop("夏普儿手镯", 100))
drops.Add(new Drop("道士手镯", 70))
drops.Add(new Drop("尽力手镯", 70))
drops.Add(new Drop("黑檀手镯", 70))
drops.Add(new Drop("魔法手镯", 25))
drops.Add(new Drop("坚固手套", 25))
drops.Add(new Drop("大手镯", 30))

// 戒指
drops.Add(new Drop("蓝色水晶戒指", 10))
drops.Add(new Drop("黑色水晶戒指", 40))
drops.Add(new Drop("蛇眼戒指", 40))
drops.Add(new Drop("珍珠戒指", 40))
drops.Add(new Drop("金戒指", 50))
drops.Add(new Drop("骷髅戒指", 45))
drops.Add(new Drop("狂风戒指", 55))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔法守护石(小)", 50))
drops.Add(new Drop("道术守护石(小)", 50))
drops.Add(new Drop("攻击守护石(小)", 50))
drops.Add(new Drop("魔力守护石(小)", 50))
drops.Add(new Drop("生命守护石(小)", 50))
drops.Add(new Drop("能力守护石(小)", 50))

// 火把

// 药水
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 2))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("大骨头", 10))
drops.Add(new Drop("骨头", 5))
drops.Add(new Drop("骨头", 5))

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("召唤骷髅", 50))
drops.Add(new Drop("爆闪", 50))
drops.Add(new Drop("吸血地精", 25))
drops.Add(new Drop("气功术", 20))
drops.Add(new Drop("爆阱", 15))
drops.Add(new Drop("体迅风", 60))
drops.Add(new Drop("风剑术", 15))
drops.Add(new Drop("施毒术", 10))
drops.Add(new Drop("隐身术", 50))
drops.Add(new Drop("万斤闪", 1000))
drops.Add(new Drop("大火球", 15))
drops.Add(new Drop("瞬息移动", 50))
drops.Add(new Drop("雷电术", 25))
drops.Add(new Drop("地狱火", 25))
drops.Add(new Drop("诱惑之光", 12))
drops.Add(new Drop("抗拒火环", 7))
drops.Add(new Drop("刺杀剑术", 50))
drops.Add(new Drop("攻杀剑术", 12))
drops.Add(new Drop("风弹步", 700))
drops.Add(new Drop("灵魂火符", 15))

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
