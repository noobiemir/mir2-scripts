import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(500, 5));

// 武器
drops.Add(new Drop("双极刀", 4000))
drops.Add(new Drop("满义弓", 4000))
drops.Add(new Drop("银蛇", 4000))
drops.Add(new Drop("魔杖", 4000))
drops.Add(new Drop("炼狱", 4000))
drops.Add(new Drop("修罗", 150))
drops.Add(new Drop("凝霜", 300))
drops.Add(new Drop("墨铁刀", 80))
drops.Add(new Drop("降魔", 80))
drops.Add(new Drop("偃月", 80))
drops.Add(new Drop("斩马刀", 80))
drops.Add(new Drop("破魂", 80))
drops.Add(new Drop("绝命弓", 80))

// 衣服
drops.Add(new Drop("残影魔衣(男)", 250))
drops.Add(new Drop("轻革衣(女)", 250))
drops.Add(new Drop("轻革衣(男)", 250))
drops.Add(new Drop("残影魔衣(女)", 250))
drops.Add(new Drop("灵魂战衣(女)", 250))
drops.Add(new Drop("魔法长袍(男)", 250))
drops.Add(new Drop("魔法长袍(女)", 250))
drops.Add(new Drop("重盔甲(女)", 250))
drops.Add(new Drop("重盔甲(男)", 250))
drops.Add(new Drop("灵魂战衣(男)", 250))

// 头盔

// 项链
drops.Add(new Drop("放大镜", 200))
drops.Add(new Drop("蓝翡翠项链", 200))
drops.Add(new Drop("铂金项链", 100))
drops.Add(new Drop("竹笛", 200))
drops.Add(new Drop("灯笼项链", 100))
drops.Add(new Drop("白色虎齿项链", 100))

// 手镯
drops.Add(new Drop("道士手镯", 150))
drops.Add(new Drop("金手镯", 100))
drops.Add(new Drop("死神手套", 150))
drops.Add(new Drop("黑檀手镯", 150))
drops.Add(new Drop("魔法手镯", 80))
drops.Add(new Drop("尽力手镯", 80))
drops.Add(new Drop("坚固手套", 80))

// 戒指
drops.Add(new Drop("珊瑚戒指", 250))
drops.Add(new Drop("狂风戒指", 400))
drops.Add(new Drop("道德戒指", 200))
drops.Add(new Drop("魅力戒指", 200))
drops.Add(new Drop("骷髅戒指", 150))
drops.Add(new Drop("降妖除魔戒指", 250))
drops.Add(new Drop("金戒指", 100))
drops.Add(new Drop("珍珠戒指", 80))
drops.Add(new Drop("蛇眼戒指", 80))
drops.Add(new Drop("黑色水晶戒指", 80))
drops.Add(new Drop("生铁戒指", 50))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("生命守护石(中)", 100))
drops.Add(new Drop("魔力守护石(中)", 100))
drops.Add(new Drop("能力守护石(中)", 100))
drops.Add(new Drop("攻击守护石(中)", 100))
drops.Add(new Drop("魔法守护石(中)", 100))
drops.Add(new Drop("道术守护石(中)", 100))

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 100))
drops.Add(new Drop("万年雪霜", 300))
drops.Add(new Drop("太阳水", 50))
drops.Add(new Drop("太阳水", 100))
drops.Add(new Drop("强效太阳水", 300))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("虫壳", 25))

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("灭天火", 1200))
drops.Add(new Drop("捕缚术", 750))
drops.Add(new Drop("无极真气", 750))
drops.Add(new Drop("双龙斩", 800))

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
