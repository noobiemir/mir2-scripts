import DropList from "../../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(1500, 5));

// 武器
drops.Add(new Drop("逍遥扇", 6000))
drops.Add(new Drop("冷月刀", 6000))
drops.Add(new Drop("怒斩", 6000))
drops.Add(new Drop("龙牙", 6000))
drops.Add(new Drop("LitheBow", 6000))

// 衣服
drops.Add(new Drop("StuddedArmour(女)", 3000))
drops.Add(new Drop("StuddedArmour(男)", 3000))
drops.Add(new Drop("修罗血衣(女)", 3000))
drops.Add(new Drop("修罗血衣(男)", 3000))
drops.Add(new Drop("玄天宝衣(女)", 3000))
drops.Add(new Drop("火龙魔衣(女)", 3000))
drops.Add(new Drop("火龙魔衣(男)", 3000))
drops.Add(new Drop("鬼面甲胄(女)", 3000))
drops.Add(new Drop("鬼面甲胄(男)", 3000))
drops.Add(new Drop("玄天宝衣(男)", 3000))

// 头盔
drops.Add(new Drop("英雄头盔", 4000))
drops.Add(new Drop("通天冠", 4000))
drops.Add(new Drop("贤者帽", 4000))
drops.Add(new Drop("修罗头盔", 4000))

// 项链
drops.Add(new Drop("镇魂项链", 5000))
drops.Add(new Drop("水波颈饰", 5000))
drops.Add(new Drop("金刚铃项链", 5000))

// 手镯
drops.Add(new Drop("八极轮", 1900))
drops.Add(new Drop("精钢手镯", 800))
drops.Add(new Drop("伏魔轮", 1900))
drops.Add(new Drop("白驼手套", 3500))
drops.Add(new Drop("魂锁轮", 3500))
drops.Add(new Drop("太极轮", 3500))
drops.Add(new Drop("抗魔轮", 1900))

// 戒指
drops.Add(new Drop("雷霆环", 3000))
drops.Add(new Drop("鬼刃环", 1500))
drops.Add(new Drop("心意环", 1500))
drops.Add(new Drop("奥玛环", 1500))
drops.Add(new Drop("太极环", 3000))
drops.Add(new Drop("无极环", 3000))

// 护身符

// 腰带
drops.Add(new Drop("金刚腰带", 3000))
drops.Add(new Drop("黄金腰带", 1000))

// 鞋子
drops.Add(new Drop("避魂靴", 500))
drops.Add(new Drop("赤鳞靴", 2000))
drops.Add(new Drop("龙靴", 1500))

// 石头

// 火把

// 药水
drops.Add(new Drop("魔法药(特大)", 10))
drops.Add(new Drop("金疮药(特大)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("黑线", 10))
drops.Add(new Drop("蜘蛛网", 10))

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
