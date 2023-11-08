import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2250, 15));

// 武器
drops.Add(new Drop("墨铁刀", 200))
drops.Add(new Drop("霸王弓", 1700000))
drops.Add(new Drop("冷月刀", 1700000))
drops.Add(new Drop("逍遥扇", 1700000))
drops.Add(new Drop("怒斩", 1700000))
drops.Add(new Drop("龙牙", 1700000))
drops.Add(new Drop("凝霜", 220))
drops.Add(new Drop("修罗", 150))
drops.Add(new Drop("绝命弓", 200))
drops.Add(new Drop("偃月", 200))
drops.Add(new Drop("斩马刀", 200))
drops.Add(new Drop("破魂", 200))
drops.Add(new Drop("降魔", 200))

// 衣服
drops.Add(new Drop("残影魔衣(男)", 650))
drops.Add(new Drop("残影魔衣(女)", 650))
drops.Add(new Drop("轻革衣(男)", 650))
drops.Add(new Drop("轻革衣(女)", 650))
drops.Add(new Drop("灵魂战衣(男)", 650))
drops.Add(new Drop("魔法长袍(女)", 650))
drops.Add(new Drop("魔法长袍(男)", 650))
drops.Add(new Drop("重盔甲(女)", 650))
drops.Add(new Drop("重盔甲(男)", 650))
drops.Add(new Drop("灵魂战衣(女)", 650))

// 头盔

// 项链
drops.Add(new Drop("灯笼项链", 200))
drops.Add(new Drop("白色虎齿项链", 200))
drops.Add(new Drop("铂金项链", 150))
drops.Add(new Drop("青魔项链", 8000))
drops.Add(new Drop("破碎项链", 7500))
drops.Add(new Drop("狂风项链", 3000))
drops.Add(new Drop("竹笛", 450))
drops.Add(new Drop("蓝翡翠项链", 450))
drops.Add(new Drop("放大镜", 450))

// 手镯
drops.Add(new Drop("坚固手套", 180))
drops.Add(new Drop("幽灵手套", 750))
drops.Add(new Drop("青魔手镯", 8000))
drops.Add(new Drop("破碎手镯", 7500))
drops.Add(new Drop("幽灵手套", 750))
drops.Add(new Drop("金手镯", 400))
drops.Add(new Drop("死神手套", 450))
drops.Add(new Drop("黑檀手镯", 300))
drops.Add(new Drop("道士手镯", 300))
drops.Add(new Drop("魔法手镯", 180))

// 戒指
drops.Add(new Drop("虎威戒指", 1500))
drops.Add(new Drop("铂金戒指", 2000))
drops.Add(new Drop("道德戒指", 100))
drops.Add(new Drop("龙之戒指", 2000))
drops.Add(new Drop("红宝石戒指", 2000))
drops.Add(new Drop("金戒指", 350))
drops.Add(new Drop("骷髅戒指", 400))
drops.Add(new Drop("降妖除魔戒指", 750))
drops.Add(new Drop("珊瑚戒指", 750))
drops.Add(new Drop("魅力戒指", 100))
drops.Add(new Drop("生铁戒指", 100))
drops.Add(new Drop("雪玉戒指", 1500))
drops.Add(new Drop("屠魔戒指", 1500))
drops.Add(new Drop("青魔戒指", 8000))
drops.Add(new Drop("破碎戒指", 7500))
drops.Add(new Drop("狂风戒指", 1000))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("能力守护石(大)", 2500))
drops.Add(new Drop("魔力守护石(大)", 2500))
drops.Add(new Drop("生命守护石(大)", 2500))
drops.Add(new Drop("道术守护石(大)", 2500))
drops.Add(new Drop("魔法守护石(大)", 2500))
drops.Add(new Drop("攻击守护石(大)", 2500))

// 火把

// 药水
drops.Add(new Drop("金疮药(大量)", 50))
drops.Add(new Drop("魔法药(大量)", 20))
drops.Add(new Drop("魔法药(大量)", 50))
drops.Add(new Drop("太阳水", 40))
drops.Add(new Drop("强效太阳水", 50))
drops.Add(new Drop("金疮药(大量)", 20))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("风身术", 700))
drops.Add(new Drop("诅咒术", 1700000))
drops.Add(new Drop("魔法盾", 1000))
drops.Add(new Drop("召唤月灵", 100000))
drops.Add(new Drop("寒冰掌", 1000))
drops.Add(new Drop("迷魂术", 700))

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
