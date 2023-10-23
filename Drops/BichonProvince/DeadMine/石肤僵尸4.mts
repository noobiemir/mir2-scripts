import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(175, 5));

// 武器
drops.Add(new Drop("墨铁刀", 350))
drops.Add(new Drop("绝命弓", 350))
drops.Add(new Drop("偃月", 350))
drops.Add(new Drop("斩马刀", 350))
drops.Add(new Drop("凌风", 350))
drops.Add(new Drop("钢斧", 300))
drops.Add(new Drop("杉木铁弓", 250))
drops.Add(new Drop("音速刀", 250))
drops.Add(new Drop("半月", 250))
drops.Add(new Drop("降魔", 350))
drops.Add(new Drop("八荒", 250))
drops.Add(new Drop("青铜斧", 150))
drops.Add(new Drop("弩弓", 150))
drops.Add(new Drop("铁剑", 150))
drops.Add(new Drop("短剑", 150))
drops.Add(new Drop("暴虎刀", 150))
drops.Add(new Drop("铁弓", 150))
drops.Add(new Drop("海魂", 250))
drops.Add(new Drop("青铜剑", 150))

// 衣服
drops.Add(new Drop("轻型盔甲(男)", 250))
drops.Add(new Drop("轻型盔甲(女)", 250))

// 头盔
drops.Add(new Drop("魔法头盔", 175))
drops.Add(new Drop("青铜头盔", 150))

// 项链
drops.Add(new Drop("灯笼项链", 500))
drops.Add(new Drop("白色虎齿项链", 500))
drops.Add(new Drop("铂金项链", 500))
drops.Add(new Drop("魔鬼项链", 500))
drops.Add(new Drop("琥珀项链", 500))
drops.Add(new Drop("凤凰明珠", 500))

// 手镯
drops.Add(new Drop("魔法手镯", 500))
drops.Add(new Drop("坚固手套", 750))

// 戒指
drops.Add(new Drop("黑色水晶戒指", 500))
drops.Add(new Drop("蓝色水晶戒指", 400))
drops.Add(new Drop("珍珠戒指", 500))
drops.Add(new Drop("蛇眼戒指", 500))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("太阳水", 100))
drops.Add(new Drop("魔法药(中量)", 30))
drops.Add(new Drop("金疮药(中量)", 30))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("无我闪", 400))
drops.Add(new Drop("群体隐身术", 250))
drops.Add(new Drop("爆裂火焰", 250))
drops.Add(new Drop("火墙", 250))
drops.Add(new Drop("幽灵盾", 250))
drops.Add(new Drop("体迅风", 250))
drops.Add(new Drop("刺杀剑术", 500))
drops.Add(new Drop("隐身术", 250))
drops.Add(new Drop("疾光电影", 500))
drops.Add(new Drop("神圣战甲术", 500))
drops.Add(new Drop("拔刀术", 500))
drops.Add(new Drop("爆阱", 150))
drops.Add(new Drop("气功术", 200))
drops.Add(new Drop("吸血地精", 250))
drops.Add(new Drop("爆闪", 500))
drops.Add(new Drop("心灵启示", 500))
drops.Add(new Drop("风剑术", 200))
drops.Add(new Drop("地狱火", 200))
drops.Add(new Drop("攻杀剑术", 200))
drops.Add(new Drop("基本剑术", 100))
drops.Add(new Drop("火球术", 100))
drops.Add(new Drop("治愈术", 100))
drops.Add(new Drop("绝命剑法", 100))
drops.Add(new Drop("必中闪", 100))
drops.Add(new Drop("抗拒火环", 100))
drops.Add(new Drop("诱惑之光", 100))
drops.Add(new Drop("精神力战法", 100))
drops.Add(new Drop("施毒术", 100))
drops.Add(new Drop("天日闪", 200))
drops.Add(new Drop("雷电术", 200))
drops.Add(new Drop("大火球", 200))
drops.Add(new Drop("灵魂火符", 200))
drops.Add(new Drop("召唤骷髅", 200))
drops.Add(new Drop("瞬息移动", 200))
drops.Add(new Drop("风弹步", 700))
drops.Add(new Drop("万斤闪", 1000))

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
drops.Add(new Drop("稀有铜矿", 5, 0, true))
drops.Add(new Drop("僵尸之眼", 5, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
