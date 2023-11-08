import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(8500, 5));

// 武器
drops.Add(new Drop("降魔", 7))
drops.Add(new Drop("八荒", 5))
drops.Add(new Drop("海魂", 5))
drops.Add(new Drop("半月", 5))
drops.Add(new Drop("音速刀", 5))
drops.Add(new Drop("杉木铁弓", 5))
drops.Add(new Drop("破魂", 7))
drops.Add(new Drop("斩马刀", 7))
drops.Add(new Drop("偃月", 7))
drops.Add(new Drop("墨铁刀", 7))
drops.Add(new Drop("绝命弓", 7))
drops.Add(new Drop("钢斧", 6))
drops.Add(new Drop("凌风", 10))

// 衣服
drops.Add(new Drop("轻革衣(女)", 55))
drops.Add(new Drop("中型盔甲(男)", 250))
drops.Add(new Drop("残影魔衣(男)", 55))
drops.Add(new Drop("轻革衣(男)", 55))
drops.Add(new Drop("中型盔甲(女)", 250))
drops.Add(new Drop("残影魔衣(女)", 55))
drops.Add(new Drop("魔法长袍(男)", 55))
drops.Add(new Drop("灵魂战衣(男)", 55))
drops.Add(new Drop("魔法长袍(女)", 55))
drops.Add(new Drop("重盔甲(女)", 55))
drops.Add(new Drop("重盔甲(男)", 55))
drops.Add(new Drop("灵魂战衣(女)", 55))

// 头盔
drops.Add(new Drop("道士头盔", 35))
drops.Add(new Drop("骷髅头盔", 40))
drops.Add(new Drop("黑铁头盔", 2500))

// 项链
drops.Add(new Drop("凤凰明珠", 5))
drops.Add(new Drop("铂金项链", 6))
drops.Add(new Drop("琥珀项链", 5))
drops.Add(new Drop("魔鬼项链", 5))
drops.Add(new Drop("白色虎齿项链", 6))
drops.Add(new Drop("竹笛", 25))
drops.Add(new Drop("放大镜", 25))
drops.Add(new Drop("蓝翡翠项链", 25))
drops.Add(new Drop("灯笼项链", 6))

// 手镯
drops.Add(new Drop("魔法手镯", 10))
drops.Add(new Drop("钢手镯", 5))
drops.Add(new Drop("坚固手套", 10))
drops.Add(new Drop("尽力手镯", 6))
drops.Add(new Drop("道士手镯", 6))
drops.Add(new Drop("黑檀手镯", 6))
drops.Add(new Drop("金手镯", 20))
drops.Add(new Drop("死神手套", 30))

// 戒指
drops.Add(new Drop("蓝色水晶戒指", 5))
drops.Add(new Drop("珍珠戒指", 6))
drops.Add(new Drop("蛇眼戒指", 6))
drops.Add(new Drop("黑色水晶戒指", 6))
drops.Add(new Drop("骷髅戒指", 6))
drops.Add(new Drop("魅力戒指", 10))
drops.Add(new Drop("金戒指", 10))
drops.Add(new Drop("道德戒指", 10))

// 护身符

// 腰带
drops.Add(new Drop("兽皮腰带", 10))
drops.Add(new Drop("铁腰带", 15))
drops.Add(new Drop("青铜腰带", 35))
drops.Add(new Drop("钢铁腰带", 50))
drops.Add(new Drop("兽皮腰带", 15))

// 鞋子
drops.Add(new Drop("紫绸靴", 20))
drops.Add(new Drop("避魂靴", 45))

// 石头
drops.Add(new Drop("道术守护石(大)", 65))
drops.Add(new Drop("道术守护石(中)", 30))
drops.Add(new Drop("魔法守护石(大)", 65))
drops.Add(new Drop("攻击守护石(大)", 65))
drops.Add(new Drop("攻击守护石(中)", 30))
drops.Add(new Drop("魔法守护石(中)", 30))

// 火把

// 药水
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(中量)", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("金疮药(中量)", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("强效太阳水", 1))

// 矿石
drops.Add(new Drop("金矿", 10))
drops.Add(new Drop("黑铁矿", 3))
drops.Add(new Drop("金矿", 10))
drops.Add(new Drop("黑铁矿", 3))
drops.Add(new Drop("黑铁矿", 3))

// 肉

// 工艺材料

// 卷轴

// 宝石
drops.Add(new Drop("勇猛宝玉", 150))
drops.Add(new Drop("魔性宝玉", 150))
drops.Add(new Drop("仙界宝玉", 150))
drops.Add(new Drop("守护宝玉", 150))
drops.Add(new Drop("制魔宝玉", 150))

// 坐骑

// 技能书
drops.Add(new Drop("群体治疗术", 150))
drops.Add(new Drop("召唤神兽", 250))
drops.Add(new Drop("风剑术", 10))
drops.Add(new Drop("体迅风", 25))
drops.Add(new Drop("拔刀术", 100))
drops.Add(new Drop("风身术", 100))
drops.Add(new Drop("气功术", 20))
drops.Add(new Drop("猛毒剑气", 250))
drops.Add(new Drop("爆阱", 15))
drops.Add(new Drop("吸血地精", 25))
drops.Add(new Drop("爆闪", 50))
drops.Add(new Drop("风弹步", 70))
drops.Add(new Drop("心灵启示", 25))
drops.Add(new Drop("迁移剑", 150))
drops.Add(new Drop("困魔咒", 100))
drops.Add(new Drop("无我闪", 40))
drops.Add(new Drop("幽灵盾", 10))
drops.Add(new Drop("万斤闪", 100))
drops.Add(new Drop("攻杀剑术", 10))
drops.Add(new Drop("刺杀剑术", 10))
drops.Add(new Drop("半月弯刀", 100))
drops.Add(new Drop("野蛮冲撞", 100))
drops.Add(new Drop("烈火剑法", 250))
drops.Add(new Drop("神圣战甲术", 50))
drops.Add(new Drop("雷电术", 10))
drops.Add(new Drop("疾光电影", 50))
drops.Add(new Drop("地狱雷光", 100))
drops.Add(new Drop("魔法盾", 150))
drops.Add(new Drop("圣言术", 200))
drops.Add(new Drop("冰咆哮", 250))
drops.Add(new Drop("灵魂火符", 10))
drops.Add(new Drop("火墙", 10))

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
