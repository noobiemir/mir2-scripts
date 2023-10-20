import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(2500, 20));

//武器
drops.Add(new Drop("炼狱", 600))
drops.Add(new Drop("银蛇", 600))
drops.Add(new Drop("魔杖", 600))
drops.Add(new Drop("双极刀", 600))

//衣服

//头盔

//项链
drops.Add(new Drop("镇魂项链", 640))
drops.Add(new Drop("红玉项链", 640))
drops.Add(new Drop("五玄项链", 640))

//手镯
drops.Add(new Drop("雪玉手镯", 540))

//戒指
drops.Add(new Drop("红玉环", 560))
drops.Add(new Drop("天音戒指", 560))

//护身符

//腰带
drops.Add(new Drop("青铜腰带", 500))
drops.Add(new Drop("钢铁腰带", 500))

//鞋子
drops.Add(new Drop("避魂靴", 380))
drops.Add(new Drop("龙靴", 580))

//石头

//火把

//药水
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("疾风药水(小)", 100))
drops.Add(new Drop("体力药水(小)", 100))
drops.Add(new Drop("攻击药水(小)", 100))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("强效太阳水", 20))

//矿石

//肉

//工艺材料

//卷轴

//宝石

//坐骑

//技能书
drops.Add(new Drop("月影术", 200))
drops.Add(new Drop("狮子吼", 600))
drops.Add(new Drop("双龙斩", 200))
drops.Add(new Drop("吸气", 800))
drops.Add(new Drop("护身气幕", 400))
drops.Add(new Drop("攻破斩", 800))
drops.Add(new Drop("捕绳剑", 600))

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
drops.Add(new Drop("狐月神珠", 100))

export default drops;
