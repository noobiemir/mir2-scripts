import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(1500, 1));

// 武器
drops.Add(new Drop("修罗", 250))
drops.Add(new Drop("满义弓", 1000))
drops.Add(new Drop("双极刀", 1000))
drops.Add(new Drop("银蛇", 1000))
drops.Add(new Drop("魔杖", 1000))
drops.Add(new Drop("炼狱", 1000))
drops.Add(new Drop("血火之匕", 1000))
drops.Add(new Drop("凝霜", 400))
drops.Add(new Drop("绝命弓", 150))
drops.Add(new Drop("降魔", 150))
drops.Add(new Drop("偃月", 150))
drops.Add(new Drop("斩马刀", 150))
drops.Add(new Drop("破魂", 150))
drops.Add(new Drop("墨铁刀", 150))

// 衣服
drops.Add(new Drop("重盔甲(男)", 40))
drops.Add(new Drop("LightLeatherArmour(女)", 40))
drops.Add(new Drop("残影魔衣(女)", 40))
drops.Add(new Drop("残影魔衣(男)", 40))
drops.Add(new Drop("灵魂战衣(女)", 40))
drops.Add(new Drop("LightLeatherArmour(男)", 40))
drops.Add(new Drop("魔法长袍(女)", 40))
drops.Add(new Drop("魔法长袍(男)", 40))
drops.Add(new Drop("重盔甲(女)", 40))
drops.Add(new Drop("灵魂战衣(男)", 40))

// 头盔
drops.Add(new Drop("魔法头盔", 25))
drops.Add(new Drop("黄铜头盔", 70))
drops.Add(new Drop("道士头盔", 100))
drops.Add(new Drop("骷髅头盔", 100))
drops.Add(new Drop("黄金头盔", 400))

// 项链
drops.Add(new Drop("白色虎齿项链", 60))
drops.Add(new Drop("灯笼项链", 60))
drops.Add(new Drop("躲避手链", 900))
drops.Add(new Drop("铂金项链", 500))
drops.Add(new Drop("蓝翡翠项链", 110))
drops.Add(new Drop("竹笛", 110))
drops.Add(new Drop("放大镜", 110))

// 手镯
drops.Add(new Drop("魔法手镯", 80))
drops.Add(new Drop("尽力手镯", 90))
drops.Add(new Drop("道士手镯", 100))
drops.Add(new Drop("坚固手套", 80))
drops.Add(new Drop("死神手套", 140))
drops.Add(new Drop("金手镯", 150))
drops.Add(new Drop("黑檀手镯", 100))

// 戒指
drops.Add(new Drop("道德戒指", 150))
drops.Add(new Drop("黑色水晶戒指", 100))
drops.Add(new Drop("蛇眼戒指", 100))
drops.Add(new Drop("珍珠戒指", 100))
drops.Add(new Drop("金戒指", 100))
drops.Add(new Drop("骷髅戒指", 125))
drops.Add(new Drop("生铁戒指", 100))
drops.Add(new Drop("魅力戒指", 150))

// 护身符

// 腰带
drops.Add(new Drop("青铜腰带", 200))

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("金疮药(中量)", 1))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("大骨头", 10))
drops.Add(new Drop("骨头", 5))

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
drops.Add(new Drop("骷髅头", 1, 0, true))
drops.Add(new Drop("AncientScyther", 5, 0, true))
drops.Add(new Drop("骷髅骨", 1, 0, true))

// 觉醒
drops.Add(new Drop("觉醒之魂0", 5))

// 宠物

// 变身

// 其它

export default drops;
