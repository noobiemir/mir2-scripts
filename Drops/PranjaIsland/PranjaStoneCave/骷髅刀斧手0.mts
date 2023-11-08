import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(6500, 1));

// 武器
drops.Add(new Drop("满义弓", 100))
drops.Add(new Drop("双极刀", 100))
drops.Add(new Drop("银蛇", 100))
drops.Add(new Drop("魔杖", 100))
drops.Add(new Drop("炼狱", 100))
drops.Add(new Drop("血火之匕", 100))
drops.Add(new Drop("血饮", 500))
drops.Add(new Drop("井中月", 500))
drops.Add(new Drop("凝霜", 7))

// 衣服
drops.Add(new Drop("残影魔衣(男)", 20))
drops.Add(new Drop("魔法长袍(女)", 20))
drops.Add(new Drop("恶魔长袍(男)", 40))
drops.Add(new Drop("轻革衣(男)", 20))
drops.Add(new Drop("轻革衣(女)", 20))
drops.Add(new Drop("战神盔甲(男)", 40))
drops.Add(new Drop("战神盔甲(女)", 40))
drops.Add(new Drop("幽灵战衣(男)", 40))
drops.Add(new Drop("恶魔长袍(女)", 40))
drops.Add(new Drop("炎红战衣(男)", 40))
drops.Add(new Drop("炎红战衣(女)", 40))
drops.Add(new Drop("魂魅神衣(男)", 40))
drops.Add(new Drop("魂魅神衣(女)", 40))
drops.Add(new Drop("残影魔衣(女)", 20))
drops.Add(new Drop("魔法长袍(男)", 20))
drops.Add(new Drop("幽灵战衣(女)", 40))
drops.Add(new Drop("灵魂战衣(男)", 20))
drops.Add(new Drop("重盔甲(男)", 20))
drops.Add(new Drop("灵魂战衣(女)", 20))
drops.Add(new Drop("重盔甲(女)", 20))

// 头盔
drops.Add(new Drop("道士头盔", 6))
drops.Add(new Drop("骷髅头盔", 6))

// 项链
drops.Add(new Drop("天珠项链", 100))
drops.Add(new Drop("琥珀项链", 3))
drops.Add(new Drop("灯笼项链", 3))
drops.Add(new Drop("魔鬼项链", 3))
drops.Add(new Drop("蓝翡翠项链", 4))
drops.Add(new Drop("放大镜", 4))
drops.Add(new Drop("竹笛", 4))
drops.Add(new Drop("幽灵项链", 100))
drops.Add(new Drop("生命项链", 100))
drops.Add(new Drop("躲避手链", 10))
drops.Add(new Drop("凤凰明珠", 3))

// 手镯
drops.Add(new Drop("辟邪手镯", 12))
drops.Add(new Drop("夏普儿手镯", 10))

// 戒指
drops.Add(new Drop("道德戒指", 4))
drops.Add(new Drop("降妖除魔戒指", 20))
drops.Add(new Drop("珊瑚戒指", 24))
drops.Add(new Drop("魅力戒指", 4))
drops.Add(new Drop("金戒指", 4))
drops.Add(new Drop("珍珠戒指", 3))
drops.Add(new Drop("黑色水晶戒指", 3))
drops.Add(new Drop("蛇眼戒指", 3))

// 护身符

// 腰带
drops.Add(new Drop("黄金腰带", 1000))

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("强效太阳水", 3))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("骨头", 1))
drops.Add(new Drop("大骨头", 2))
drops.Add(new Drop("避水珠", 40))
drops.Add(new Drop("寒冰珠", 100))

// 卷轴
drops.Add(new Drop("修复油", 10))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("捕缚术", 200))
drops.Add(new Drop("双龙斩", 120))
drops.Add(new Drop("半月弯刀", 20))
drops.Add(new Drop("刺杀剑术", 10))
drops.Add(new Drop("困魔咒", 50))
drops.Add(new Drop("烈风击", 80))

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
drops.Add(new Drop("时间之石", 20))

export default drops;
