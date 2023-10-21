import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2000, 1));

// 武器

// 衣服

// 头盔

// 项链
drops.Add(new Drop("竹笛", 20))
drops.Add(new Drop("魔鬼项链", 10))
drops.Add(new Drop("琥珀项链", 10))
drops.Add(new Drop("凤凰明珠", 10))
drops.Add(new Drop("蓝水晶项链", 30))
drops.Add(new Drop("斗士项链", 30))
drops.Add(new Drop("青雷项链", 120))
drops.Add(new Drop("灵力项链", 120))
drops.Add(new Drop("紫晶项链", 120))
drops.Add(new Drop("灯笼项链", 10))
drops.Add(new Drop("蓝翡翠项链", 20))
drops.Add(new Drop("放大镜", 20))

// 手镯
drops.Add(new Drop("黑铁手镯", 100))
drops.Add(new Drop("金手镯", 20))
drops.Add(new Drop("坚固手套", 8))
drops.Add(new Drop("魔法手镯", 8))
drops.Add(new Drop("死神手套", 40))
drops.Add(new Drop("黑檀手镯", 10))
drops.Add(new Drop("尽力手镯", 11))
drops.Add(new Drop("道士手镯", 10))

// 戒指
drops.Add(new Drop("骷髅戒指", 20))
drops.Add(new Drop("魅力戒指", 10))
drops.Add(new Drop("道德戒指", 10))
drops.Add(new Drop("金戒指", 5))
drops.Add(new Drop("蛇眼戒指", 6))
drops.Add(new Drop("黑色水晶戒指", 6))
drops.Add(new Drop("珍珠戒指", 6))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("道力药水(小)", 10))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("太阳水", 5))
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("攻击药水(小)", 10))
drops.Add(new Drop("魔法药水(小)", 10))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("颚骨", 4))
drops.Add(new Drop("虫眼", 3))
drops.Add(new Drop("虫眼", 4, 0, true))
drops.Add(new Drop("虫腿", 2))

// 卷轴
drops.Add(new Drop("修复油", 5))
drops.Add(new Drop("战神油", 10))

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
