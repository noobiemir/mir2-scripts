import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2000, 10));

// 武器
drops.Add(new Drop("怒斩", 90000))
drops.Add(new Drop("冷月刀", 90000))
drops.Add(new Drop("霸王弓", 90000))
drops.Add(new Drop("龙牙", 90000))
drops.Add(new Drop("逍遥扇", 90000))

// 衣服
drops.Add(new Drop("轻革衣(男)", 150))
drops.Add(new Drop("残影魔衣(女)", 150))
drops.Add(new Drop("残影魔衣(男)", 150))
drops.Add(new Drop("战神盔甲(男)", 500))
drops.Add(new Drop("灵魂战衣(男)", 150))
drops.Add(new Drop("魔法长袍(女)", 150))
drops.Add(new Drop("魔法长袍(男)", 150))
drops.Add(new Drop("重盔甲(女)", 150))
drops.Add(new Drop("重盔甲(男)", 150))
drops.Add(new Drop("战神盔甲(女)", 500))
drops.Add(new Drop("恶魔长袍(男)", 500))
drops.Add(new Drop("幽灵战衣(女)", 500))
drops.Add(new Drop("灵魂战衣(女)", 150))
drops.Add(new Drop("轻革衣(女)", 150))
drops.Add(new Drop("炎红战衣(男)", 500))
drops.Add(new Drop("恶魔长袍(女)", 500))
drops.Add(new Drop("魂魅神衣(女)", 500))
drops.Add(new Drop("幽灵战衣(男)", 500))
drops.Add(new Drop("炎红战衣(女)", 500))
drops.Add(new Drop("魂魅神衣(男)", 500))

// 头盔
drops.Add(new Drop("骷髅头盔", 200))
drops.Add(new Drop("道士头盔", 180))
drops.Add(new Drop("钢铁头盔", 1000))

// 项链
drops.Add(new Drop("琥珀项链", 150))
drops.Add(new Drop("凤凰明珠", 150))
drops.Add(new Drop("蓝翡翠项链", 200))
drops.Add(new Drop("放大镜", 200))
drops.Add(new Drop("竹笛", 200))
drops.Add(new Drop("魔鬼项链", 150))

// 手镯
drops.Add(new Drop("坚固手套", 90))
drops.Add(new Drop("魔法手镯", 90))
drops.Add(new Drop("幽灵手套", 550))
drops.Add(new Drop("死神手套", 430))

// 戒指
drops.Add(new Drop("降妖除魔戒指", 450))
drops.Add(new Drop("珍珠戒指", 100))
drops.Add(new Drop("蛇眼戒指", 100))
drops.Add(new Drop("黑色水晶戒指", 100))
drops.Add(new Drop("骷髅戒指", 200))
drops.Add(new Drop("虹魔戒指", 1200))
drops.Add(new Drop("珊瑚戒指", 450))
drops.Add(new Drop("五玄戒指", 8000))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("道力药水(小)", 100))
drops.Add(new Drop("强效太阳水", 60))
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("魔法药(大量)", 30))
drops.Add(new Drop("魔法药水(小)", 100))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("攻击药水(小)", 100))
drops.Add(new Drop("金疮药(大量)", 30))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("避毒珠", 300))
drops.Add(new Drop("骨头", 10))
drops.Add(new Drop("大骨头", 20))
drops.Add(new Drop("毒素珠", 300))

// 卷轴
drops.Add(new Drop("战神油", 500))
drops.Add(new Drop("修复油", 300))

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
