import DropList from "../../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(12500, 2));

// 武器
drops.Add(new Drop("修罗", 25))
drops.Add(new Drop("破魂", 5))
drops.Add(new Drop("斩马刀", 5))
drops.Add(new Drop("偃月", 5))
drops.Add(new Drop("墨铁刀", 5))
drops.Add(new Drop("绝命弓", 5))
drops.Add(new Drop("凝霜", 30))
drops.Add(new Drop("炼狱", 150))
drops.Add(new Drop("魔杖", 150))
drops.Add(new Drop("降魔", 5))
drops.Add(new Drop("双极刀", 150))
drops.Add(new Drop("满义弓", 150))
drops.Add(new Drop("裁决之杖", 400))
drops.Add(new Drop("骨玉权杖", 400))
drops.Add(new Drop("无极棍", 400))
drops.Add(new Drop("暗黑刀", 400))
drops.Add(new Drop("魂魅弓", 400))
drops.Add(new Drop("银蛇", 150))

// 衣服
drops.Add(new Drop("恶魔长袍(男)", 6))
drops.Add(new Drop("恶魔长袍(女)", 6))
drops.Add(new Drop("幽灵战衣(男)", 6))
drops.Add(new Drop("幽灵战衣(女)", 6))
drops.Add(new Drop("炎红战衣(男)", 6))
drops.Add(new Drop("灵晶甲胄(男)", 1000))
drops.Add(new Drop("LightLeatherArmour(男)", 6))
drops.Add(new Drop("LightLeatherArmour(女)", 6))
drops.Add(new Drop("灵晶甲胄(女)", 1000))
drops.Add(new Drop("战神盔甲(女)", 6))
drops.Add(new Drop("炎红战衣(女)", 6))
drops.Add(new Drop("战神盔甲(男)", 6))

// 头盔
drops.Add(new Drop("骷髅头盔", 15))
drops.Add(new Drop("道士头盔", 10))

// 项链
drops.Add(new Drop("魔血项链", 50))
drops.Add(new Drop("幽灵项链", 65))
drops.Add(new Drop("天珠项链", 65))
drops.Add(new Drop("生命项链", 65))
drops.Add(new Drop("放大镜", 75))
drops.Add(new Drop("竹笛", 75))
drops.Add(new Drop("蓝翡翠项链", 75))
drops.Add(new Drop("白色虎齿项链", 10))
drops.Add(new Drop("灯笼项链", 10))
drops.Add(new Drop("虹魔项链", 50))

// 手镯
drops.Add(new Drop("虹魔手镯", 50))
drops.Add(new Drop("魔血手镯", 50))
drops.Add(new Drop("尽力手镯", 8))
drops.Add(new Drop("坚固手套", 8))
drops.Add(new Drop("道士手镯", 25))
drops.Add(new Drop("魔法手镯", 8))
drops.Add(new Drop("死神手套", 45))
drops.Add(new Drop("金手镯", 25))
drops.Add(new Drop("幽灵手套", 50))
drops.Add(new Drop("黑檀手镯", 25))

// 戒指
drops.Add(new Drop("虹魔戒指", 50))
drops.Add(new Drop("骷髅戒指", 25))
drops.Add(new Drop("生铁戒指", 25))
drops.Add(new Drop("魅力戒指", 30))
drops.Add(new Drop("道德戒指", 30))
drops.Add(new Drop("降妖除魔戒指", 25))
drops.Add(new Drop("狂风戒指", 60))
drops.Add(new Drop("龙之戒指", 50))
drops.Add(new Drop("红宝石戒指", 50))
drops.Add(new Drop("铂金戒指", 50))
drops.Add(new Drop("珊瑚戒指", 25))
drops.Add(new Drop("魔血戒指", 50))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔法守护石(特大)", 200))
drops.Add(new Drop("道术守护石(特大)", 200))
drops.Add(new Drop("攻击守护石(特大)", 200))
drops.Add(new Drop("魔法守护石", 600))
drops.Add(new Drop("道术守护石", 600))
drops.Add(new Drop("攻击守护石", 600))

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("红线", 10))
drops.Add(new Drop("蜘蛛网", 15))

// 卷轴

// 宝石
drops.Add(new Drop("勇猛神珠", 155))
drops.Add(new Drop("魔性神珠", 155))
drops.Add(new Drop("仙界神珠", 155))
drops.Add(new Drop("集中神珠", 160))
drops.Add(new Drop("觉醒神珠", 160))
drops.Add(new Drop("疾风神珠", 200))

// 坐骑

// 技能书
drops.Add(new Drop("双龙斩", 400))
drops.Add(new Drop("吸气", 500))
drops.Add(new Drop("血龙剑法", 1500))
drops.Add(new Drop("分身术", 500))
drops.Add(new Drop("召唤月灵", 500))
drops.Add(new Drop("诅咒术", 500))
drops.Add(new Drop("猛毒剑气", 300))
drops.Add(new Drop("捕缚术", 200))
drops.Add(new Drop("冰咆哮", 300))
drops.Add(new Drop("狮子吼", 500))
drops.Add(new Drop("捕绳剑", 300))
drops.Add(new Drop("烈风击", 100))
drops.Add(new Drop("野蛮冲撞", 100))
drops.Add(new Drop("地狱雷光", 100))
drops.Add(new Drop("困魔咒", 100))
drops.Add(new Drop("烈火剑法", 300))

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
