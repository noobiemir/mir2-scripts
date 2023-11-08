import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(500, 10));

// 武器
drops.Add(new Drop("满义弓", 3400))
drops.Add(new Drop("祖玛之魂魅弓", 30000))
drops.Add(new Drop("祖玛暗黑刀", 30000))
drops.Add(new Drop("祖玛无极棍", 30000))
drops.Add(new Drop("祖玛骨玉权杖", 30000))
drops.Add(new Drop("祖玛裁决之杖", 30000))
drops.Add(new Drop("双极刀", 3400))
drops.Add(new Drop("银蛇", 3400))
drops.Add(new Drop("炼狱", 3400))
drops.Add(new Drop("魔杖", 3400))
drops.Add(new Drop("修罗", 200))
drops.Add(new Drop("绝命弓", 40))
drops.Add(new Drop("墨铁刀", 40))
drops.Add(new Drop("降魔", 40))
drops.Add(new Drop("偃月", 40))
drops.Add(new Drop("斩马刀", 40))
drops.Add(new Drop("破魂", 40))
drops.Add(new Drop("凝霜", 400))

// 衣服
drops.Add(new Drop("恶魔长袍(女)", 2000))
drops.Add(new Drop("战神盔甲(女)", 2000))
drops.Add(new Drop("恶魔长袍(男)", 2000))
drops.Add(new Drop("幽灵战衣(女)", 2000))
drops.Add(new Drop("炎红战衣(男)", 2000))
drops.Add(new Drop("魂魅神衣(男)", 2000))
drops.Add(new Drop("魂魅神衣(女)", 2000))
drops.Add(new Drop("战神盔甲(男)", 2000))
drops.Add(new Drop("炎红战衣(女)", 2000))
drops.Add(new Drop("轻革衣(女)", 500))
drops.Add(new Drop("幽灵战衣(男)", 2000))
drops.Add(new Drop("残影魔衣(女)", 500))
drops.Add(new Drop("残影魔衣(男)", 500))
drops.Add(new Drop("灵魂战衣(女)", 500))
drops.Add(new Drop("灵魂战衣(男)", 500))
drops.Add(new Drop("轻革衣(男)", 500))
drops.Add(new Drop("魔法长袍(女)", 500))
drops.Add(new Drop("魔法长袍(男)", 500))
drops.Add(new Drop("重盔甲(女)", 500))
drops.Add(new Drop("重盔甲(男)", 500))

// 头盔
drops.Add(new Drop("道士头盔", 1000))
drops.Add(new Drop("骷髅头盔", 1000))

// 项链
drops.Add(new Drop("灯笼项链", 200))
drops.Add(new Drop("白色虎齿项链", 200))
drops.Add(new Drop("铂金项链", 200))
drops.Add(new Drop("蓝翡翠项链", 300))
drops.Add(new Drop("放大镜", 300))
drops.Add(new Drop("竹笛", 300))

// 手镯
drops.Add(new Drop("金手镯", 200))
drops.Add(new Drop("幽灵手套", 1500))
drops.Add(new Drop("死神手套", 300))
drops.Add(new Drop("道士手镯", 300))
drops.Add(new Drop("尽力手镯", 160))
drops.Add(new Drop("坚固手套", 160))
drops.Add(new Drop("魔法手镯", 160))
drops.Add(new Drop("黑檀手镯", 300))

// 戒指
drops.Add(new Drop("黑色水晶戒指", 160))
drops.Add(new Drop("蛇眼戒指", 160))
drops.Add(new Drop("珍珠戒指", 160))
drops.Add(new Drop("生铁戒指", 100))
drops.Add(new Drop("金戒指", 200))
drops.Add(new Drop("骷髅戒指", 300))
drops.Add(new Drop("魅力戒指", 200))
drops.Add(new Drop("道德戒指", 200))
drops.Add(new Drop("降妖除魔戒指", 1500))
drops.Add(new Drop("狂风戒指", 2000))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("太阳水", 40))
drops.Add(new Drop("魔法药(大量)", 50))
drops.Add(new Drop("金疮药(大量)", 50))
drops.Add(new Drop("万年雪霜", 200))
drops.Add(new Drop("金疮药(中量)", 20))
drops.Add(new Drop("强效太阳水", 40))
drops.Add(new Drop("魔法药(中量)", 20))

// 矿石

// 肉

// 工艺材料

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

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
