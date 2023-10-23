import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2000, 10));

// 武器
drops.Add(new Drop("井中月", 2000))
drops.Add(new Drop("霸王弓", 12000))
drops.Add(new Drop("冷月刀", 12000))
drops.Add(new Drop("逍遥扇", 12000))
drops.Add(new Drop("怒斩", 12000))
drops.Add(new Drop("龙牙", 12000))
drops.Add(new Drop("魂魅弓", 6000))
drops.Add(new Drop("暗黑刀", 6000))
drops.Add(new Drop("无极棍", 6000))
drops.Add(new Drop("骨玉权杖", 6000))
drops.Add(new Drop("裁决之杖", 6000))
drops.Add(new Drop("血火之匕", 1500))
drops.Add(new Drop("血饮", 2000))

// 衣服
drops.Add(new Drop("幽灵战衣(男)", 300))
drops.Add(new Drop("修罗血衣(男)", 2000))
drops.Add(new Drop("炎红战衣(男)", 300))
drops.Add(new Drop("炎红战衣(女)", 300))
drops.Add(new Drop("魂魅神衣(男)", 300))
drops.Add(new Drop("魂魅神衣(女)", 300))
drops.Add(new Drop("鬼面甲胄(男)", 2000))
drops.Add(new Drop("鬼面甲胄(女)", 2000))
drops.Add(new Drop("火龙魔衣(男)", 2000))
drops.Add(new Drop("火龙魔衣(女)", 2000))
drops.Add(new Drop("玄天宝衣(女)", 2000))
drops.Add(new Drop("修罗血衣(女)", 2000))
drops.Add(new Drop("黄龙衣(男)", 2000))
drops.Add(new Drop("黄龙衣(女)", 2000))
drops.Add(new Drop("幽灵战衣(女)", 300))
drops.Add(new Drop("恶魔长袍(女)", 300))
drops.Add(new Drop("玄天宝衣(男)", 2000))
drops.Add(new Drop("战神盔甲(女)", 300))
drops.Add(new Drop("战神盔甲(男)", 300))
drops.Add(new Drop("恶魔长袍(男)", 300))

// 头盔
drops.Add(new Drop("勇士头盔", 18000))
drops.Add(new Drop("黑铁头盔", 25000))
drops.Add(new Drop("骷髅头盔", 100))
drops.Add(new Drop("道士头盔", 120))

// 项链
drops.Add(new Drop("紫晶项链", 500))
drops.Add(new Drop("灵力项链", 500))
drops.Add(new Drop("青雷项链", 500))
drops.Add(new Drop("竹笛", 200))
drops.Add(new Drop("蓝翡翠项链", 200))
drops.Add(new Drop("凤凰明珠", 250))
drops.Add(new Drop("魔鬼项链", 250))
drops.Add(new Drop("琥珀项链", 250))
drops.Add(new Drop("放大镜", 200))

// 手镯
drops.Add(new Drop("道士手镯", 160))
drops.Add(new Drop("黑檀手镯", 160))
drops.Add(new Drop("死神手套", 150))
drops.Add(new Drop("心灵手镯", 20000))
drops.Add(new Drop("尽力手镯", 160))
drops.Add(new Drop("骑士手镯", 20000))
drops.Add(new Drop("龙之手镯", 20000))

// 戒指
drops.Add(new Drop("狂风戒指", 10000))
drops.Add(new Drop("铂金戒指", 1800))
drops.Add(new Drop("红宝石戒指", 1800))
drops.Add(new Drop("龙之戒指", 1800))
drops.Add(new Drop("黑色水晶戒指", 250))
drops.Add(new Drop("蛇眼戒指", 250))
drops.Add(new Drop("珍珠戒指", 250))
drops.Add(new Drop("骷髅戒指", 200))
drops.Add(new Drop("珊瑚戒指", 350))
drops.Add(new Drop("降妖除魔戒指", 350))

// 护身符

// 腰带
drops.Add(new Drop("黄金腰带", 1450))
drops.Add(new Drop("钢铁腰带", 650))

// 鞋子

// 石头
drops.Add(new Drop("生命守护石(特大)", 10000))
drops.Add(new Drop("道术守护石(特大)", 30000))
drops.Add(new Drop("魔法守护石(特大)", 30000))
drops.Add(new Drop("魔力守护石(特大)", 10000))
drops.Add(new Drop("攻击守护石(特大)", 30000))

// 火把

// 药水
drops.Add(new Drop("太阳水", 20))
drops.Add(new Drop("强效太阳水", 60))
drops.Add(new Drop("金疮药(大量)", 30))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("魔法药(大量)", 30))
drops.Add(new Drop("金疮药(中量)", 10))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("骨头", 10))
drops.Add(new Drop("大骨头", 20))
drops.Add(new Drop("疾风珠", 400))
drops.Add(new Drop("毒素珠", 400))

// 卷轴
drops.Add(new Drop("修复油", 100))
drops.Add(new Drop("战神油", 1200))
drops.Add(new Drop("祝福油", 10000))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("烈火剑法", 280))
drops.Add(new Drop("双龙斩", 10000))
drops.Add(new Drop("野蛮冲撞", 400))

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
