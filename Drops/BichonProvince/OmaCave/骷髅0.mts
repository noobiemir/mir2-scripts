import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2000, 1));

// 武器
drops.Add(new Drop("凌风", 20))
drops.Add(new Drop("杉木铁弓", 16))
drops.Add(new Drop("半月", 16))
drops.Add(new Drop("海魂", 16))
drops.Add(new Drop("八荒", 16))
drops.Add(new Drop("钢斧", 15))
drops.Add(new Drop("青铜斧", 15))
drops.Add(new Drop("音速刀", 16))
drops.Add(new Drop("弩弓", 9))
drops.Add(new Drop("铁剑", 9))
drops.Add(new Drop("暴虎刀", 6))
drops.Add(new Drop("铁弓", 6))
drops.Add(new Drop("短剑", 10))
drops.Add(new Drop("青铜剑", 6))

// 衣服
drops.Add(new Drop("轻型盔甲(男)", 20))
drops.Add(new Drop("轻型盔甲(女)", 20))

// 头盔
drops.Add(new Drop("青铜头盔", 10))
drops.Add(new Drop("魔法头盔", 15))

// 项链
drops.Add(new Drop("凤凰明珠", 15))
drops.Add(new Drop("黑色水晶项链", 8))
drops.Add(new Drop("黑檀项链", 8))
drops.Add(new Drop("黄色水晶项链", 8))
drops.Add(new Drop("魔鬼项链", 15))
drops.Add(new Drop("琥珀项链", 15))
drops.Add(new Drop("灯笼项链", 20))

// 手镯
drops.Add(new Drop("坚固手套", 50))
drops.Add(new Drop("银手镯", 15))
drops.Add(new Drop("魔法手镯", 40))
drops.Add(new Drop("钢手镯", 15))
drops.Add(new Drop("小手镯", 8))
drops.Add(new Drop("大手镯", 15))

// 戒指
drops.Add(new Drop("珍珠戒指", 30))
drops.Add(new Drop("古铜戒指", 5))
drops.Add(new Drop("牛角戒指", 8))
drops.Add(new Drop("六角戒指", 8))
drops.Add(new Drop("玻璃戒指", 8))
drops.Add(new Drop("蓝色水晶戒指", 20))
drops.Add(new Drop("黑色水晶戒指", 30))
drops.Add(new Drop("蛇眼戒指", 30))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔力守护石(中)", 140))
drops.Add(new Drop("生命守护石(中)", 140))
drops.Add(new Drop("魔力守护石(小)", 100))
drops.Add(new Drop("生命守护石(小)", 100))

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 20))
drops.Add(new Drop("太阳水", 30))
drops.Add(new Drop("金疮药(中量)", 20))
drops.Add(new Drop("魔法药(中量)", 20))
drops.Add(new Drop("金疮药(中量)", 20))
drops.Add(new Drop("魔法药(中量)", 20))
drops.Add(new Drop("魔法药(中量)", 20))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("大骨头", 5))
drops.Add(new Drop("骨头", 2))

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
drops.Add(new Drop("骷髅骨", 5, 0, true))
drops.Add(new Drop("远古镰刀", 200, 0, true))
drops.Add(new Drop("骷髅头骨", 5, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
