import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(100, 10));

//武器

//衣服

//头盔

//项链

//手镯

//戒指

//护身符

//腰带

//鞋子

//石头

//火把

//药水

//矿石

//肉

//工艺材料
drops.Add(new Drop("蜘蛛牙", 3))
drops.Add(new Drop("蜘蛛网", 10))

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
drops.Add(new Drop("毒药袋", 3, 0, true))
drops.Add(new Drop("网", 3, 0, true))
drops.Add(new Drop("SpiderLeg", 7, 0, true))

//觉醒

//宠物

//变身

//其它

export default drops;
