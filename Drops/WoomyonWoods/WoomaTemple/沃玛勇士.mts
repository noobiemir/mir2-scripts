import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(400, 30));

// 武器
drops.Add(new Drop("满义弓", 1000000))
drops.Add(new Drop("双极刀", 1000000))
drops.Add(new Drop("银蛇", 1000000))
drops.Add(new Drop("魔杖", 1000000))
drops.Add(new Drop("炼狱", 1000000))
drops.Add(new Drop("血火之匕", 10000))
drops.Add(new Drop("凝霜", 400))
drops.Add(new Drop("绝命弓", 150))
drops.Add(new Drop("墨铁刀", 150))
drops.Add(new Drop("降魔", 150))
drops.Add(new Drop("偃月", 150))
drops.Add(new Drop("斩马刀", 150))
drops.Add(new Drop("破魂", 150))
drops.Add(new Drop("修罗", 250))

// 衣服
drops.Add(new Drop("残影魔衣(男)", 400))
drops.Add(new Drop("残影魔衣(女)", 400))
drops.Add(new Drop("轻革衣(男)", 400))
drops.Add(new Drop("轻革衣(女)", 400))
drops.Add(new Drop("灵魂战衣(女)", 400))
drops.Add(new Drop("重盔甲(男)", 400))
drops.Add(new Drop("重盔甲(女)", 400))
drops.Add(new Drop("魔法长袍(男)", 400))
drops.Add(new Drop("魔法长袍(女)", 400))
drops.Add(new Drop("灵魂战衣(男)", 400))

// 头盔
drops.Add(new Drop("黄金头盔", 4000))
drops.Add(new Drop("骷髅头盔", 1000))
drops.Add(new Drop("道士头盔", 1000))
drops.Add(new Drop("黄铜头盔", 700))
drops.Add(new Drop("魔法头盔", 250))

// 项链
drops.Add(new Drop("灯笼项链", 700))
drops.Add(new Drop("白色虎齿项链", 700))
drops.Add(new Drop("躲避手链", 1000))
drops.Add(new Drop("放大镜", 1250))
drops.Add(new Drop("蓝翡翠项链", 1250))
drops.Add(new Drop("竹笛", 1250))
drops.Add(new Drop("铂金项链", 600))

// 手镯
drops.Add(new Drop("金手镯", 1500))
drops.Add(new Drop("死神手套", 1400))
drops.Add(new Drop("坚固手套", 800))
drops.Add(new Drop("黑檀手镯", 1000))
drops.Add(new Drop("道士手镯", 1000))
drops.Add(new Drop("尽力手镯", 900))
drops.Add(new Drop("魔法手镯", 800))

// 戒指
drops.Add(new Drop("道德戒指", 1500))
drops.Add(new Drop("黑色水晶戒指", 1000))
drops.Add(new Drop("生铁戒指", 1000))
drops.Add(new Drop("骷髅戒指", 1250))
drops.Add(new Drop("金戒指", 1000))
drops.Add(new Drop("珍珠戒指", 1000))
drops.Add(new Drop("蛇眼戒指", 1000))
drops.Add(new Drop("魅力戒指", 1500))

// 护身符

// 腰带
drops.Add(new Drop("青铜腰带", 2500))

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 30))
drops.Add(new Drop("魔法药(中量)", 30))
drops.Add(new Drop("金疮药(大量)", 70))
drops.Add(new Drop("魔法药(大量)", 70))
drops.Add(new Drop("太阳水", 50))
drops.Add(new Drop("太阳水", 100))
drops.Add(new Drop("强效太阳水", 150))
drops.Add(new Drop("万年雪霜", 500))

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
drops.Add(new Drop("沃玛之心", 150))

export default drops;
