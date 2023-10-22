import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(200, 10));

// 武器
drops.Add(new Drop("海魂", 160))
drops.Add(new Drop("凌风", 200))
drops.Add(new Drop("杉木铁弓", 160))
drops.Add(new Drop("音速刀", 160))
drops.Add(new Drop("半月", 160))
drops.Add(new Drop("八荒", 160))
drops.Add(new Drop("青铜斧", 150))
drops.Add(new Drop("钢斧", 150))
drops.Add(new Drop("弩弓", 90))
drops.Add(new Drop("铁剑", 90))
drops.Add(new Drop("暴虎刀", 60))
drops.Add(new Drop("铁弓", 60))
drops.Add(new Drop("青铜剑", 60))
drops.Add(new Drop("短剑", 100))

// 衣服
drops.Add(new Drop("轻型盔甲(女)", 200))
drops.Add(new Drop("轻型盔甲(男)", 200))

// 头盔
drops.Add(new Drop("魔法头盔", 150))
drops.Add(new Drop("青铜头盔", 100))

// 项链
drops.Add(new Drop("灯笼项链", 200))
drops.Add(new Drop("琥珀项链", 90))
drops.Add(new Drop("魔鬼项链", 90))
drops.Add(new Drop("凤凰明珠", 90))
drops.Add(new Drop("黑檀项链", 80))
drops.Add(new Drop("黑色水晶项链", 80))
drops.Add(new Drop("黄色水晶项链", 80))

// 手镯
drops.Add(new Drop("小手镯", 80))
drops.Add(new Drop("银手镯", 150))
drops.Add(new Drop("大手镯", 150))
drops.Add(new Drop("魔法手镯", 400))
drops.Add(new Drop("坚固手套", 500))

// 戒指
drops.Add(new Drop("珍珠戒指", 300))
drops.Add(new Drop("蛇眼戒指", 300))
drops.Add(new Drop("黑色水晶戒指", 300))
drops.Add(new Drop("玻璃戒指", 80))
drops.Add(new Drop("蓝色水晶戒指", 200))
drops.Add(new Drop("牛角戒指", 80))
drops.Add(new Drop("古铜戒指", 60))
drops.Add(new Drop("六角戒指", 80))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("生命守护石(小)", 1000))
drops.Add(new Drop("魔力守护石(小)", 1000))
drops.Add(new Drop("攻击守护石(小)", 1000))
drops.Add(new Drop("魔法守护石(小)", 1000))
drops.Add(new Drop("道术守护石(小)", 1000))

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 200))
drops.Add(new Drop("魔法药(中量)", 200))
drops.Add(new Drop("太阳水", 300))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("骨头", 25))
drops.Add(new Drop("大骨头", 50))

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
drops.Add(new Drop("AncientScyther", 100, 0, true))
drops.Add(new Drop("骷髅头骨", 5, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
