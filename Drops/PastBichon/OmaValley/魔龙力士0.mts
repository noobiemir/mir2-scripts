import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(10000, 5));

// 武器
drops.Add(new Drop("SilverBow", 100))
drops.Add(new Drop("双极刀", 100))
drops.Add(new Drop("银蛇", 100))
drops.Add(new Drop("魔杖", 100))
drops.Add(new Drop("炼狱", 100))

// 衣服
drops.Add(new Drop("火龙魔衣(男)", 100))
drops.Add(new Drop("幽灵战衣(男)", 70))
drops.Add(new Drop("幽灵战衣(女)", 70))
drops.Add(new Drop("炎红战衣(男)", 70))
drops.Add(new Drop("炎红战衣(女)", 70))
drops.Add(new Drop("TemperedArmour(男)", 70))
drops.Add(new Drop("TemperedArmour(女)", 70))
drops.Add(new Drop("鬼面甲胄(女)", 100))
drops.Add(new Drop("火龙魔衣(女)", 100))
drops.Add(new Drop("玄天宝衣(男)", 100))
drops.Add(new Drop("玄天宝衣(女)", 100))
drops.Add(new Drop("修罗血衣(男)", 100))
drops.Add(new Drop("修罗血衣(女)", 100))
drops.Add(new Drop("StuddedArmour(男)", 100))
drops.Add(new Drop("StuddedArmour(女)", 100))
drops.Add(new Drop("恶魔长袍(女)", 70))
drops.Add(new Drop("恶魔长袍(男)", 70))
drops.Add(new Drop("鬼面甲胄(男)", 100))
drops.Add(new Drop("战神盔甲(男)", 70))
drops.Add(new Drop("战神盔甲(女)", 70))

// 头盔

// 项链
drops.Add(new Drop("躲避手链", 14))

// 手镯
drops.Add(new Drop("白驼手套", 400))
drops.Add(new Drop("太极轮", 400))
drops.Add(new Drop("魂锁轮", 400))
drops.Add(new Drop("阎罗手套", 100))

// 戒指
drops.Add(new Drop("蛇眼戒指", 10))
drops.Add(new Drop("魅力戒指", 10))
drops.Add(new Drop("道德戒指", 10))
drops.Add(new Drop("力量戒指", 120))
drops.Add(new Drop("紫碧螺", 120))
drops.Add(new Drop("泰坦戒指", 120))
drops.Add(new Drop("心意环", 400))
drops.Add(new Drop("奥玛环", 400))
drops.Add(new Drop("珊瑚戒指", 40))
drops.Add(new Drop("雷霆环", 500))
drops.Add(new Drop("无极环", 500))
drops.Add(new Drop("太极环", 500))
drops.Add(new Drop("鬼刃环", 400))
drops.Add(new Drop("降妖除魔戒指", 50))
drops.Add(new Drop("黑色水晶戒指", 10))
drops.Add(new Drop("珍珠戒指", 10))
drops.Add(new Drop("金戒指", 6))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("疾风药水(小)", 10))
drops.Add(new Drop("道力药水(中)", 10))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药水(中)", 10))
drops.Add(new Drop("攻击药水(中)", 10))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("毒素珠", 35))
drops.Add(new Drop("龙鳞", 2))
drops.Add(new Drop("寒冰珠", 40))

// 卷轴

// 宝石

// 坐骑

// 技能书

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
