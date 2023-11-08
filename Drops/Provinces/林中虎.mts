import { createDropList, Drop } from "../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(8500, 1));

// 武器
drops.Add(new Drop("裁决之杖", 2500))
drops.Add(new Drop("冷月刀", 10000))
drops.Add(new Drop("逍遥扇", 10000))
drops.Add(new Drop("怒斩", 10000))
drops.Add(new Drop("龙牙", 10000))
drops.Add(new Drop("魂魅弓", 2500))
drops.Add(new Drop("暗黑刀", 2500))
drops.Add(new Drop("无极棍", 2500))
drops.Add(new Drop("骨玉权杖", 2500))
drops.Add(new Drop("满义弓", 800))
drops.Add(new Drop("霸王弓", 10000))
drops.Add(new Drop("银蛇", 800))
drops.Add(new Drop("炼狱", 800))
drops.Add(new Drop("血火之匕", 800))
drops.Add(new Drop("凝霜", 300))
drops.Add(new Drop("修罗", 250))
drops.Add(new Drop("绝命弓", 50))
drops.Add(new Drop("墨铁刀", 50))
drops.Add(new Drop("降魔", 50))
drops.Add(new Drop("偃月", 50))
drops.Add(new Drop("斩马刀", 50))
drops.Add(new Drop("破魂", 50))
drops.Add(new Drop("魔杖", 800))

// 衣服
drops.Add(new Drop("残影魔衣(女)", 60))
drops.Add(new Drop("轻革衣(男)", 60))
drops.Add(new Drop("灵魂战衣(男)", 60))
drops.Add(new Drop("残影魔衣(男)", 60))
drops.Add(new Drop("轻革衣(女)", 60))
drops.Add(new Drop("灵魂战衣(女)", 60))
drops.Add(new Drop("重盔甲(女)", 60))
drops.Add(new Drop("魔法长袍(男)", 60))
drops.Add(new Drop("重盔甲(男)", 60))
drops.Add(new Drop("中型盔甲(女)", 600))
drops.Add(new Drop("中型盔甲(男)", 600))
drops.Add(new Drop("魔法长袍(女)", 60))

// 头盔
drops.Add(new Drop("道士头盔", 100))
drops.Add(new Drop("骷髅头盔", 150))

// 项链
drops.Add(new Drop("竹笛", 650))
drops.Add(new Drop("天珠项链", 4000))
drops.Add(new Drop("幽灵项链", 4000))
drops.Add(new Drop("生命项链", 4000))
drops.Add(new Drop("狂风项链", 5000))
drops.Add(new Drop("放大镜", 650))
drops.Add(new Drop("蓝翡翠项链", 650))
drops.Add(new Drop("白色虎齿项链", 100))
drops.Add(new Drop("灯笼项链", 100))

// 手镯
drops.Add(new Drop("幽灵手套", 500))
drops.Add(new Drop("尽力手镯", 80))
drops.Add(new Drop("魔法手镯", 80))
drops.Add(new Drop("坚固手套", 80))
drops.Add(new Drop("黑檀手镯", 250))
drops.Add(new Drop("道士手镯", 250))
drops.Add(new Drop("死神手套", 450))
drops.Add(new Drop("金手镯", 300))

// 戒指
drops.Add(new Drop("珊瑚戒指", 200))
drops.Add(new Drop("狂风戒指", 600))
drops.Add(new Drop("紫碧螺", 2500))
drops.Add(new Drop("泰坦戒指", 2500))
drops.Add(new Drop("降妖除魔戒指", 200))
drops.Add(new Drop("力量戒指", 2500))
drops.Add(new Drop("铂金戒指", 800))
drops.Add(new Drop("龙之戒指", 800))
drops.Add(new Drop("道德戒指", 300))
drops.Add(new Drop("魅力戒指", 300))
drops.Add(new Drop("生铁戒指", 250))
drops.Add(new Drop("红宝石戒指", 800))
drops.Add(new Drop("骷髅戒指", 250))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔法守护石", 3000))
drops.Add(new Drop("道术守护石", 3000))
drops.Add(new Drop("攻击守护石", 3000))
drops.Add(new Drop("能力守护石", 3000))
drops.Add(new Drop("魔力守护石", 3000))
drops.Add(new Drop("生命守护石", 3000))
drops.Add(new Drop("道术守护石(特大)", 2000))
drops.Add(new Drop("魔法守护石(特大)", 2000))
drops.Add(new Drop("攻击守护石(特大)", 2000))
drops.Add(new Drop("能力守护石(特大)", 2000))
drops.Add(new Drop("魔力守护石(特大)", 2000))
drops.Add(new Drop("生命守护石(特大)", 2000))

// 火把

// 药水
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("攻击药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("体力药水(小)", 30))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔力药水(小)", 30))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("金疮药(大量)", 1))

// 矿石

// 肉

// 工艺材料

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("迁移剑", 2000))
drops.Add(new Drop("诅咒术", 40000))
drops.Add(new Drop("毒云", 50000))
drops.Add(new Drop("烈风击", 5000))
drops.Add(new Drop("召唤月灵", 24000))
drops.Add(new Drop("猛毒剑气", 12000))
drops.Add(new Drop("万斤闪", 5000))
drops.Add(new Drop("地柱钉", 12000))
drops.Add(new Drop("金刚术", 15000))
drops.Add(new Drop("捕缚术", 6000))
drops.Add(new Drop("复活术", 20000))
drops.Add(new Drop("吸血地闪", 45000))
drops.Add(new Drop("净化术", 5000))
drops.Add(new Drop("火龙气焰", 50000))
drops.Add(new Drop("分身术", 20000))
drops.Add(new Drop("灭天火", 12000))
drops.Add(new Drop("冰咆哮", 5000))
drops.Add(new Drop("地狱雷光", 2000))
drops.Add(new Drop("烈火剑法", 5000))
drops.Add(new Drop("捕绳剑", 4000))
drops.Add(new Drop("双龙斩", 5000))
drops.Add(new Drop("野蛮冲撞", 2000))
drops.Add(new Drop("气流术", 25000))
drops.Add(new Drop("迷魂术", 8000))

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
