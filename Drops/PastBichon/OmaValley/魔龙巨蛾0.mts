import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(7000, 5));

// 武器

// 衣服
drops.Add(new Drop("火龙魔衣(男)", 100))
drops.Add(new Drop("幽灵战衣(男)", 70))
drops.Add(new Drop("幽灵战衣(女)", 70))
drops.Add(new Drop("炎红战衣(男)", 70))
drops.Add(new Drop("炎红战衣(女)", 70))
drops.Add(new Drop("魂魅神衣(男)", 70))
drops.Add(new Drop("魂魅神衣(女)", 70))
drops.Add(new Drop("恶魔长袍(女)", 70))
drops.Add(new Drop("鬼面甲胄(男)", 100))
drops.Add(new Drop("玄天宝衣(男)", 100))
drops.Add(new Drop("玄天宝衣(女)", 100))
drops.Add(new Drop("修罗血衣(男)", 100))
drops.Add(new Drop("修罗血衣(女)", 100))
drops.Add(new Drop("黄龙衣(男)", 100))
drops.Add(new Drop("黄龙衣(女)", 100))
drops.Add(new Drop("火龙魔衣(女)", 100))
drops.Add(new Drop("恶魔长袍(男)", 70))
drops.Add(new Drop("鬼面甲胄(女)", 100))
drops.Add(new Drop("战神盔甲(男)", 70))
drops.Add(new Drop("战神盔甲(女)", 70))

// 头盔

// 项链
drops.Add(new Drop("蓝翡翠项链", 20))
drops.Add(new Drop("竹笛", 20))
drops.Add(new Drop("放大镜", 20))

// 手镯
drops.Add(new Drop("金手镯", 30))
drops.Add(new Drop("辟邪手镯", 30))
drops.Add(new Drop("八极轮", 400))
drops.Add(new Drop("伏魔轮", 400))
drops.Add(new Drop("抗魔轮", 400))

// 戒指
drops.Add(new Drop("珊瑚戒指", 12))
drops.Add(new Drop("降妖除魔戒指", 12))
drops.Add(new Drop("珍珠戒指", 10))
drops.Add(new Drop("蛇眼戒指", 10))
drops.Add(new Drop("黑色水晶戒指", 10))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔法守护石(特大)", 40))
drops.Add(new Drop("道术守护石(大)", 20))
drops.Add(new Drop("魔法守护石(大)", 20))
drops.Add(new Drop("攻击守护石(大)", 20))
drops.Add(new Drop("道术守护石(特大)", 40))
drops.Add(new Drop("攻击守护石(特大)", 40))

// 火把

// 药水
drops.Add(new Drop("疾风药水(小)", 10))
drops.Add(new Drop("魔法药水(中)", 10))
drops.Add(new Drop("攻击药水(中)", 10))
drops.Add(new Drop("道力药水(中)", 10))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("魔法药(大量)", 1))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("龙鳞", 4))
drops.Add(new Drop("疾风珠", 35))

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
