import DropList from "../../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// 格式:drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(4000, 10));

//武器
drops.Add(new Drop("双极刀", 400))
drops.Add(new Drop("炼狱", 400))
drops.Add(new Drop("SilverBow", 400))
drops.Add(new Drop("裁决之杖", 3000))
drops.Add(new Drop("骨玉权杖", 3000))
drops.Add(new Drop("无极棍", 3000))
drops.Add(new Drop("暗黑刀", 3000))
drops.Add(new Drop("FiendBow", 3000))
drops.Add(new Drop("魔杖", 400))
drops.Add(new Drop("银蛇", 400))

//衣服
drops.Add(new Drop("LightLeatherArmour(男)", 300))
drops.Add(new Drop("炎红战衣(女)", 300))
drops.Add(new Drop("炎红战衣(男)", 300))
drops.Add(new Drop("幽灵战衣(女)", 300))
drops.Add(new Drop("幽灵战衣(男)", 300))
drops.Add(new Drop("恶魔长袍(女)", 300))
drops.Add(new Drop("战神盔甲(男)", 300))
drops.Add(new Drop("LightLeatherArmour(女)", 300))
drops.Add(new Drop("恶魔长袍(男)", 300))
drops.Add(new Drop("战神盔甲(女)", 300))

//头盔
drops.Add(new Drop("黑铁头盔", 600))
drops.Add(new Drop("勇士头盔", 660))
drops.Add(new Drop("钢铁头盔", 400))
drops.Add(new Drop("黄金头盔", 250))

//项链
drops.Add(new Drop("天珠项链", 200))
drops.Add(new Drop("虹魔项链", 200))
drops.Add(new Drop("绿色项链", 600))
drops.Add(new Drop("灵魂项链", 600))
drops.Add(new Drop("恶魔铃铛", 600))
drops.Add(new Drop("生命项链", 200))
drops.Add(new Drop("魔血项链", 200))
drops.Add(new Drop("幽灵项链", 200))

//手镯
drops.Add(new Drop("心灵手镯", 600))
drops.Add(new Drop("龙之手镯", 600))
drops.Add(new Drop("虹魔手镯", 200))
drops.Add(new Drop("魔血手镯", 200))
drops.Add(new Drop("骑士手镯", 600))

//戒指
drops.Add(new Drop("红宝石戒指", 200))
drops.Add(new Drop("龙之戒指", 200))
drops.Add(new Drop("铂金戒指", 200))
drops.Add(new Drop("力量戒指", 600))
drops.Add(new Drop("紫碧螺", 600))
drops.Add(new Drop("泰坦戒指", 600))
drops.Add(new Drop("魔血戒指", 200))
drops.Add(new Drop("虹魔戒指", 200))

//护身符

//腰带

//鞋子

//石头
drops.Add(new Drop("生命守护石(特大)", 800))
drops.Add(new Drop("魔力守护石", 1000))
drops.Add(new Drop("道术守护石(特大)", 800))
drops.Add(new Drop("攻击守护石", 1000))
drops.Add(new Drop("魔法守护石", 1000))
drops.Add(new Drop("魔法守护石(特大)", 800))
drops.Add(new Drop("攻击守护石(特大)", 800))
drops.Add(new Drop("魔力守护石(特大)", 800))
drops.Add(new Drop("道术守护石", 1000))
drops.Add(new Drop("生命守护石", 1000))

//火把

//药水
drops.Add(new Drop("魔法药(中量)", 9))
drops.Add(new Drop("魔法药(中量)", 9))
drops.Add(new Drop("金疮药(中量)", 9))
drops.Add(new Drop("魔法药(中量)", 9))
drops.Add(new Drop("金疮药(中量)", 9))
drops.Add(new Drop("魔法药(中量)", 9))
drops.Add(new Drop("金疮药(中量)", 9))
drops.Add(new Drop("金疮药(中量)", 9))
drops.Add(new Drop("强效太阳水", 10))
drops.Add(new Drop("太阳水", 8))
drops.Add(new Drop("太阳水", 8))
drops.Add(new Drop("太阳水", 8))
drops.Add(new Drop("太阳水", 8))
drops.Add(new Drop("太阳水", 8))
drops.Add(new Drop("太阳水", 8))
drops.Add(new Drop("强效太阳水", 10))
drops.Add(new Drop("魔法药(大量)", 9))
drops.Add(new Drop("金疮药(大量)", 9))
drops.Add(new Drop("魔法药(大量)", 9))
drops.Add(new Drop("金疮药(大量)", 9))
drops.Add(new Drop("魔法药(大量)", 9))
drops.Add(new Drop("金疮药(大量)", 9))
drops.Add(new Drop("魔法药(大量)", 9))
drops.Add(new Drop("金疮药(大量)", 9))
drops.Add(new Drop("强效太阳水", 10))
drops.Add(new Drop("强效太阳水", 10))
drops.Add(new Drop("强效太阳水", 10))

//矿石

//肉

//工艺材料
drops.Add(new Drop("黑线", 10))
drops.Add(new Drop("红线", 10))

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

//觉醒

//宠物

//变身

//其它

export default drops;
