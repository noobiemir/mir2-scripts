import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2000, 10));

// 武器

// 衣服

// 头盔

// 项链
drops.Add(new Drop("竹笛", 200))
drops.Add(new Drop("放大镜", 200))
drops.Add(new Drop("灯笼项链", 100))
drops.Add(new Drop("紫晶项链", 1200))
drops.Add(new Drop("灵力项链", 1200))
drops.Add(new Drop("青雷项链", 1200))
drops.Add(new Drop("蓝翡翠项链", 200))
drops.Add(new Drop("蓝水晶项链", 300))
drops.Add(new Drop("凤凰明珠", 100))
drops.Add(new Drop("琥珀项链", 100))
drops.Add(new Drop("魔鬼项链", 100))
drops.Add(new Drop("斗士项链", 300))

// 手镯
drops.Add(new Drop("死神手套", 400))
drops.Add(new Drop("尽力手镯", 110))
drops.Add(new Drop("黑檀手镯", 100))
drops.Add(new Drop("道士手镯", 100))
drops.Add(new Drop("魔法手镯", 80))
drops.Add(new Drop("坚固手套", 80))
drops.Add(new Drop("金手镯", 200))
drops.Add(new Drop("黑铁手镯", 1000))

// 戒指
drops.Add(new Drop("骷髅戒指", 200))
drops.Add(new Drop("珍珠戒指", 60))
drops.Add(new Drop("道德戒指", 100))
drops.Add(new Drop("魅力戒指", 100))
drops.Add(new Drop("黑色水晶戒指", 60))
drops.Add(new Drop("蛇眼戒指", 60))
drops.Add(new Drop("金戒指", 55))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("太阳水", 55))
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(中量)", 20))
drops.Add(new Drop("魔法药(中量)", 20))
drops.Add(new Drop("金疮药(大量)", 25))
drops.Add(new Drop("魔法药(大量)", 25))
drops.Add(new Drop("太阳水", 100))
drops.Add(new Drop("攻击药水(小)", 100))
drops.Add(new Drop("魔法药水(小)", 100))
drops.Add(new Drop("道力药水(小)", 100))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("颚骨", 45))
drops.Add(new Drop("虫腿", 25))
drops.Add(new Drop("虫眼", 30))

// 卷轴
drops.Add(new Drop("修复油", 50))
drops.Add(new Drop("战神油", 100))

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
drops.Add(new Drop("采药手套", 8, 0, true))
drops.Add(new Drop("绿草药", 8, 0, true))
drops.Add(new Drop("采药工具", 8, 0, true))
drops.Add(new Drop("解毒剂", 4, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
