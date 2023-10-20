import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

//钱
drops.Add(new Drop(800, 5));

//武器
drops.Add(new Drop("冷月刀", 4000))
drops.Add(new Drop("凝霜", 140))
drops.Add(new Drop("龙牙", 4000))
drops.Add(new Drop("逍遥扇", 4000))
drops.Add(new Drop("怒斩", 4000))
drops.Add(new Drop("LitheBow", 4000))

//衣服
drops.Add(new Drop("LightLeatherArmour(女)", 200))
drops.Add(new Drop("LightLeatherArmour(男)", 200))
drops.Add(new Drop("残影魔衣(女)", 200))
drops.Add(new Drop("残影魔衣(男)", 200))
drops.Add(new Drop("魔法长袍(女)", 200))
drops.Add(new Drop("魔法长袍(男)", 200))
drops.Add(new Drop("灵魂战衣(女)", 200))
drops.Add(new Drop("灵魂战衣(男)", 200))
drops.Add(new Drop("重盔甲(女)", 200))
drops.Add(new Drop("重盔甲(男)", 200))

//头盔

//项链
drops.Add(new Drop("五玄项链", 1900))
drops.Add(new Drop("灵力项链", 900))
drops.Add(new Drop("青雷项链", 900))
drops.Add(new Drop("紫晶项链", 900))
drops.Add(new Drop("斗士项链", 200))

//手镯
drops.Add(new Drop("三眼手镯", 400))
drops.Add(new Drop("天音轮", 500))
drops.Add(new Drop("平凡护腕", 500))
drops.Add(new Drop("道力手镯", 500))
drops.Add(new Drop("五玄手镯", 1900))

//戒指
drops.Add(new Drop("平凡戒指", 500))
drops.Add(new Drop("道力戒指", 500))
drops.Add(new Drop("道德戒指", 100))
drops.Add(new Drop("天音戒指", 500))
drops.Add(new Drop("五玄戒指", 1600))
drops.Add(new Drop("红宝石戒指", 2000))
drops.Add(new Drop("珊瑚戒指", 400))
drops.Add(new Drop("铂金戒指", 2000))
drops.Add(new Drop("降妖除魔戒指", 400))
drops.Add(new Drop("龙之戒指", 2000))

//护身符

//腰带
drops.Add(new Drop("黄金腰带", 1600))
drops.Add(new Drop("兽皮腰带", 100))

//鞋子

//石头
drops.Add(new Drop("道术守护石(特大)", 500))
drops.Add(new Drop("道术守护石(大)", 250))
drops.Add(new Drop("魔法守护石(特大)", 500))
drops.Add(new Drop("魔法守护石(大)", 250))
drops.Add(new Drop("攻击守护石(特大)", 500))
drops.Add(new Drop("攻击守护石(大)", 250))

//火把

//药水
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("魔法药(大量)", 25))
drops.Add(new Drop("太阳水", 50))
drops.Add(new Drop("强效太阳水", 100))
drops.Add(new Drop("金疮药(大量)", 25))

//矿石

//肉

//工艺材料

//卷轴
drops.Add(new Drop("随机传送卷", 10))
drops.Add(new Drop("回城卷", 50))
drops.Add(new Drop("修复油", 170))
drops.Add(new Drop("战神油", 350))

//宝石

//坐骑

//技能书
drops.Add(new Drop("魔法盾", 150))
drops.Add(new Drop("半月弯刀", 150))
drops.Add(new Drop("群体治疗术", 190))
drops.Add(new Drop("寒冰掌", 200))

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
drops.Add(new Drop("尸灵花", 7, 0, true))

//觉醒

//宠物

//变身

//其它

export default drops;
