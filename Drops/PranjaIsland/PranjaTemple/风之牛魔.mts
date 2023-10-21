import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(2250, 15));

// 武器
drops.Add(new Drop("冷月刀", 100000))
drops.Add(new Drop("LitheBow", 100000))
drops.Add(new Drop("怒斩", 100000))
drops.Add(new Drop("龙牙", 100000))
drops.Add(new Drop("凝霜", 600))
drops.Add(new Drop("修罗", 550))
drops.Add(new Drop("LongBow", 200))
drops.Add(new Drop("墨铁刀", 200))
drops.Add(new Drop("降魔", 200))
drops.Add(new Drop("偃月", 200))
drops.Add(new Drop("斩马刀", 200))
drops.Add(new Drop("破魂", 200))
drops.Add(new Drop("逍遥扇", 100000))

// 衣服
drops.Add(new Drop("灵魂战衣(女)", 650))
drops.Add(new Drop("灵魂战衣(男)", 650))
drops.Add(new Drop("重盔甲(男)", 650))
drops.Add(new Drop("重盔甲(女)", 650))
drops.Add(new Drop("魔法长袍(男)", 650))
drops.Add(new Drop("魔法长袍(女)", 650))
drops.Add(new Drop("StuddedArmour(女)", 7000))
drops.Add(new Drop("StuddedArmour(男)", 7000))
drops.Add(new Drop("修罗血衣(男)", 7000))
drops.Add(new Drop("玄天宝衣(女)", 7000))
drops.Add(new Drop("修罗血衣(女)", 7000))
drops.Add(new Drop("火龙魔衣(女)", 7000))
drops.Add(new Drop("火龙魔衣(男)", 7000))
drops.Add(new Drop("鬼面甲胄(女)", 7000))
drops.Add(new Drop("鬼面甲胄(男)", 7000))
drops.Add(new Drop("LightLeatherArmour(女)", 650))
drops.Add(new Drop("LightLeatherArmour(男)", 650))
drops.Add(new Drop("残影魔衣(女)", 650))
drops.Add(new Drop("残影魔衣(男)", 650))
drops.Add(new Drop("玄天宝衣(男)", 7000))

// 头盔

// 项链
drops.Add(new Drop("蓝翡翠项链", 450))
drops.Add(new Drop("灯笼项链", 200))
drops.Add(new Drop("白色虎齿项链", 200))
drops.Add(new Drop("铂金项链", 150))
drops.Add(new Drop("竹笛", 450))
drops.Add(new Drop("青魔项链", 8000))
drops.Add(new Drop("放大镜", 450))
drops.Add(new Drop("狂风项链", 3000))
drops.Add(new Drop("破碎项链", 7500))
drops.Add(new Drop("幽灵项链", 3900))
drops.Add(new Drop("生命项链", 3900))
drops.Add(new Drop("天珠项链", 3900))

// 手镯
drops.Add(new Drop("幽灵手套", 750))
drops.Add(new Drop("道士手镯", 300))
drops.Add(new Drop("黑檀手镯", 300))
drops.Add(new Drop("死神手套", 450))
drops.Add(new Drop("破碎手镯", 7500))
drops.Add(new Drop("幽灵手套", 750))
drops.Add(new Drop("青魔手镯", 8000))
drops.Add(new Drop("雪玉手镯", 2500))
drops.Add(new Drop("坚固手套", 180))
drops.Add(new Drop("金手镯", 400))
drops.Add(new Drop("魔法手镯", 180))

// 戒指
drops.Add(new Drop("珊瑚戒指", 750))
drops.Add(new Drop("青魔戒指", 8000))
drops.Add(new Drop("破碎戒指", 7500))
drops.Add(new Drop("金戒指", 350))
drops.Add(new Drop("骷髅戒指", 400))
drops.Add(new Drop("降妖除魔戒指", 750))
drops.Add(new Drop("道德戒指", 100))
drops.Add(new Drop("生铁戒指", 100))
drops.Add(new Drop("狂风戒指", 1000))
drops.Add(new Drop("虎威戒指", 1500))
drops.Add(new Drop("雪玉戒指", 1500))
drops.Add(new Drop("屠魔戒指", 1500))
drops.Add(new Drop("魅力戒指", 100))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(大量)", 20))
drops.Add(new Drop("魔法药(大量)", 20))
drops.Add(new Drop("金疮药(大量)", 50))
drops.Add(new Drop("魔法药(大量)", 50))
drops.Add(new Drop("太阳水", 40))
drops.Add(new Drop("强效太阳水", 50))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("寒冰珠", 300))
drops.Add(new Drop("疾风珠", 300))

// 卷轴
drops.Add(new Drop("战神油", 1000))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("无极真气", 1000))

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
