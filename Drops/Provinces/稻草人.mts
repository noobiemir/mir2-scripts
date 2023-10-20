import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(50, 10));

//武器
drops.Add(new Drop("木剑", 50))
drops.Add(new Drop("虎牙刀", 50))
drops.Add(new Drop("WoodenBow", 50))
drops.Add(new Drop("匕首", 100))
drops.Add(new Drop("乌木剑", 100))
drops.Add(new Drop("EbonyBow", 100))

//衣服
drops.Add(new Drop("布衣(女)", 100))
drops.Add(new Drop("布衣(男)", 100))

//头盔

//项链
drops.Add(new Drop("传统项链", 100))
drops.Add(new Drop("金项链", 80))

//手镯

//戒指
drops.Add(new Drop("古铜戒指", 200))
drops.Add(new Drop("牛角戒指", 200))
drops.Add(new Drop("玻璃戒指", 200))
drops.Add(new Drop("六角戒指", 200))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("金疮药(小量)", 40))
drops.Add(new Drop("太阳水", 400))
drops.Add(new Drop("魔法药(小量)", 60))

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
drops.Add(new Drop("姜茶", 5, 0, true))

//觉醒

//宠物

//变身

//其它

export default drops;
