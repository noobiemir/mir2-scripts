import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(700, 10));

// 武器

// 衣服

// 头盔

// 项链

// 手镯
drops.Add(new Drop("玉女天使", 30000))
drops.Add(new Drop("曜火虹轮", 30000))
drops.Add(new Drop("铁魔双轮", 30000))

// 戒指
drops.Add(new Drop("血玉环", 35000))
drops.Add(new Drop("五行连环", 33000))
drops.Add(new Drop("盟约戒指", 35000))

// 护身符

// 腰带

// 鞋子
drops.Add(new Drop("赤鳞靴", 10000))
drops.Add(new Drop("龙靴", 9000))

// 石头
drops.Add(new Drop("道术守护石(特大)", 6500))
drops.Add(new Drop("攻击守护石(大)", 3500))
drops.Add(new Drop("攻击守护石(特大)", 6500))
drops.Add(new Drop("能力守护石(特大)", 6500))
drops.Add(new Drop("魔力守护石(特大)", 4000))
drops.Add(new Drop("生命守护石(特大)", 4000))
drops.Add(new Drop("道术守护石(大)", 3500))
drops.Add(new Drop("魔法守护石(大)", 3500))
drops.Add(new Drop("魔法守护石(特大)", 6500))
drops.Add(new Drop("能力守护石(大)", 3500))
drops.Add(new Drop("生命守护石(大)", 2500))
drops.Add(new Drop("魔力守护石(大)", 2500))

// 火把

// 药水
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 20))
drops.Add(new Drop("魔法药(大量)", 20))
drops.Add(new Drop("太阳水", 30))
drops.Add(new Drop("强效太阳水", 50))
drops.Add(new Drop("强效太阳水", 100))
drops.Add(new Drop("攻击药水(中)", 150))
drops.Add(new Drop("魔法药水(中)", 150))
drops.Add(new Drop("道力药水(中)", 150))
drops.Add(new Drop("疾风药水(小)", 150))
drops.Add(new Drop("太阳水", 60))

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
