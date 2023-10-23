import { createDropList, Drop } from "../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(100, 20));

// 武器
drops.Add(new Drop("暴虎刀", 140))
drops.Add(new Drop("木剑", 60))
drops.Add(new Drop("虎牙刀", 60))
drops.Add(new Drop("木弓", 60))
drops.Add(new Drop("匕首", 90))
drops.Add(new Drop("乌木剑", 100))
drops.Add(new Drop("革弓", 100))
drops.Add(new Drop("青铜剑", 140))
drops.Add(new Drop("铁弓", 140))
drops.Add(new Drop("铁剑", 180))
drops.Add(new Drop("弩弓", 180))
drops.Add(new Drop("短剑", 220))

// 衣服
drops.Add(new Drop("布衣(女)", 100))
drops.Add(new Drop("轻型盔甲(女)", 300))
drops.Add(new Drop("轻型盔甲(男)", 300))
drops.Add(new Drop("布衣(男)", 100))

// 头盔
drops.Add(new Drop("魔法头盔", 200))
drops.Add(new Drop("青铜头盔", 150))

// 项链
drops.Add(new Drop("金项链", 60))
drops.Add(new Drop("传统项链", 80))
drops.Add(new Drop("黑色水晶项链", 200))
drops.Add(new Drop("黑檀项链", 200))
drops.Add(new Drop("黄色水晶项链", 200))

// 手镯
drops.Add(new Drop("铁手镯", 80))
drops.Add(new Drop("小手镯", 300))
drops.Add(new Drop("皮制手套", 300))
drops.Add(new Drop("钢手镯", 400))

// 戒指
drops.Add(new Drop("玻璃戒指", 110))
drops.Add(new Drop("古铜戒指", 80))
drops.Add(new Drop("牛角戒指", 110))
drops.Add(new Drop("六角戒指", 110))
drops.Add(new Drop("蓝色水晶戒指", 200))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(小量)", 60))
drops.Add(new Drop("太阳水", 160))
drops.Add(new Drop("魔法药(小量)", 60))

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
