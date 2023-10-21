import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(25000, 1));

// 武器
drops.Add(new Drop("冷月刀", 140))
drops.Add(new Drop("炼狱", 35))
drops.Add(new Drop("魔杖", 35))
drops.Add(new Drop("银蛇", 35))
drops.Add(new Drop("双极刀", 35))
drops.Add(new Drop("SilverBow", 35))
drops.Add(new Drop("井中月", 70))
drops.Add(new Drop("龙牙", 140))
drops.Add(new Drop("怒斩", 140))
drops.Add(new Drop("逍遥扇", 140))
drops.Add(new Drop("FiendBow", 700))
drops.Add(new Drop("暗之屠龙", 300))
drops.Add(new Drop("暗之噬魂", 300))
drops.Add(new Drop("暗之龙纹", 300))
drops.Add(new Drop("暗之修罗刀", 300))
drops.Add(new Drop("CursedMaleficBow", 300))
drops.Add(new Drop("屠龙", 700))
drops.Add(new Drop("噬魂法杖", 700))
drops.Add(new Drop("龙纹剑", 700))
drops.Add(new Drop("修罗刀", 700))
drops.Add(new Drop("LitheBow", 140))

// 衣服
drops.Add(new Drop("恶魔长袍(男)", 6))
drops.Add(new Drop("战神盔甲(女)", 6))
drops.Add(new Drop("火龙魔衣(男)", 30))
drops.Add(new Drop("恶魔长袍(女)", 6))
drops.Add(new Drop("幽灵战衣(女)", 6))
drops.Add(new Drop("StuddedArmour(女)", 30))
drops.Add(new Drop("StuddedArmour(男)", 30))
drops.Add(new Drop("幽灵战衣(男)", 6))
drops.Add(new Drop("修罗血衣(男)", 30))
drops.Add(new Drop("玄天宝衣(女)", 30))
drops.Add(new Drop("玄天宝衣(男)", 30))
drops.Add(new Drop("修罗血衣(女)", 30))
drops.Add(new Drop("鬼面甲胄(女)", 30))
drops.Add(new Drop("鬼面甲胄(男)", 30))
drops.Add(new Drop("LightLeatherArmour(女)", 6))
drops.Add(new Drop("LightLeatherArmour(男)", 6))
drops.Add(new Drop("炎红战衣(女)", 6))
drops.Add(new Drop("炎红战衣(男)", 6))
drops.Add(new Drop("火龙魔衣(女)", 30))
drops.Add(new Drop("战神盔甲(男)", 6))

// 头盔
drops.Add(new Drop("道士头盔", 5))
drops.Add(new Drop("勇士头盔", 50))
drops.Add(new Drop("黑铁头盔", 55))
drops.Add(new Drop("英雄头盔", 85))
drops.Add(new Drop("通天冠", 85))
drops.Add(new Drop("贤者帽", 85))
drops.Add(new Drop("修罗头盔", 85))
drops.Add(new Drop("骷髅头盔", 5))

// 项链
drops.Add(new Drop("技巧项链", 1000))
drops.Add(new Drop("狂风项链", 75))
drops.Add(new Drop("灵魂项链", 55))
drops.Add(new Drop("恶魔铃铛", 55))
drops.Add(new Drop("绿色项链", 55))
drops.Add(new Drop("生命项链", 30))
drops.Add(new Drop("天珠项链", 30))
drops.Add(new Drop("青雷项链", 25))
drops.Add(new Drop("灵力项链", 25))
drops.Add(new Drop("紫晶项链", 25))

// 手镯
drops.Add(new Drop("幽灵手套", 5))
drops.Add(new Drop("阎罗手套", 10))
drops.Add(new Drop("骑士手镯", 65))
drops.Add(new Drop("龙之手镯", 65))
drops.Add(new Drop("心灵手镯", 65))

// 戒指
drops.Add(new Drop("泰坦戒指", 55))
drops.Add(new Drop("紫碧螺", 55))
drops.Add(new Drop("力量戒指", 55))
drops.Add(new Drop("铂金戒指", 30))
drops.Add(new Drop("红宝石戒指", 30))
drops.Add(new Drop("龙之戒指", 30))
drops.Add(new Drop("狂风戒指", 15))
drops.Add(new Drop("珊瑚戒指", 5))
drops.Add(new Drop("降妖除魔戒指", 5))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("道力药水(中)", 100))
drops.Add(new Drop("魔法药水(中)", 100))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("攻击药水(中)", 100))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("太阳水", 1))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 5))

// 宝石
drops.Add(new Drop("酷寒神珠", 600))
drops.Add(new Drop("中毒神珠", 500))
drops.Add(new Drop("强化神珠", 125))
drops.Add(new Drop("守护神珠", 300))
drops.Add(new Drop("制魔神珠", 300))
drops.Add(new Drop("仙界神珠", 200))
drops.Add(new Drop("勇猛神珠", 300))
drops.Add(new Drop("魔性神珠", 350))

// 坐骑

// 技能书
drops.Add(new Drop("迷魂术", 100))
drops.Add(new Drop("嗜血术", 100))
drops.Add(new Drop("吸气", 300))
drops.Add(new Drop("召唤月灵", 400))
drops.Add(new Drop("火龙气焰", 400))
drops.Add(new Drop("攻破斩", 100))
drops.Add(new Drop("护身气幕", 400))
drops.Add(new Drop("烈火身", 400))
drops.Add(new Drop("轻身步", 800))
drops.Add(new Drop("流星火雨", 800))
drops.Add(new Drop("捕绳剑", 100))
drops.Add(new Drop("毒云", 800))
drops.Add(new Drop("诅咒术", 400))
drops.Add(new Drop("月影术", 100))
drops.Add(new Drop("天霜冰环", 800))
drops.Add(new Drop("狮子吼", 100))
drops.Add(new Drop("净化术", 50))
drops.Add(new Drop("双龙斩", 50))
drops.Add(new Drop("气功波", 30))
drops.Add(new Drop("无极真气", 30))
drops.Add(new Drop("捕缚术", 30))
drops.Add(new Drop("火龙术", 30))
drops.Add(new Drop("圆月弯刀", 30))
drops.Add(new Drop("拔刀术", 275))
drops.Add(new Drop("猛毒剑气", 100))
drops.Add(new Drop("烈火剑法", 25))
drops.Add(new Drop("召唤神兽", 25))
drops.Add(new Drop("冰咆哮", 25))
drops.Add(new Drop("剑气爆", 800))
drops.Add(new Drop("分身术", 100))

// 杂物

// 缰绳

// 铃铛

// 马鞍

// 丝带

// 面具

// 食物

// 钩

// 浮标

// 饵

// 探鱼器

// 鱼线轮

// 鱼

// 任务

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
