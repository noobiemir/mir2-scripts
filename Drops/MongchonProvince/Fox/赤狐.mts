import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2000, 15));

// 武器

// 衣服

// 头盔

// 项链

// 手镯

// 戒指

// 护身符

// 腰带
drops.Add(new Drop("软玉腰带", 420))
drops.Add(new Drop("红玉腰带", 420))
drops.Add(new Drop("钢铁腰带", 420))

// 鞋子
drops.Add(new Drop("赤鳞靴", 440))
drops.Add(new Drop("软玉鞋", 440))
drops.Add(new Drop("红玉鞋", 440))

// 石头

// 火把

// 药水
drops.Add(new Drop("魔法药水(小)", 100))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("强效太阳水", 20))
drops.Add(new Drop("强效太阳水", 20))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("寒冰掌", 200))
drops.Add(new Drop("灭天火", 200))

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
drops.Add(new Drop("狐月神珠", 50))

export default drops;
