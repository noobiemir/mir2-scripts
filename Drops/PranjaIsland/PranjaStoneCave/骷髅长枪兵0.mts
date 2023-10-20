import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// 格式:drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(5000, 1));

//武器
drops.Add(new Drop("冷月刀", 9000))
drops.Add(new Drop("逍遥扇", 9000))
drops.Add(new Drop("怒斩", 9000))
drops.Add(new Drop("龙牙", 9000))
drops.Add(new Drop("LitheBow", 9000))

//衣服
drops.Add(new Drop("战神盔甲(男)", 50))
drops.Add(new Drop("魔法长袍(女)", 15))
drops.Add(new Drop("灵魂战衣(男)", 15))
drops.Add(new Drop("灵魂战衣(女)", 15))
drops.Add(new Drop("残影魔衣(男)", 15))
drops.Add(new Drop("残影魔衣(女)", 15))
drops.Add(new Drop("LightLeatherArmour(男)", 15))
drops.Add(new Drop("恶魔长袍(男)", 50))
drops.Add(new Drop("恶魔长袍(女)", 50))
drops.Add(new Drop("幽灵战衣(男)", 50))
drops.Add(new Drop("幽灵战衣(女)", 50))
drops.Add(new Drop("炎红战衣(男)", 50))
drops.Add(new Drop("炎红战衣(女)", 50))
drops.Add(new Drop("TemperedArmour(男)", 50))
drops.Add(new Drop("TemperedArmour(女)", 50))
drops.Add(new Drop("战神盔甲(女)", 50))
drops.Add(new Drop("魔法长袍(男)", 15))
drops.Add(new Drop("LightLeatherArmour(女)", 15))
drops.Add(new Drop("重盔甲(男)", 15))
drops.Add(new Drop("重盔甲(女)", 15))

//头盔
drops.Add(new Drop("钢铁头盔", 100))
drops.Add(new Drop("道士头盔", 18))
drops.Add(new Drop("骷髅头盔", 20))

//项链
drops.Add(new Drop("琥珀项链", 15))
drops.Add(new Drop("竹笛", 20))
drops.Add(new Drop("放大镜", 20))
drops.Add(new Drop("蓝翡翠项链", 20))
drops.Add(new Drop("凤凰明珠", 15))
drops.Add(new Drop("魔鬼项链", 15))

//手镯
drops.Add(new Drop("坚固手套", 9))
drops.Add(new Drop("死神手套", 43))
drops.Add(new Drop("幽灵手套", 55))
drops.Add(new Drop("魔法手镯", 9))

//戒指
drops.Add(new Drop("五玄戒指", 800))
drops.Add(new Drop("虹魔戒指", 120))
drops.Add(new Drop("降妖除魔戒指", 45))
drops.Add(new Drop("珊瑚戒指", 45))
drops.Add(new Drop("骷髅戒指", 20))
drops.Add(new Drop("珍珠戒指", 10))
drops.Add(new Drop("蛇眼戒指", 10))
drops.Add(new Drop("黑色水晶戒指", 10))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("道力药水(小)", 10))
drops.Add(new Drop("强效太阳水", 6))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(大量)", 3))
drops.Add(new Drop("魔法药(大量)", 3))
drops.Add(new Drop("攻击药水(小)", 10))
drops.Add(new Drop("魔法药水(小)", 10))

//矿石

//肉

//工艺材料
drops.Add(new Drop("骨头", 1))
drops.Add(new Drop("避毒珠", 30))
drops.Add(new Drop("毒素珠", 30))
drops.Add(new Drop("大骨头", 2))

//卷轴
drops.Add(new Drop("战神油", 50))
drops.Add(new Drop("修复油", 30))

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
drops.Add(new Drop("雪白的骷髅", 7, 0, true))

//觉醒

//宠物

//变身

//其它

export default drops;
