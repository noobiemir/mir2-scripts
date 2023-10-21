import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(8500, 10));

// 武器
drops.Add(new Drop("裁决之杖", 2500))
drops.Add(new Drop("凝霜", 30))
drops.Add(new Drop("炼狱", 200))
drops.Add(new Drop("魔杖", 200))
drops.Add(new Drop("银蛇", 200))
drops.Add(new Drop("双极刀", 200))
drops.Add(new Drop("SilverBow", 200))
drops.Add(new Drop("井中月", 1000))
drops.Add(new Drop("骨玉权杖", 2500))
drops.Add(new Drop("无极棍", 2500))
drops.Add(new Drop("暗黑刀", 2500))
drops.Add(new Drop("FiendBow", 2500))

// 衣服
drops.Add(new Drop("残影魔衣(女)", 5))
drops.Add(new Drop("LightLeatherArmour(男)", 5))
drops.Add(new Drop("魔法长袍(女)", 5))
drops.Add(new Drop("残影魔衣(男)", 5))
drops.Add(new Drop("LightLeatherArmour(女)", 5))
drops.Add(new Drop("灵魂战衣(女)", 5))
drops.Add(new Drop("重盔甲(男)", 5))
drops.Add(new Drop("魔法长袍(男)", 5))
drops.Add(new Drop("重盔甲(女)", 5))
drops.Add(new Drop("灵魂战衣(男)", 5))

// 头盔
drops.Add(new Drop("记忆头盔", 100))
drops.Add(new Drop("骷髅头盔", 10))
drops.Add(new Drop("道士头盔", 10))

// 项链
drops.Add(new Drop("天珠项链", 300))
drops.Add(new Drop("绿色项链", 2000))
drops.Add(new Drop("恶魔铃铛", 2000))
drops.Add(new Drop("铂金项链", 10))
drops.Add(new Drop("技巧项链", 5000))
drops.Add(new Drop("生命项链", 300))
drops.Add(new Drop("灵魂项链", 2000))
drops.Add(new Drop("幽灵项链", 300))
drops.Add(new Drop("灯笼项链", 10))
drops.Add(new Drop("放大镜", 13))
drops.Add(new Drop("蓝翡翠项链", 13))
drops.Add(new Drop("白色虎齿项链", 10))
drops.Add(new Drop("记忆项链", 100))
drops.Add(new Drop("竹笛", 13))

// 手镯
drops.Add(new Drop("龙之手镯", 400))
drops.Add(new Drop("骑士手镯", 400))
drops.Add(new Drop("三眼手镯", 250))
drops.Add(new Drop("思贝尔手镯", 250))
drops.Add(new Drop("阎罗手套", 100))
drops.Add(new Drop("幽灵手套", 100))
drops.Add(new Drop("金手镯", 15))
drops.Add(new Drop("黑檀手镯", 10))
drops.Add(new Drop("道士手镯", 10))
drops.Add(new Drop("坚固手套", 8))
drops.Add(new Drop("魔法手镯", 8))
drops.Add(new Drop("尽力手镯", 8))
drops.Add(new Drop("记忆手镯", 100))
drops.Add(new Drop("心灵手镯", 400))
drops.Add(new Drop("死神手套", 15))

// 戒指
drops.Add(new Drop("红宝石戒指", 300))
drops.Add(new Drop("铂金戒指", 300))
drops.Add(new Drop("珊瑚戒指", 55))
drops.Add(new Drop("龙之戒指", 300))
drops.Add(new Drop("火焰戒指", 500))
drops.Add(new Drop("狂风戒指", 70))
drops.Add(new Drop("降妖除魔戒指", 55))
drops.Add(new Drop("道德戒指", 10))
drops.Add(new Drop("魅力戒指", 10))
drops.Add(new Drop("骷髅戒指", 15))
drops.Add(new Drop("记忆戒指", 300))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("能力守护石(特大)", 550))
drops.Add(new Drop("道术守护石(特大)", 550))
drops.Add(new Drop("魔法守护石(特大)", 550))
drops.Add(new Drop("攻击守护石(特大)", 550))
drops.Add(new Drop("魔力守护石(特大)", 550))
drops.Add(new Drop("生命守护石(特大)", 550))
drops.Add(new Drop("道术守护石(大)", 350))
drops.Add(new Drop("魔法守护石(大)", 350))
drops.Add(new Drop("能力守护石(大)", 350))
drops.Add(new Drop("攻击守护石(大)", 350))
drops.Add(new Drop("生命守护石(大)", 350))
drops.Add(new Drop("道术守护石(中)", 100))
drops.Add(new Drop("魔法守护石(中)", 100))
drops.Add(new Drop("攻击守护石(中)", 100))
drops.Add(new Drop("能力守护石(中)", 100))
drops.Add(new Drop("魔力守护石(中)", 100))
drops.Add(new Drop("生命守护石(中)", 100))
drops.Add(new Drop("魔力守护石(大)", 350))

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 2))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("白线", 15))
drops.Add(new Drop("白线", 10))

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
drops.Add(new Drop("岩石标本", 3, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
