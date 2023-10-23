import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(350, 10));

// 武器
drops.Add(new Drop("炼狱", 6000))
drops.Add(new Drop("破魂", 160))
drops.Add(new Drop("斩马刀", 160))
drops.Add(new Drop("偃月", 160))
drops.Add(new Drop("降魔", 160))
drops.Add(new Drop("墨铁刀", 160))
drops.Add(new Drop("绝命弓", 160))
drops.Add(new Drop("修罗", 500))
drops.Add(new Drop("凝霜", 500))
drops.Add(new Drop("魔杖", 6000))
drops.Add(new Drop("银蛇", 6000))
drops.Add(new Drop("双极刀", 6000))
drops.Add(new Drop("满义弓", 6000))

// 衣服
drops.Add(new Drop("残影魔衣(女)", 800))
drops.Add(new Drop("轻革衣(男)", 800))
drops.Add(new Drop("魔法长袍(女)", 800))
drops.Add(new Drop("残影魔衣(男)", 800))
drops.Add(new Drop("轻革衣(女)", 800))
drops.Add(new Drop("灵魂战衣(女)", 800))
drops.Add(new Drop("重盔甲(女)", 800))
drops.Add(new Drop("魔法长袍(男)", 800))
drops.Add(new Drop("重盔甲(男)", 800))
drops.Add(new Drop("灵魂战衣(男)", 800))

// 头盔
drops.Add(new Drop("骷髅头盔", 400))
drops.Add(new Drop("道士头盔", 400))

// 项链
drops.Add(new Drop("放大镜", 150))
drops.Add(new Drop("灯笼项链", 100))
drops.Add(new Drop("白色虎齿项链", 100))
drops.Add(new Drop("铂金项链", 100))
drops.Add(new Drop("蓝翡翠项链", 150))
drops.Add(new Drop("竹笛", 150))

// 手镯
drops.Add(new Drop("幽灵手套", 1000))
drops.Add(new Drop("魔法手镯", 100))
drops.Add(new Drop("金手镯", 150))
drops.Add(new Drop("阎罗手套", 20000))
drops.Add(new Drop("死神手套", 150))
drops.Add(new Drop("尽力手镯", 100))
drops.Add(new Drop("黑檀手镯", 150))
drops.Add(new Drop("坚固手套", 100))
drops.Add(new Drop("道士手镯", 150))

// 戒指
drops.Add(new Drop("狂风戒指", 2000))
drops.Add(new Drop("降妖除魔戒指", 1000))
drops.Add(new Drop("道德戒指", 150))
drops.Add(new Drop("魅力戒指", 150))
drops.Add(new Drop("生铁戒指", 150))
drops.Add(new Drop("珊瑚戒指", 1000))
drops.Add(new Drop("金戒指", 100))
drops.Add(new Drop("珍珠戒指", 100))
drops.Add(new Drop("蛇眼戒指", 100))
drops.Add(new Drop("黑色水晶戒指", 100))
drops.Add(new Drop("骷髅戒指", 150))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("道术守护石(中)", 2000))
drops.Add(new Drop("魔法守护石(中)", 2000))
drops.Add(new Drop("能力守护石(中)", 2000))
drops.Add(new Drop("攻击守护石(中)", 2000))
drops.Add(new Drop("生命守护石(中)", 2000))
drops.Add(new Drop("魔力守护石(中)", 2000))

// 火把

// 药水
drops.Add(new Drop("疾风药水(小)", 200))
drops.Add(new Drop("强效太阳水", 100))
drops.Add(new Drop("金疮药(中量)", 6))
drops.Add(new Drop("魔法药(中量)", 6))
drops.Add(new Drop("金疮药(中量)", 6))
drops.Add(new Drop("魔法药(中量)", 6))
drops.Add(new Drop("太阳水", 50))
drops.Add(new Drop("万年雪霜", 1000))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("颚骨", 10))

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
