import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(650, 10));

// 武器
drops.Add(new Drop("满义弓", 1000))
drops.Add(new Drop("双极刀", 1000))
drops.Add(new Drop("银蛇", 1000))
drops.Add(new Drop("魔杖", 1000))
drops.Add(new Drop("炼狱", 1000))
drops.Add(new Drop("血火之匕", 1000))
drops.Add(new Drop("血饮", 5000))
drops.Add(new Drop("井中月", 5000))
drops.Add(new Drop("凝霜", 75))

// 衣服
drops.Add(new Drop("残影魔衣(男)", 200))
drops.Add(new Drop("魔法长袍(女)", 200))
drops.Add(new Drop("恶魔长袍(男)", 400))
drops.Add(new Drop("LightLeatherArmour(男)", 200))
drops.Add(new Drop("LightLeatherArmour(女)", 200))
drops.Add(new Drop("战神盔甲(男)", 400))
drops.Add(new Drop("战神盔甲(女)", 400))
drops.Add(new Drop("幽灵战衣(男)", 400))
drops.Add(new Drop("恶魔长袍(女)", 400))
drops.Add(new Drop("炎红战衣(男)", 400))
drops.Add(new Drop("炎红战衣(女)", 400))
drops.Add(new Drop("TemperedArmour(男)", 400))
drops.Add(new Drop("TemperedArmour(女)", 400))
drops.Add(new Drop("残影魔衣(女)", 200))
drops.Add(new Drop("魔法长袍(男)", 200))
drops.Add(new Drop("幽灵战衣(女)", 400))
drops.Add(new Drop("灵魂战衣(男)", 200))
drops.Add(new Drop("重盔甲(男)", 200))
drops.Add(new Drop("灵魂战衣(女)", 200))
drops.Add(new Drop("重盔甲(女)", 200))

// 头盔
drops.Add(new Drop("道士头盔", 60))
drops.Add(new Drop("骷髅头盔", 60))

// 项链
drops.Add(new Drop("天珠项链", 1000))
drops.Add(new Drop("琥珀项链", 35))
drops.Add(new Drop("灯笼项链", 30))
drops.Add(new Drop("魔鬼项链", 35))
drops.Add(new Drop("蓝翡翠项链", 40))
drops.Add(new Drop("放大镜", 40))
drops.Add(new Drop("竹笛", 40))
drops.Add(new Drop("幽灵项链", 1000))
drops.Add(new Drop("生命项链", 1000))
drops.Add(new Drop("躲避手链", 100))
drops.Add(new Drop("凤凰明珠", 35))

// 手镯
drops.Add(new Drop("辟邪手镯", 120))
drops.Add(new Drop("夏普儿手镯", 100))

// 戒指
drops.Add(new Drop("道德戒指", 40))
drops.Add(new Drop("降妖除魔戒指", 200))
drops.Add(new Drop("珊瑚戒指", 240))
drops.Add(new Drop("魅力戒指", 40))
drops.Add(new Drop("金戒指", 40))
drops.Add(new Drop("珍珠戒指", 30))
drops.Add(new Drop("黑色水晶戒指", 30))
drops.Add(new Drop("蛇眼戒指", 30))

// 护身符

// 腰带
drops.Add(new Drop("黄金腰带", 10000))

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("魔法药(大量)", 20))
drops.Add(new Drop("强效太阳水", 30))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("金疮药(大量)", 20))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("骨头", 10))
drops.Add(new Drop("大骨头", 20))
drops.Add(new Drop("避水珠", 400))
drops.Add(new Drop("寒冰珠", 1000))

// 卷轴
drops.Add(new Drop("修复油", 100))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("捕缚术", 2000))
drops.Add(new Drop("双龙斩", 1200))
drops.Add(new Drop("半月弯刀", 200))
drops.Add(new Drop("刺杀剑术", 100))
drops.Add(new Drop("困魔咒", 500))
drops.Add(new Drop("烈风击", 800))

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
drops.Add(new Drop("雪白的骷髅", 8, 0, true))

// 觉醒

// 宠物

// 变身

// 其它
drops.Add(new Drop("时间之石", 200))

export default drops;
