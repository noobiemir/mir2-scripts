import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// 格式:drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(35000, 1));

//武器
drops.Add(new Drop("SilverBow", 40))
drops.Add(new Drop("FiendBow", 3000))
drops.Add(new Drop("暗黑刀", 3000))
drops.Add(new Drop("无极棍", 3000))
drops.Add(new Drop("骨玉权杖", 3000))
drops.Add(new Drop("裁决之杖", 3000))
drops.Add(new Drop("双极刀", 40))
drops.Add(new Drop("银蛇", 40))
drops.Add(new Drop("炼狱", 40))
drops.Add(new Drop("魔杖", 40))
drops.Add(new Drop("修罗", 25))
drops.Add(new Drop("LongBow", 5))
drops.Add(new Drop("墨铁刀", 5))
drops.Add(new Drop("降魔", 5))
drops.Add(new Drop("偃月", 5))
drops.Add(new Drop("斩马刀", 5))
drops.Add(new Drop("破魂", 5))
drops.Add(new Drop("凝霜", 25))

//衣服
drops.Add(new Drop("幽灵战衣(女)", 35))
drops.Add(new Drop("恶魔长袍(女)", 35))
drops.Add(new Drop("幽灵战衣(男)", 35))
drops.Add(new Drop("炎红战衣(男)", 35))
drops.Add(new Drop("战神盔甲(女)", 35))
drops.Add(new Drop("TemperedArmour(男)", 35))
drops.Add(new Drop("TemperedArmour(女)", 35))
drops.Add(new Drop("恶魔长袍(男)", 35))
drops.Add(new Drop("炎红战衣(女)", 35))
drops.Add(new Drop("战神盔甲(男)", 35))
drops.Add(new Drop("LightLeatherArmour(女)", 5))
drops.Add(new Drop("LightLeatherArmour(男)", 5))
drops.Add(new Drop("重盔甲(女)", 5))
drops.Add(new Drop("魔法长袍(男)", 5))
drops.Add(new Drop("魔法长袍(女)", 5))
drops.Add(new Drop("灵魂战衣(男)", 5))
drops.Add(new Drop("重盔甲(男)", 5))
drops.Add(new Drop("残影魔衣(男)", 5))
drops.Add(new Drop("残影魔衣(女)", 5))
drops.Add(new Drop("灵魂战衣(女)", 5))

//头盔
drops.Add(new Drop("记忆头盔", 55))
drops.Add(new Drop("骷髅头盔", 30))
drops.Add(new Drop("道士头盔", 30))

//项链
drops.Add(new Drop("绿色项链", 55))
drops.Add(new Drop("放大镜", 15))
drops.Add(new Drop("天珠项链", 30))
drops.Add(new Drop("生命项链", 30))
drops.Add(new Drop("幽灵项链", 30))
drops.Add(new Drop("竹笛", 15))
drops.Add(new Drop("蓝翡翠项链", 15))
drops.Add(new Drop("白色虎齿项链", 3))
drops.Add(new Drop("凤凰明珠", 20))
drops.Add(new Drop("琥珀项链", 20))
drops.Add(new Drop("魔鬼项链", 20))
drops.Add(new Drop("铂金项链", 3))
drops.Add(new Drop("恶魔铃铛", 55))
drops.Add(new Drop("灯笼项链", 3))
drops.Add(new Drop("灯笼项链", 20))
drops.Add(new Drop("灵魂项链", 55))

//手镯
drops.Add(new Drop("坚固手套", 15))
drops.Add(new Drop("魔法手镯", 15))
drops.Add(new Drop("尽力手镯", 3))
drops.Add(new Drop("道士手镯", 3))
drops.Add(new Drop("钢手镯", 15))
drops.Add(new Drop("金手镯", 5))
drops.Add(new Drop("黑檀手镯", 3))
drops.Add(new Drop("死神手套", 10))

//戒指
drops.Add(new Drop("铂金戒指", 50))
drops.Add(new Drop("龙之戒指", 50))
drops.Add(new Drop("蓝色水晶戒指", 20))
drops.Add(new Drop("珊瑚戒指", 35))
drops.Add(new Drop("红宝石戒指", 50))
drops.Add(new Drop("道德戒指", 5))
drops.Add(new Drop("魅力戒指", 5))
drops.Add(new Drop("骷髅戒指", 5))
drops.Add(new Drop("降妖除魔戒指", 35))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 2))

//矿石

//肉

//工艺材料

//卷轴

//宝石

//坐骑

//技能书
drops.Add(new Drop("困魔咒", 40))
drops.Add(new Drop("野蛮冲撞", 60))
drops.Add(new Drop("魔法盾", 90))
drops.Add(new Drop("迁移剑", 90))
drops.Add(new Drop("攻杀剑术", 20))
drops.Add(new Drop("无极真气", 90))
drops.Add(new Drop("地狱雷光", 60))

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
