import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(700, 10));

//武器

//衣服

//头盔

//项链
drops.Add(new Drop("技巧项链", 50000))

//手镯

//戒指

//护身符

//腰带
drops.Add(new Drop("黄金腰带", 3000))
drops.Add(new Drop("金刚腰带", 3500))
drops.Add(new Drop("钢铁腰带", 1000))

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("疾风药水(小)", 150))
drops.Add(new Drop("道力药水(中)", 150))
drops.Add(new Drop("魔法药水(中)", 150))
drops.Add(new Drop("攻击药水(中)", 150))
drops.Add(new Drop("强效太阳水", 50))
drops.Add(new Drop("太阳水", 60))
drops.Add(new Drop("魔法药(大量)", 20))
drops.Add(new Drop("金疮药(大量)", 20))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("太阳水", 30))
drops.Add(new Drop("强效太阳水", 100))

//矿石

//肉

//工艺材料

//卷轴

//宝石

//坐骑

//技能书
drops.Add(new Drop("嗜血术", 8500))
drops.Add(new Drop("狮子吼", 10000))

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
