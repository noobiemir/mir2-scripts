import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(8500, 10));

// 武器
drops.Add(new Drop("银蛇", 100))
drops.Add(new Drop("逍遥扇", 2000))
drops.Add(new Drop("怒斩", 2000))
drops.Add(new Drop("龙牙", 2000))
drops.Add(new Drop("血饮", 500))
drops.Add(new Drop("满义弓", 100))
drops.Add(new Drop("双极刀", 100))
drops.Add(new Drop("魔杖", 100))
drops.Add(new Drop("冷月刀", 2000))
drops.Add(new Drop("炼狱", 100))
drops.Add(new Drop("修罗", 25))
drops.Add(new Drop("绝命弓", 5))
drops.Add(new Drop("墨铁刀", 5))
drops.Add(new Drop("降魔", 5))
drops.Add(new Drop("偃月", 5))
drops.Add(new Drop("斩马刀", 5))
drops.Add(new Drop("破魂", 5))
drops.Add(new Drop("祈祷之剑", 75))
drops.Add(new Drop("凝霜", 30))
drops.Add(new Drop("霸王弓", 2000))

// 衣服
drops.Add(new Drop("残影魔衣(女)", 6))
drops.Add(new Drop("轻革衣(男)", 6))
drops.Add(new Drop("残影魔衣(男)", 6))
drops.Add(new Drop("轻革衣(女)", 6))
drops.Add(new Drop("灵魂战衣(女)", 6))
drops.Add(new Drop("魔法长袍(男)", 6))
drops.Add(new Drop("魔法长袍(女)", 6))
drops.Add(new Drop("重盔甲(女)", 6))
drops.Add(new Drop("重盔甲(男)", 6))
drops.Add(new Drop("灵魂战衣(男)", 6))

// 头盔
drops.Add(new Drop("祈祷头盔", 100))
drops.Add(new Drop("骷髅头盔", 15))
drops.Add(new Drop("道士头盔", 10))
drops.Add(new Drop("记忆头盔", 350))

// 项链
drops.Add(new Drop("天珠项链", 35))
drops.Add(new Drop("生命项链", 35))
drops.Add(new Drop("幽灵项链", 35))
drops.Add(new Drop("竹笛", 75))
drops.Add(new Drop("放大镜", 75))
drops.Add(new Drop("灯笼项链", 10))
drops.Add(new Drop("铂金项链", 30))
drops.Add(new Drop("白色虎齿项链", 10))
drops.Add(new Drop("祈祷项链", 75))
drops.Add(new Drop("蓝翡翠项链", 75))

// 手镯
drops.Add(new Drop("金手镯", 25))
drops.Add(new Drop("道士手镯", 25))
drops.Add(new Drop("死神手套", 45))
drops.Add(new Drop("黑檀手镯", 25))
drops.Add(new Drop("幽灵手套", 50))
drops.Add(new Drop("魔法手镯", 8))
drops.Add(new Drop("尽力手镯", 8))
drops.Add(new Drop("祈祷手镯", 50))
drops.Add(new Drop("坚固手套", 8))

// 戒指
drops.Add(new Drop("珊瑚戒指", 20))
drops.Add(new Drop("铂金戒指", 35))
drops.Add(new Drop("红宝石戒指", 35))
drops.Add(new Drop("龙之戒指", 35))
drops.Add(new Drop("狂风戒指", 60))
drops.Add(new Drop("降妖除魔戒指", 20))
drops.Add(new Drop("生铁戒指", 25))
drops.Add(new Drop("魅力戒指", 30))
drops.Add(new Drop("祈祷戒指", 250))
drops.Add(new Drop("道德戒指", 30))
drops.Add(new Drop("骷髅戒指", 25))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("虫壳", 5))
drops.Add(new Drop("虫壳", 10))

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("召唤神兽", 400))
drops.Add(new Drop("魔法盾", 400))
drops.Add(new Drop("野蛮冲撞", 400))
drops.Add(new Drop("困魔咒", 400))
drops.Add(new Drop("猛毒剑气", 400))
drops.Add(new Drop("地狱雷光", 400))
drops.Add(new Drop("烈火剑法", 400))
drops.Add(new Drop("半月弯刀", 400))
drops.Add(new Drop("迁移剑", 400))
drops.Add(new Drop("冰咆哮", 400))

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
