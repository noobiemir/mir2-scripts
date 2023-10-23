import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(4500, 1));

// 武器
drops.Add(new Drop("破魂", 16))
drops.Add(new Drop("斩马刀", 16))
drops.Add(new Drop("偃月", 16))
drops.Add(new Drop("降魔", 16))
drops.Add(new Drop("墨铁刀", 16))
drops.Add(new Drop("绝命弓", 16))
drops.Add(new Drop("修罗", 50))
drops.Add(new Drop("凝霜", 100))

// 衣服
drops.Add(new Drop("轻革衣(女)", 80))
drops.Add(new Drop("轻革衣(男)", 80))
drops.Add(new Drop("残影魔衣(男)", 80))
drops.Add(new Drop("灵魂战衣(女)", 80))
drops.Add(new Drop("灵魂战衣(男)", 80))
drops.Add(new Drop("残影魔衣(女)", 80))
drops.Add(new Drop("魔法长袍(男)", 80))
drops.Add(new Drop("重盔甲(女)", 80))
drops.Add(new Drop("重盔甲(男)", 80))
drops.Add(new Drop("魔法长袍(女)", 80))

// 头盔

// 项链
drops.Add(new Drop("竹笛", 150))
drops.Add(new Drop("蓝翡翠项链", 150))
drops.Add(new Drop("铂金项链", 60))
drops.Add(new Drop("放大镜", 150))
drops.Add(new Drop("灯笼项链", 20))
drops.Add(new Drop("白色虎齿项链", 20))

// 手镯
drops.Add(new Drop("阎罗手套", 2000))
drops.Add(new Drop("尽力手镯", 16))
drops.Add(new Drop("魔法手镯", 16))
drops.Add(new Drop("坚固手套", 16))
drops.Add(new Drop("黑檀手镯", 50))
drops.Add(new Drop("道士手镯", 50))
drops.Add(new Drop("死神手套", 90))
drops.Add(new Drop("金手镯", 40))

// 戒指
drops.Add(new Drop("道德戒指", 60))
drops.Add(new Drop("降妖除魔戒指", 600))
drops.Add(new Drop("金戒指", 20))
drops.Add(new Drop("魅力戒指", 60))
drops.Add(new Drop("珊瑚戒指", 600))
drops.Add(new Drop("生铁戒指", 50))
drops.Add(new Drop("珍珠戒指", 16))
drops.Add(new Drop("骷髅戒指", 50))
drops.Add(new Drop("蛇眼戒指", 16))
drops.Add(new Drop("黑色水晶戒指", 16))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("道术守护石(大)", 200))
drops.Add(new Drop("攻击守护石(大)", 200))
drops.Add(new Drop("能力守护石(大)", 200))
drops.Add(new Drop("魔力守护石(大)", 200))
drops.Add(new Drop("生命守护石(大)", 200))
drops.Add(new Drop("道术守护石(中)", 150))
drops.Add(new Drop("魔法守护石(大)", 200))
drops.Add(new Drop("攻击守护石(中)", 150))
drops.Add(new Drop("能力守护石(中)", 150))
drops.Add(new Drop("魔力守护石(中)", 150))
drops.Add(new Drop("生命守护石(中)", 150))
drops.Add(new Drop("魔法守护石(中)", 150))

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 60))
drops.Add(new Drop("太阳水", 40))
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("万年雪霜", 100))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("疾风药水(小)", 200))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("虫壳", 5))

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("气功波", 140))
drops.Add(new Drop("寒冰掌", 200))

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
drops.Add(new Drop("龙之宝剑", 15, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
