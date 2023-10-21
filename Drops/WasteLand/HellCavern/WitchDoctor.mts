import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(2250, 10));

// 武器
drops.Add(new Drop("偃月", 50))
drops.Add(new Drop("冷月刀", 100000))
drops.Add(new Drop("逍遥扇", 100000))
drops.Add(new Drop("怒斩", 100000))
drops.Add(new Drop("龙牙", 100000))
drops.Add(new Drop("凝霜", 200))
drops.Add(new Drop("修罗", 100))
drops.Add(new Drop("破魂", 50))
drops.Add(new Drop("斩马刀", 50))
drops.Add(new Drop("降魔", 50))
drops.Add(new Drop("LitheBow", 100000))
drops.Add(new Drop("墨铁刀", 50))
drops.Add(new Drop("LongBow", 50))

// 衣服
drops.Add(new Drop("魔法长袍(女)", 150))
drops.Add(new Drop("灵魂战衣(女)", 150))
drops.Add(new Drop("残影魔衣(男)", 150))
drops.Add(new Drop("残影魔衣(女)", 150))
drops.Add(new Drop("LightLeatherArmour(男)", 150))
drops.Add(new Drop("LightLeatherArmour(女)", 150))
drops.Add(new Drop("灵魂战衣(男)", 150))
drops.Add(new Drop("重盔甲(女)", 150))
drops.Add(new Drop("魔法长袍(男)", 150))
drops.Add(new Drop("重盔甲(男)", 150))

// 头盔
drops.Add(new Drop("道士头盔", 500))
drops.Add(new Drop("骷髅头盔", 500))

// 项链
drops.Add(new Drop("灯笼项链", 100))
drops.Add(new Drop("白色虎齿项链", 100))
drops.Add(new Drop("蓝翡翠项链", 150))
drops.Add(new Drop("灵玉项链", 7500))
drops.Add(new Drop("铂金项链", 100))
drops.Add(new Drop("破碎项链", 34000))
drops.Add(new Drop("青魔项链", 24000))
drops.Add(new Drop("放大镜", 150))
drops.Add(new Drop("竹笛", 150))
drops.Add(new Drop("狂风项链", 4000))

// 手镯
drops.Add(new Drop("死神手套", 150))
drops.Add(new Drop("道士手镯", 150))
drops.Add(new Drop("黑檀手镯", 150))
drops.Add(new Drop("金手镯", 100))
drops.Add(new Drop("魔法手镯", 100))
drops.Add(new Drop("破碎手镯", 50000))
drops.Add(new Drop("灵玉手镯", 7500))
drops.Add(new Drop("幽灵手套", 700))
drops.Add(new Drop("坚固手套", 80))

// 戒指
drops.Add(new Drop("灵玉戒指", 7500))
drops.Add(new Drop("魅力戒指", 100))
drops.Add(new Drop("铂金戒指", 500))
drops.Add(new Drop("红宝石戒指", 550))
drops.Add(new Drop("骷髅戒指", 150))
drops.Add(new Drop("屠魔戒指", 500))
drops.Add(new Drop("黑色水晶戒指", 100))
drops.Add(new Drop("蛇眼戒指", 100))
drops.Add(new Drop("珍珠戒指", 100))
drops.Add(new Drop("龙之戒指", 500))
drops.Add(new Drop("生铁戒指", 50))
drops.Add(new Drop("道德戒指", 100))
drops.Add(new Drop("金戒指", 100))
drops.Add(new Drop("珊瑚戒指", 750))
drops.Add(new Drop("狂风戒指", 1000))
drops.Add(new Drop("破碎戒指", 750))
drops.Add(new Drop("青魔戒指", 750))
drops.Add(new Drop("雪玉戒指", 250))
drops.Add(new Drop("降妖除魔戒指", 750))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔法守护石(大)", 2500))
drops.Add(new Drop("攻击守护石(大)", 2500))
drops.Add(new Drop("道术守护石(大)", 2500))

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 25))
drops.Add(new Drop("太阳水", 15))
drops.Add(new Drop("魔法药(大量)", 5))
drops.Add(new Drop("金疮药(大量)", 5))
drops.Add(new Drop("魔法药(大量)", 5))
drops.Add(new Drop("金疮药(大量)", 5))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("圆月弯刀", 700000))
drops.Add(new Drop("猛毒剑气", 700))
drops.Add(new Drop("捕缚术", 700000))
drops.Add(new Drop("火龙气焰", 9000000))

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
