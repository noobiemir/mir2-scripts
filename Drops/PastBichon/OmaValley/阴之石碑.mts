import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(1000, 5));

// 武器
drops.Add(new Drop("霸王弓", 2000))
drops.Add(new Drop("冷月刀", 2000))
drops.Add(new Drop("逍遥扇", 2000))
drops.Add(new Drop("怒斩", 2000))
drops.Add(new Drop("龙牙", 2000))

// 衣服
drops.Add(new Drop("恶魔长袍(男)", 700))
drops.Add(new Drop("炎红战衣(男)", 700))
drops.Add(new Drop("幽灵战衣(女)", 700))
drops.Add(new Drop("幽灵战衣(男)", 700))
drops.Add(new Drop("恶魔长袍(女)", 700))
drops.Add(new Drop("魂魅神衣(女)", 700))
drops.Add(new Drop("战神盔甲(女)", 700))
drops.Add(new Drop("战神盔甲(男)", 700))
drops.Add(new Drop("炎红战衣(女)", 700))
drops.Add(new Drop("魂魅神衣(男)", 700))

// 头盔

// 项链
drops.Add(new Drop("竹笛", 140))
drops.Add(new Drop("放大镜", 140))
drops.Add(new Drop("蓝翡翠项链", 140))
drops.Add(new Drop("幽灵项链", 500))
drops.Add(new Drop("天珠项链", 500))
drops.Add(new Drop("生命项链", 500))

// 手镯
drops.Add(new Drop("金手镯", 300))
drops.Add(new Drop("辟邪手镯", 700))

// 戒指

// 护身符

// 腰带
drops.Add(new Drop("金刚腰带", 1000))

// 鞋子

// 石头
drops.Add(new Drop("攻击守护石(大)", 600))
drops.Add(new Drop("魔法守护石(大)", 600))
drops.Add(new Drop("道术守护石(大)", 600))
drops.Add(new Drop("攻击守护石(特大)", 1000))
drops.Add(new Drop("魔法守护石(特大)", 1000))
drops.Add(new Drop("道术守护石(特大)", 1000))
drops.Add(new Drop("攻击守护石", 3000))
drops.Add(new Drop("道术守护石", 3000))
drops.Add(new Drop("魔法守护石", 3000))

// 火把

// 药水
drops.Add(new Drop("疾风药水(小)", 100))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(特大)", 20))
drops.Add(new Drop("魔法药(特大)", 20))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("道力药水(中)", 100))
drops.Add(new Drop("攻击药水(中)", 100))
drops.Add(new Drop("魔法药水(中)", 100))
drops.Add(new Drop("魔法药(大量)", 10))

// 矿石

// 肉

// 工艺材料

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
