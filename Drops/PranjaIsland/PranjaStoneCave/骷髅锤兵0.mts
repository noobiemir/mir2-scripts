import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(5000, 1));

// 武器
drops.Add(new Drop("井中月", 200))
drops.Add(new Drop("霸王弓", 1200))
drops.Add(new Drop("冷月刀", 1200))
drops.Add(new Drop("逍遥扇", 1200))
drops.Add(new Drop("怒斩", 1200))
drops.Add(new Drop("龙牙", 1200))
drops.Add(new Drop("魂魅弓", 600))
drops.Add(new Drop("暗黑刀", 600))
drops.Add(new Drop("无极棍", 600))
drops.Add(new Drop("骨玉权杖", 600))
drops.Add(new Drop("裁决之杖", 600))
drops.Add(new Drop("血火之匕", 150))
drops.Add(new Drop("血饮", 200))

// 衣服
drops.Add(new Drop("幽灵战衣(男)", 30))
drops.Add(new Drop("修罗血衣(男)", 200))
drops.Add(new Drop("炎红战衣(男)", 30))
drops.Add(new Drop("炎红战衣(女)", 30))
drops.Add(new Drop("魂魅神衣(男)", 30))
drops.Add(new Drop("魂魅神衣(女)", 30))
drops.Add(new Drop("鬼面甲胄(男)", 200))
drops.Add(new Drop("鬼面甲胄(女)", 200))
drops.Add(new Drop("火龙魔衣(男)", 200))
drops.Add(new Drop("火龙魔衣(女)", 200))
drops.Add(new Drop("玄天宝衣(女)", 200))
drops.Add(new Drop("修罗血衣(女)", 200))
drops.Add(new Drop("黄龙衣(男)", 200))
drops.Add(new Drop("黄龙衣(女)", 200))
drops.Add(new Drop("幽灵战衣(女)", 30))
drops.Add(new Drop("恶魔长袍(女)", 30))
drops.Add(new Drop("玄天宝衣(男)", 200))
drops.Add(new Drop("战神盔甲(女)", 30))
drops.Add(new Drop("战神盔甲(男)", 30))
drops.Add(new Drop("恶魔长袍(男)", 30))

// 头盔
drops.Add(new Drop("勇士头盔", 1800))
drops.Add(new Drop("黑铁头盔", 2500))
drops.Add(new Drop("骷髅头盔", 10))
drops.Add(new Drop("道士头盔", 12))

// 项链
drops.Add(new Drop("紫晶项链", 50))
drops.Add(new Drop("灵力项链", 50))
drops.Add(new Drop("青雷项链", 50))
drops.Add(new Drop("竹笛", 20))
drops.Add(new Drop("蓝翡翠项链", 20))
drops.Add(new Drop("凤凰明珠", 25))
drops.Add(new Drop("魔鬼项链", 25))
drops.Add(new Drop("琥珀项链", 25))
drops.Add(new Drop("放大镜", 20))

// 手镯
drops.Add(new Drop("道士手镯", 16))
drops.Add(new Drop("黑檀手镯", 16))
drops.Add(new Drop("死神手套", 15))
drops.Add(new Drop("心灵手镯", 2000))
drops.Add(new Drop("尽力手镯", 16))
drops.Add(new Drop("骑士手镯", 2000))
drops.Add(new Drop("龙之手镯", 2000))

// 戒指
drops.Add(new Drop("狂风戒指", 1000))
drops.Add(new Drop("铂金戒指", 180))
drops.Add(new Drop("红宝石戒指", 180))
drops.Add(new Drop("龙之戒指", 180))
drops.Add(new Drop("黑色水晶戒指", 25))
drops.Add(new Drop("蛇眼戒指", 25))
drops.Add(new Drop("珍珠戒指", 25))
drops.Add(new Drop("骷髅戒指", 20))
drops.Add(new Drop("珊瑚戒指", 35))
drops.Add(new Drop("降妖除魔戒指", 35))

// 护身符

// 腰带
drops.Add(new Drop("黄金腰带", 145))
drops.Add(new Drop("钢铁腰带", 65))

// 鞋子

// 石头
drops.Add(new Drop("生命守护石(特大)", 1000))
drops.Add(new Drop("道术守护石(特大)", 3000))
drops.Add(new Drop("魔法守护石(特大)", 3000))
drops.Add(new Drop("魔力守护石(特大)", 1000))
drops.Add(new Drop("攻击守护石(特大)", 3000))

// 火把

// 药水
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 6))
drops.Add(new Drop("金疮药(大量)", 3))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("魔法药(大量)", 3))
drops.Add(new Drop("金疮药(中量)", 1))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("骨头", 1))
drops.Add(new Drop("大骨头", 2))
drops.Add(new Drop("疾风珠", 40))
drops.Add(new Drop("毒素珠", 40))

// 卷轴
drops.Add(new Drop("修复油", 10))
drops.Add(new Drop("战神油", 120))
drops.Add(new Drop("祝福油", 1000))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("烈火剑法", 28))
drops.Add(new Drop("双龙斩", 1000))
drops.Add(new Drop("野蛮冲撞", 40))

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
