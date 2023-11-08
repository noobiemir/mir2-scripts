import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(350, 10));

// 武器
drops.Add(new Drop("炼狱", 10000))
drops.Add(new Drop("破魂", 200))
drops.Add(new Drop("斩马刀", 200))
drops.Add(new Drop("偃月", 200))
drops.Add(new Drop("降魔", 200))
drops.Add(new Drop("墨铁刀", 200))
drops.Add(new Drop("绝命弓", 200))
drops.Add(new Drop("修罗", 700))
drops.Add(new Drop("凝霜", 800))
drops.Add(new Drop("魔杖", 10000))
drops.Add(new Drop("银蛇", 10000))
drops.Add(new Drop("双极刀", 10000))
drops.Add(new Drop("满义弓", 10000))

// 衣服
drops.Add(new Drop("残影魔衣(女)", 800))
drops.Add(new Drop("轻革衣(男)", 800))
drops.Add(new Drop("灵魂战衣(男)", 800))
drops.Add(new Drop("残影魔衣(男)", 800))
drops.Add(new Drop("轻革衣(女)", 800))
drops.Add(new Drop("灵魂战衣(女)", 800))
drops.Add(new Drop("魔法长袍(男)", 800))
drops.Add(new Drop("魔法长袍(女)", 800))
drops.Add(new Drop("重盔甲(女)", 800))
drops.Add(new Drop("重盔甲(男)", 800))

// 头盔
drops.Add(new Drop("骷髅头盔", 4000))
drops.Add(new Drop("道士头盔", 2000))

// 项链
drops.Add(new Drop("竹笛", 700))
drops.Add(new Drop("灯笼项链", 200))
drops.Add(new Drop("白色虎齿项链", 200))
drops.Add(new Drop("铂金项链", 200))
drops.Add(new Drop("蓝翡翠项链", 700))
drops.Add(new Drop("放大镜", 700))
drops.Add(new Drop("斗士项链", 300))

// 手镯
drops.Add(new Drop("幽灵手套", 10000))
drops.Add(new Drop("黑檀手镯", 500))
drops.Add(new Drop("金手镯", 400))
drops.Add(new Drop("阎罗手套", 20000))
drops.Add(new Drop("死神手套", 900))
drops.Add(new Drop("坚固手套", 200))
drops.Add(new Drop("魔法手镯", 200))
drops.Add(new Drop("尽力手镯", 200))
drops.Add(new Drop("道士手镯", 500))

// 戒指
drops.Add(new Drop("骷髅戒指", 500))
drops.Add(new Drop("黑色水晶戒指", 200))
drops.Add(new Drop("蛇眼戒指", 200))
drops.Add(new Drop("珍珠戒指", 200))
drops.Add(new Drop("金戒指", 200))
drops.Add(new Drop("生铁戒指", 500))
drops.Add(new Drop("魅力戒指", 600))
drops.Add(new Drop("道德戒指", 600))
drops.Add(new Drop("降妖除魔戒指", 6000))
drops.Add(new Drop("珊瑚戒指", 6000))
drops.Add(new Drop("狂风戒指", 14000))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔法守护石(中)", 1500))
drops.Add(new Drop("魔力守护石(中)", 1500))
drops.Add(new Drop("道术守护石(中)", 1500))
drops.Add(new Drop("攻击守护石(中)", 1500))
drops.Add(new Drop("生命守护石(中)", 1500))
drops.Add(new Drop("能力守护石(中)", 1500))

// 火把

// 药水
drops.Add(new Drop("魔法药水(小)", 500))
drops.Add(new Drop("疾风药水(小)", 500))
drops.Add(new Drop("金疮药(中量)", 6))
drops.Add(new Drop("魔法药(中量)", 6))
drops.Add(new Drop("金疮药(中量)", 6))
drops.Add(new Drop("魔法药(中量)", 6))
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("强效太阳水", 40))
drops.Add(new Drop("万年雪霜", 100))
drops.Add(new Drop("攻击药水(小)", 500))
drops.Add(new Drop("道力药水(小)", 500))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("白线", 20))
drops.Add(new Drop("虫壳", 15))

// 卷轴

// 宝石

// 坐骑

// 技能书

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
drops.Add(new Drop("昆虫标本", 5, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
