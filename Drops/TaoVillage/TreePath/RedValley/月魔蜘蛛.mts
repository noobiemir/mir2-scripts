import DropList from "../../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(500, 5));

//武器

//衣服

//头盔

//项链

//手镯

//戒指
drops.Add(new Drop("麻痹戒指", 1000000))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(大量)", 20))
drops.Add(new Drop("魔法药(大量)", 20))

//矿石

//肉

//工艺材料

//卷轴
drops.Add(new Drop("回城卷", 40))

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
drops.Add(new Drop("蝙蝠毒", 6, 0, true))

//觉醒

//宠物

//变身

//其它

export default drops;
