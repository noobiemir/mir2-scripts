import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(500, 5));

// 武器

// 衣服
drops.Add(new Drop("鬼面甲胄(女)", 1000))
drops.Add(new Drop("火龙魔衣(女)", 1000))
drops.Add(new Drop("玄天宝衣(男)", 1000))
drops.Add(new Drop("玄天宝衣(女)", 1000))
drops.Add(new Drop("修罗血衣(男)", 1000))
drops.Add(new Drop("修罗血衣(女)", 1000))
drops.Add(new Drop("黄龙衣(男)", 1000))
drops.Add(new Drop("鬼面甲胄(男)", 1000))
drops.Add(new Drop("黄龙衣(女)", 1000))
drops.Add(new Drop("火龙魔衣(男)", 1000))

// 头盔

// 项链
drops.Add(new Drop("天珠项链", 1300))
drops.Add(new Drop("生命项链", 1300))
drops.Add(new Drop("幽灵项链", 1300))
drops.Add(new Drop("放大镜", 200))
drops.Add(new Drop("竹笛", 200))
drops.Add(new Drop("蓝翡翠项链", 200))
drops.Add(new Drop("躲避手链", 140))

// 手镯
drops.Add(new Drop("抗魔轮", 4000))
drops.Add(new Drop("伏魔轮", 4000))
drops.Add(new Drop("八极轮", 4000))
drops.Add(new Drop("三眼手镯", 1000))
drops.Add(new Drop("思贝尔手镯", 1000))
drops.Add(new Drop("幽灵手套", 700))

// 戒指
drops.Add(new Drop("铂金戒指", 1000))
drops.Add(new Drop("奥玛环", 5000))
drops.Add(new Drop("鬼刃环", 5000))
drops.Add(new Drop("心意环", 5000))
drops.Add(new Drop("魅力戒指", 100))
drops.Add(new Drop("无极环", 7000))
drops.Add(new Drop("红宝石戒指", 1000))
drops.Add(new Drop("太极环", 7000))
drops.Add(new Drop("雷霆环", 7000))
drops.Add(new Drop("龙之戒指", 1000))
drops.Add(new Drop("珊瑚戒指", 120))
drops.Add(new Drop("降妖除魔戒指", 120))
drops.Add(new Drop("蛇眼戒指", 100))
drops.Add(new Drop("黑色水晶戒指", 100))
drops.Add(new Drop("珍珠戒指", 100))
drops.Add(new Drop("金戒指", 60))
drops.Add(new Drop("道德戒指", 100))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("道术守护石(特大)", 250))
drops.Add(new Drop("魔法守护石(特大)", 250))
drops.Add(new Drop("攻击守护石(特大)", 250))
drops.Add(new Drop("能力守护石(大)", 80))
drops.Add(new Drop("魔力守护石(大)", 80))
drops.Add(new Drop("生命守护石(大)", 80))

// 火把

// 药水
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(特大)", 20))
drops.Add(new Drop("魔法药(特大)", 20))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("道力药水(中)", 100))
drops.Add(new Drop("攻击药水(中)", 100))
drops.Add(new Drop("魔法药水(中)", 100))
drops.Add(new Drop("疾风药水(小)", 100))
drops.Add(new Drop("金疮药(大量)", 10))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("避水珠", 350))

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("净化术", 200))

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
