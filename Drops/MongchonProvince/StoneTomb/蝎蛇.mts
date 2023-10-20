import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// 格式:drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(500, 10));

//武器
drops.Add(new Drop("SilverBow", 8000))
drops.Add(new Drop("银蛇", 8000))
drops.Add(new Drop("魔杖", 8000))
drops.Add(new Drop("炼狱", 8000))
drops.Add(new Drop("凝霜", 600))
drops.Add(new Drop("修罗", 300))
drops.Add(new Drop("双极刀", 8000))
drops.Add(new Drop("墨铁刀", 160))
drops.Add(new Drop("降魔", 160))
drops.Add(new Drop("偃月", 160))
drops.Add(new Drop("斩马刀", 160))
drops.Add(new Drop("破魂", 160))
drops.Add(new Drop("LongBow", 160))

//衣服
drops.Add(new Drop("LightLeatherArmour(男)", 600))
drops.Add(new Drop("残影魔衣(女)", 600))
drops.Add(new Drop("残影魔衣(男)", 600))
drops.Add(new Drop("灵魂战衣(女)", 600))
drops.Add(new Drop("灵魂战衣(男)", 600))
drops.Add(new Drop("重盔甲(女)", 600))
drops.Add(new Drop("魔法长袍(男)", 600))
drops.Add(new Drop("重盔甲(男)", 600))
drops.Add(new Drop("LightLeatherArmour(女)", 600))
drops.Add(new Drop("魔法长袍(女)", 600))

//头盔
drops.Add(new Drop("道士头盔", 1500))
drops.Add(new Drop("骷髅头盔", 3000))

//项链
drops.Add(new Drop("放大镜", 400))
drops.Add(new Drop("竹笛", 400))
drops.Add(new Drop("蓝翡翠项链", 400))
drops.Add(new Drop("铂金项链", 200))
drops.Add(new Drop("白色虎齿项链", 200))
drops.Add(new Drop("灯笼项链", 200))

//手镯
drops.Add(new Drop("尽力手镯", 160))
drops.Add(new Drop("魔法手镯", 160))
drops.Add(new Drop("坚固手套", 160))
drops.Add(new Drop("黑檀手镯", 300))
drops.Add(new Drop("道士手镯", 300))
drops.Add(new Drop("死神手套", 300))
drops.Add(new Drop("金手镯", 200))

//戒指
drops.Add(new Drop("狂风戒指", 4000))
drops.Add(new Drop("珊瑚戒指", 900))
drops.Add(new Drop("降妖除魔戒指", 900))
drops.Add(new Drop("道德戒指", 200))
drops.Add(new Drop("魅力戒指", 200))
drops.Add(new Drop("骷髅戒指", 300))
drops.Add(new Drop("金戒指", 200))
drops.Add(new Drop("珍珠戒指", 160))
drops.Add(new Drop("蛇眼戒指", 160))
drops.Add(new Drop("黑色水晶戒指", 160))
drops.Add(new Drop("生铁戒指", 100))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("万年雪霜", 400))
drops.Add(new Drop("金疮药(中量)", 20))
drops.Add(new Drop("魔法药(中量)", 20))
drops.Add(new Drop("太阳水", 30))
drops.Add(new Drop("强效太阳水", 200))
drops.Add(new Drop("强效太阳水", 600))

//矿石

//肉

//工艺材料
drops.Add(new Drop("虫壳", 35))

//卷轴

//宝石

//坐骑

//技能书
drops.Add(new Drop("火龙术", 2400))
drops.Add(new Drop("捕缚术", 1500))
drops.Add(new Drop("无极真气", 1500))
drops.Add(new Drop("双龙斩", 1600))

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
