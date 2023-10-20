import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(1000, 5));

//武器
drops.Add(new Drop("逍遥扇", 5000))
drops.Add(new Drop("LitheBow", 5000))
drops.Add(new Drop("冷月刀", 5000))
drops.Add(new Drop("怒斩", 5000))
drops.Add(new Drop("龙牙", 5000))

//衣服
drops.Add(new Drop("鬼面甲胄(男)", 1000))
drops.Add(new Drop("TemperedArmour(女)", 700))
drops.Add(new Drop("TemperedArmour(男)", 700))
drops.Add(new Drop("炎红战衣(女)", 700))
drops.Add(new Drop("幽灵战衣(女)", 700))
drops.Add(new Drop("幽灵战衣(男)", 700))
drops.Add(new Drop("恶魔长袍(女)", 700))
drops.Add(new Drop("恶魔长袍(男)", 700))
drops.Add(new Drop("战神盔甲(女)", 700))
drops.Add(new Drop("战神盔甲(男)", 700))
drops.Add(new Drop("炎红战衣(男)", 700))

//头盔

//项链
drops.Add(new Drop("躲避手链", 140))
drops.Add(new Drop("放大镜", 100))
drops.Add(new Drop("竹笛", 100))
drops.Add(new Drop("蓝翡翠项链", 100))

//手镯

//戒指
drops.Add(new Drop("魅力戒指", 100))
drops.Add(new Drop("珍珠戒指", 100))
drops.Add(new Drop("金戒指", 60))
drops.Add(new Drop("降妖除魔戒指", 500))
drops.Add(new Drop("珊瑚戒指", 400))
drops.Add(new Drop("蛇眼戒指", 100))
drops.Add(new Drop("道德戒指", 100))
drops.Add(new Drop("黑色水晶戒指", 100))

//护身符

//腰带

//鞋子
drops.Add(new Drop("赤鳞靴", 1000))

//石头
drops.Add(new Drop("攻击守护石(大)", 600))
drops.Add(new Drop("攻击守护石(特大)", 1000))
drops.Add(new Drop("魔法守护石(特大)", 1000))
drops.Add(new Drop("道术守护石(特大)", 1000))
drops.Add(new Drop("攻击守护石", 3000))
drops.Add(new Drop("魔法守护石(大)", 600))
drops.Add(new Drop("道术守护石(大)", 600))
drops.Add(new Drop("道术守护石", 3000))
drops.Add(new Drop("魔法守护石", 3000))

//火把

//药水
drops.Add(new Drop("疾风药水(小)", 100))
drops.Add(new Drop("魔法药水(中)", 100))
drops.Add(new Drop("攻击药水(中)", 100))
drops.Add(new Drop("道力药水(中)", 100))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(特大)", 20))
drops.Add(new Drop("金疮药(特大)", 20))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))

//矿石

//肉

//工艺材料

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
