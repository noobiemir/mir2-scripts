import { createDropList, Drop } from "../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(50, 10));

// 武器
drops.Add(new Drop("木剑", 40))
drops.Add(new Drop("虎牙刀", 40))
drops.Add(new Drop("木弓", 40))
drops.Add(new Drop("匕首", 40))
drops.Add(new Drop("乌木剑", 40))
drops.Add(new Drop("革弓", 40))

// 衣服
drops.Add(new Drop("布衣(男)", 40))
drops.Add(new Drop("布衣(女)", 40))

// 头盔

// 项链
drops.Add(new Drop("金项链", 40))
drops.Add(new Drop("传统项链", 40))

// 手镯
drops.Add(new Drop("铁手镯", 40))

// 戒指
drops.Add(new Drop("古铜戒指", 40))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(小量)", 40))
drops.Add(new Drop("魔法药(小量)", 40))

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
