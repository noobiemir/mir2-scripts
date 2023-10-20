import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// 格式:drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(2000, 10));

//武器

//衣服
drops.Add(new Drop("中型盔甲(男)", 2000))
drops.Add(new Drop("中型盔甲(女)", 2000))
drops.Add(new Drop("重盔甲(男)", 500))
drops.Add(new Drop("重盔甲(女)", 500))
drops.Add(new Drop("魔法长袍(男)", 500))
drops.Add(new Drop("魔法长袍(女)", 500))
drops.Add(new Drop("灵魂战衣(男)", 500))
drops.Add(new Drop("灵魂战衣(女)", 500))
drops.Add(new Drop("残影魔衣(男)", 500))
drops.Add(new Drop("残影魔衣(女)", 500))
drops.Add(new Drop("LightLeatherArmour(男)", 500))
drops.Add(new Drop("LightLeatherArmour(男)", 500))

//头盔
drops.Add(new Drop("骷髅头盔", 500))
drops.Add(new Drop("黄铜头盔", 150))
drops.Add(new Drop("道士头盔", 300))
drops.Add(new Drop("魔法头盔", 100))

//项链

//手镯

//戒指
drops.Add(new Drop("狂风戒指", 1400))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(中量)", 20))
drops.Add(new Drop("魔法药(中量)", 20))
drops.Add(new Drop("金疮药(大量)", 25))
drops.Add(new Drop("魔法药(大量)", 25))
drops.Add(new Drop("太阳水", 50))
drops.Add(new Drop("太阳水", 50))
drops.Add(new Drop("太阳水", 100))
drops.Add(new Drop("疾风药水(小)", 1000))

//矿石

//肉

//工艺材料
drops.Add(new Drop("虫眼", 30))
drops.Add(new Drop("虫腿", 25))
drops.Add(new Drop("颚骨", 45))

//卷轴

//宝石

//坐骑

//技能书

//杂物

//缰绳

//铃铛

//马鞍

//丝带

//面具

//食物

//钩

//浮标

//饵

//探鱼器

//鱼线轮

//鱼

//任务
drops.Add(new Drop("采药手套", 8, 0, true))
drops.Add(new Drop("绿草药", 8, 0, true))
drops.Add(new Drop("采药工具", 8, 0, true))

//觉醒

//宠物

//变身

//其它

export default drops;
