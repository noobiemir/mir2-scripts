import DropList from "../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(2000, 2));

//武器
drops.Add(new Drop("铁剑", 18))
drops.Add(new Drop("短剑", 22))
drops.Add(new Drop("BoneBow", 18))
drops.Add(new Drop("ShortBow", 14))
drops.Add(new Drop("青铜剑", 14))
drops.Add(new Drop("EbonyBow", 10))
drops.Add(new Drop("暴虎刀", 14))
drops.Add(new Drop("匕首", 9))
drops.Add(new Drop("WoodenBow", 6))
drops.Add(new Drop("虎牙刀", 6))
drops.Add(new Drop("木剑", 6))
drops.Add(new Drop("乌木剑", 10))

//衣服
drops.Add(new Drop("轻型盔甲(男)", 30))
drops.Add(new Drop("布衣(男)", 10))
drops.Add(new Drop("布衣(女)", 10))
drops.Add(new Drop("轻型盔甲(女)", 30))

//头盔
drops.Add(new Drop("魔法头盔", 20))
drops.Add(new Drop("青铜头盔", 15))

//项链
drops.Add(new Drop("黑檀项链", 20))
drops.Add(new Drop("黄色水晶项链", 20))
drops.Add(new Drop("黑色水晶项链", 20))
drops.Add(new Drop("金项链", 6))
drops.Add(new Drop("传统项链", 8))

//手镯
drops.Add(new Drop("铁手镯", 8))
drops.Add(new Drop("小手镯", 30))
drops.Add(new Drop("皮制手套", 30))
drops.Add(new Drop("钢手镯", 40))

//戒指
drops.Add(new Drop("古铜戒指", 8))
drops.Add(new Drop("牛角戒指", 11))
drops.Add(new Drop("六角戒指", 11))
drops.Add(new Drop("玻璃戒指", 11))
drops.Add(new Drop("蓝色水晶戒指", 20))

//护身符

//腰带

//鞋子

//石头

//火把

//药水
drops.Add(new Drop("金疮药(小量)", 6))
drops.Add(new Drop("魔法药(小量)", 6))
drops.Add(new Drop("金疮药(小量)", 6))
drops.Add(new Drop("太阳水", 16))
drops.Add(new Drop("金疮药(小量)", 6))
drops.Add(new Drop("魔法药(小量)", 6))
drops.Add(new Drop("魔法药(小量)", 6))

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
