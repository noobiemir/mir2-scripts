import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(6000, 1));

// 武器

// 衣服

// 头盔
drops.Add(new Drop("骷髅头盔", 12))
drops.Add(new Drop("道士头盔", 10))

// 项链
drops.Add(new Drop("竹笛", 8))
drops.Add(new Drop("蓝翡翠项链", 8))
drops.Add(new Drop("放大镜", 8))

// 手镯
drops.Add(new Drop("死神手套", 6))
drops.Add(new Drop("精钢手镯", 60))
drops.Add(new Drop("魔鬼手镯", 40))
drops.Add(new Drop("雪玉手镯", 40))
drops.Add(new Drop("思贝尔手镯", 30))
drops.Add(new Drop("坚固手套", 4))
drops.Add(new Drop("金手镯", 6))
drops.Add(new Drop("魔法手镯", 30))

// 戒指
drops.Add(new Drop("雪玉戒指", 50))
drops.Add(new Drop("屠魔戒指", 50))
drops.Add(new Drop("降妖除魔戒指", 10))
drops.Add(new Drop("骷髅戒指", 6))
drops.Add(new Drop("金戒指", 8))
drops.Add(new Drop("珊瑚戒指", 11))
drops.Add(new Drop("虎威戒指", 50))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 6))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("魔法药(大量)", 3))
drops.Add(new Drop("金疮药(大量)", 3))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("避魂珠", 40))
drops.Add(new Drop("准确珠", 40))
drops.Add(new Drop("大骨头", 2))
drops.Add(new Drop("骨头", 1))

// 卷轴
drops.Add(new Drop("回城卷", 20))

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
drops.Add(new Drop("雪白的骷髅", 10, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
