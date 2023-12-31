import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(5500, 10));

// 武器
drops.Add(new Drop("龙纹剑", 8000))
drops.Add(new Drop("龙牙", 3500))
drops.Add(new Drop("怒斩", 3500))
drops.Add(new Drop("逍遥扇", 3500))
drops.Add(new Drop("冷月刀", 3500))
drops.Add(new Drop("霸王弓", 3500))
drops.Add(new Drop("屠龙", 8000))
drops.Add(new Drop("噬魂法杖", 8000))
drops.Add(new Drop("暗之修罗刀", 8000))
drops.Add(new Drop("黄龙弓", 8000))

// 衣服

// 头盔
drops.Add(new Drop("黑铁头盔", 3000))
drops.Add(new Drop("钢铁头盔", 400))

// 项链

// 手镯

// 戒指

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 50))
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("魔法药(大量)", 25))
drops.Add(new Drop("金疮药(大量)", 25))
drops.Add(new Drop("魔法药(大量)", 25))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("万年雪霜", 100))
drops.Add(new Drop("金疮药(大量)", 25))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石
drops.Add(new Drop("仙界宝玉", 1000))
drops.Add(new Drop("魔性宝玉", 1000))
drops.Add(new Drop("强化神珠", 2000))
drops.Add(new Drop("疾风宝玉", 10000))
drops.Add(new Drop("勇猛宝玉", 1000))

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
