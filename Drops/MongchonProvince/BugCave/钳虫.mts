import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(450, 10));

//武器
drops.Add(new Drop("破魂", 160))
drops.Add(new Drop("斩马刀", 160))
drops.Add(new Drop("偃月", 160))
drops.Add(new Drop("降魔", 160))
drops.Add(new Drop("墨铁刀", 160))
drops.Add(new Drop("LongBow", 160))
drops.Add(new Drop("修罗", 500))
drops.Add(new Drop("凝霜", 1000))

//衣服
drops.Add(new Drop("LightLeatherArmour(女)", 800))
drops.Add(new Drop("LightLeatherArmour(男)", 800))
drops.Add(new Drop("残影魔衣(女)", 800))
drops.Add(new Drop("残影魔衣(男)", 800))
drops.Add(new Drop("灵魂战衣(女)", 800))
drops.Add(new Drop("灵魂战衣(男)", 800))
drops.Add(new Drop("魔法长袍(女)", 800))
drops.Add(new Drop("魔法长袍(男)", 800))
drops.Add(new Drop("重盔甲(女)", 800))
drops.Add(new Drop("重盔甲(男)", 800))

//头盔

//项链
drops.Add(new Drop("灯笼项链", 200))
drops.Add(new Drop("白色虎齿项链", 200))
drops.Add(new Drop("铂金项链", 600))
drops.Add(new Drop("蓝翡翠项链", 1500))
drops.Add(new Drop("放大镜", 1500))
drops.Add(new Drop("竹笛", 1500))

//手镯
drops.Add(new Drop("金手镯", 400))
drops.Add(new Drop("死神手套", 900))
drops.Add(new Drop("道士手镯", 500))
drops.Add(new Drop("黑檀手镯", 500))
drops.Add(new Drop("阎罗手套", 20000))
drops.Add(new Drop("魔法手镯", 160))
drops.Add(new Drop("尽力手镯", 160))
drops.Add(new Drop("坚固手套", 160))

//戒指
drops.Add(new Drop("魅力戒指", 600))
drops.Add(new Drop("珊瑚戒指", 6000))
drops.Add(new Drop("降妖除魔戒指", 6000))
drops.Add(new Drop("道德戒指", 600))
drops.Add(new Drop("生铁戒指", 500))
drops.Add(new Drop("黑色水晶戒指", 160))
drops.Add(new Drop("金戒指", 200))
drops.Add(new Drop("珍珠戒指", 160))
drops.Add(new Drop("蛇眼戒指", 160))
drops.Add(new Drop("骷髅戒指", 500))

//护身符

//腰带

//鞋子

//石头
drops.Add(new Drop("道术守护石(大)", 2000))
drops.Add(new Drop("魔法守护石(大)", 2000))
drops.Add(new Drop("攻击守护石(大)", 2000))
drops.Add(new Drop("魔力守护石(大)", 2000))
drops.Add(new Drop("生命守护石(大)", 2000))
drops.Add(new Drop("道术守护石(中)", 1500))
drops.Add(new Drop("能力守护石(大)", 2000))
drops.Add(new Drop("攻击守护石(中)", 1500))
drops.Add(new Drop("能力守护石(中)", 1500))
drops.Add(new Drop("魔力守护石(中)", 1500))
drops.Add(new Drop("生命守护石(中)", 1500))
drops.Add(new Drop("魔法守护石(中)", 1500))

//火把

//药水
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("太阳水", 40))
drops.Add(new Drop("强效太阳水", 60))
drops.Add(new Drop("万年雪霜", 100))
drops.Add(new Drop("疾风药水(小)", 200))

//矿石

//肉

//工艺材料
drops.Add(new Drop("虫壳", 15))

//卷轴

//宝石

//坐骑

//技能书
drops.Add(new Drop("气功波", 1400))
drops.Add(new Drop("寒冰掌", 2000))

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
drops.Add(new Drop("龙之宝剑", 15, 0, true))

//觉醒

//宠物

//变身

//其它

export default drops;
