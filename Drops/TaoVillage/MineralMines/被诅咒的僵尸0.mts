import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(3750, 1));

// 武器
drops.Add(new Drop("绝命弓", 35))
drops.Add(new Drop("青铜斧", 15))
drops.Add(new Drop("八荒", 25))
drops.Add(new Drop("海魂", 25))
drops.Add(new Drop("半月", 25))
drops.Add(new Drop("音速刀", 25))
drops.Add(new Drop("杉木铁弓", 25))
drops.Add(new Drop("钢斧", 30))
drops.Add(new Drop("凌风", 35))
drops.Add(new Drop("斩马刀", 35))
drops.Add(new Drop("偃月", 35))
drops.Add(new Drop("降魔", 35))
drops.Add(new Drop("墨铁刀", 35))

// 衣服
drops.Add(new Drop("轻型盔甲(男)", 25))
drops.Add(new Drop("轻型盔甲(女)", 25))

// 头盔
drops.Add(new Drop("青铜头盔", 15))
drops.Add(new Drop("魔法头盔", 17))

// 项链
drops.Add(new Drop("灯笼项链", 50))
drops.Add(new Drop("白色虎齿项链", 50))
drops.Add(new Drop("铂金项链", 50))
drops.Add(new Drop("魔鬼项链", 50))
drops.Add(new Drop("琥珀项链", 50))
drops.Add(new Drop("凤凰明珠", 50))

// 手镯
drops.Add(new Drop("魔法手镯", 50))
drops.Add(new Drop("坚固手套", 75))

// 戒指
drops.Add(new Drop("珍珠戒指", 50))
drops.Add(new Drop("蛇眼戒指", 50))
drops.Add(new Drop("蓝色水晶戒指", 40))
drops.Add(new Drop("黑色水晶戒指", 50))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("金疮药(中量)", 3))
drops.Add(new Drop("魔法药(中量)", 3))
drops.Add(new Drop("魔法药(中量)", 3))
drops.Add(new Drop("魔法药(中量)", 3))
drops.Add(new Drop("金疮药(中量)", 3))
drops.Add(new Drop("金疮药(中量)", 3))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("隐身术", 25))
drops.Add(new Drop("群体隐身术", 25))
drops.Add(new Drop("爆裂火焰", 25))
drops.Add(new Drop("火墙", 25))
drops.Add(new Drop("幽灵盾", 25))
drops.Add(new Drop("体迅风", 25))
drops.Add(new Drop("刺杀剑术", 50))
drops.Add(new Drop("心灵启示", 50))
drops.Add(new Drop("神圣战甲术", 50))
drops.Add(new Drop("拔刀术", 50))
drops.Add(new Drop("爆阱", 15))
drops.Add(new Drop("气功术", 20))
drops.Add(new Drop("吸血地精", 25))
drops.Add(new Drop("风剑术", 20))
drops.Add(new Drop("爆闪", 50))
drops.Add(new Drop("疾光电影", 50))
drops.Add(new Drop("地狱火", 20))
drops.Add(new Drop("基本剑术", 10))
drops.Add(new Drop("瞬息移动", 20))
drops.Add(new Drop("风弹步", 70))
drops.Add(new Drop("无我闪", 40))
drops.Add(new Drop("火球术", 10))
drops.Add(new Drop("治愈术", 10))
drops.Add(new Drop("绝命剑法", 10))
drops.Add(new Drop("必中闪", 10))
drops.Add(new Drop("抗拒火环", 10))
drops.Add(new Drop("诱惑之光", 10))
drops.Add(new Drop("精神力战法", 10))
drops.Add(new Drop("施毒术", 10))
drops.Add(new Drop("天日闪", 20))
drops.Add(new Drop("雷电术", 20))
drops.Add(new Drop("大火球", 20))
drops.Add(new Drop("灵魂火符", 20))
drops.Add(new Drop("召唤骷髅", 20))
drops.Add(new Drop("攻杀剑术", 20))
drops.Add(new Drop("万斤闪", 100))

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
