import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(13000, 10));

// 武器
drops.Add(new Drop("魂魅弓", 300))
drops.Add(new Drop("黄龙弓", 5000))
drops.Add(new Drop("修罗刀", 5000))
drops.Add(new Drop("龙纹剑", 5000))
drops.Add(new Drop("噬魂法杖", 5000))
drops.Add(new Drop("屠龙", 5000))
drops.Add(new Drop("暗黑刀", 300))
drops.Add(new Drop("无极棍", 300))
drops.Add(new Drop("骨玉权杖", 300))
drops.Add(new Drop("井中月", 150))
drops.Add(new Drop("满义弓", 50))
drops.Add(new Drop("双极刀", 50))
drops.Add(new Drop("裁决之杖", 300))
drops.Add(new Drop("魔杖", 50))
drops.Add(new Drop("凌风", 5))
drops.Add(new Drop("斩马刀", 5))
drops.Add(new Drop("偃月", 5))
drops.Add(new Drop("银蛇", 50))
drops.Add(new Drop("墨铁刀", 5))
drops.Add(new Drop("降魔", 5))
drops.Add(new Drop("绝命弓", 5))
drops.Add(new Drop("修罗", 25))
drops.Add(new Drop("凝霜", 30))
drops.Add(new Drop("炼狱", 50))

// 衣服
drops.Add(new Drop("火龙魔衣(男)", 150))
drops.Add(new Drop("魂魅神衣(男)", 55))
drops.Add(new Drop("魂魅神衣(女)", 55))
drops.Add(new Drop("鬼面甲胄(男)", 150))
drops.Add(new Drop("鬼面甲胄(女)", 150))
drops.Add(new Drop("炎红战衣(女)", 55))
drops.Add(new Drop("火龙魔衣(女)", 150))
drops.Add(new Drop("幽灵战衣(男)", 55))
drops.Add(new Drop("玄天宝衣(女)", 150))
drops.Add(new Drop("修罗血衣(男)", 150))
drops.Add(new Drop("修罗血衣(女)", 150))
drops.Add(new Drop("黄龙衣(男)", 150))
drops.Add(new Drop("黄龙衣(女)", 150))
drops.Add(new Drop("炎红战衣(男)", 55))
drops.Add(new Drop("玄天宝衣(男)", 150))
drops.Add(new Drop("幽灵战衣(女)", 55))
drops.Add(new Drop("战神盔甲(女)", 55))
drops.Add(new Drop("恶魔长袍(女)", 55))
drops.Add(new Drop("恶魔长袍(男)", 55))
drops.Add(new Drop("战神盔甲(男)", 55))
drops.Add(new Drop("轻革衣(女)", 3))
drops.Add(new Drop("轻革衣(男)", 3))
drops.Add(new Drop("残影魔衣(女)", 3))
drops.Add(new Drop("残影魔衣(男)", 3))
drops.Add(new Drop("灵魂战衣(女)", 3))
drops.Add(new Drop("灵魂战衣(男)", 3))
drops.Add(new Drop("魔法长袍(女)", 3))
drops.Add(new Drop("魔法长袍(男)", 3))
drops.Add(new Drop("重盔甲(女)", 3))
drops.Add(new Drop("重盔甲(男)", 3))

// 头盔
drops.Add(new Drop("祈祷头盔", 80))
drops.Add(new Drop("道士头盔", 10))
drops.Add(new Drop("记忆头盔", 100))
drops.Add(new Drop("骷髅头盔", 10))

// 项链
drops.Add(new Drop("幽灵项链", 100))
drops.Add(new Drop("技巧项链", 550))
drops.Add(new Drop("记忆项链", 100))
drops.Add(new Drop("灯笼项链", 10))
drops.Add(new Drop("白色虎齿项链", 10))
drops.Add(new Drop("蓝翡翠项链", 15))
drops.Add(new Drop("放大镜", 15))
drops.Add(new Drop("竹笛", 15))
drops.Add(new Drop("生命项链", 100))
drops.Add(new Drop("天珠项链", 100))
drops.Add(new Drop("绿色项链", 250))
drops.Add(new Drop("恶魔铃铛", 250))
drops.Add(new Drop("灵魂项链", 250))

// 手镯
drops.Add(new Drop("三眼手镯", 100))
drops.Add(new Drop("阎罗手套", 100))
drops.Add(new Drop("骑士手镯", 200))
drops.Add(new Drop("道士手镯", 10))
drops.Add(new Drop("心灵手镯", 200))
drops.Add(new Drop("思贝尔手镯", 100))
drops.Add(new Drop("龙之手镯", 200))
drops.Add(new Drop("幽灵手套", 20))
drops.Add(new Drop("魔法手镯", 8))
drops.Add(new Drop("死神手套", 15))
drops.Add(new Drop("金手镯", 10))
drops.Add(new Drop("黑檀手镯", 10))
drops.Add(new Drop("坚固手套", 8))
drops.Add(new Drop("尽力手镯", 8))
drops.Add(new Drop("记忆手镯", 100))

// 戒指
drops.Add(new Drop("火焰戒指", 150))
drops.Add(new Drop("铂金戒指", 30))
drops.Add(new Drop("红宝石戒指", 30))
drops.Add(new Drop("龙之戒指", 30))
drops.Add(new Drop("狂风戒指", 40))
drops.Add(new Drop("降妖除魔戒指", 7))
drops.Add(new Drop("珊瑚戒指", 7))
drops.Add(new Drop("魅力戒指", 15))
drops.Add(new Drop("生铁戒指", 5))
drops.Add(new Drop("骷髅戒指", 10))
drops.Add(new Drop("记忆戒指", 500))
drops.Add(new Drop("道德戒指", 15))

// 护身符

// 腰带
drops.Add(new Drop("黄金腰带", 45))
drops.Add(new Drop("金刚腰带", 100))

// 鞋子
drops.Add(new Drop("龙靴", 50))
drops.Add(new Drop("赤鳞靴", 100))

// 石头
drops.Add(new Drop("生命守护石", 550))
drops.Add(new Drop("魔法守护石", 550))
drops.Add(new Drop("攻击守护石", 550))
drops.Add(new Drop("能力守护石", 550))
drops.Add(new Drop("魔力守护石", 550))
drops.Add(new Drop("道术守护石(特大)", 150))
drops.Add(new Drop("道术守护石", 550))
drops.Add(new Drop("攻击守护石(特大)", 150))
drops.Add(new Drop("生命守护石(特大)", 150))
drops.Add(new Drop("魔法守护石(特大)", 150))
drops.Add(new Drop("能力守护石(特大)", 150))
drops.Add(new Drop("魔力守护石(特大)", 150))

// 火把

// 药水
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 10))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("灭天火", 300))
drops.Add(new Drop("双龙斩", 100))
drops.Add(new Drop("圆月弯刀", 300))
drops.Add(new Drop("猛毒剑气", 65))
drops.Add(new Drop("吸气", 300))
drops.Add(new Drop("冰咆哮", 65))
drops.Add(new Drop("烈火剑法", 65))
drops.Add(new Drop("无极真气", 300))
drops.Add(new Drop("召唤神兽", 65))

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
