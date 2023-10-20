import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(600, 10));

//武器

//衣服

//头盔
drops.Add(new Drop("道士头盔", 100))
drops.Add(new Drop("骷髅头盔", 120))

//项链
drops.Add(new Drop("放大镜", 80))
drops.Add(new Drop("竹笛", 80))
drops.Add(new Drop("蓝翡翠项链", 80))

//手镯
drops.Add(new Drop("死神手套", 60))
drops.Add(new Drop("精钢手镯", 600))
drops.Add(new Drop("魔鬼手镯", 400))
drops.Add(new Drop("雪玉手镯", 400))
drops.Add(new Drop("思贝尔手镯", 300))
drops.Add(new Drop("坚固手套", 40))
drops.Add(new Drop("金手镯", 60))
drops.Add(new Drop("魔法手镯", 300))

//戒指
drops.Add(new Drop("雪玉戒指", 500))
drops.Add(new Drop("屠魔戒指", 500))
drops.Add(new Drop("虎威戒指", 500))
drops.Add(new Drop("降妖除魔戒指", 100))
drops.Add(new Drop("骷髅戒指", 60))
drops.Add(new Drop("金戒指", 80))
drops.Add(new Drop("珊瑚戒指", 110))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("强效太阳水", 60))
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("魔法药(大量)", 30))
drops.Add(new Drop("金疮药(大量)", 30))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(中量)", 10))

//矿石

//肉

//工艺材料
drops.Add(new Drop("避魂珠", 400))
drops.Add(new Drop("准确珠", 400))
drops.Add(new Drop("大骨头", 20))
drops.Add(new Drop("骨头", 10))

//卷轴
drops.Add(new Drop("回城卷", 200))

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
