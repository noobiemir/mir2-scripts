import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(3500, 1));

// 武器
drops.Add(new Drop("炼狱", 1000))
drops.Add(new Drop("破魂", 16))
drops.Add(new Drop("斩马刀", 16))
drops.Add(new Drop("偃月", 16))
drops.Add(new Drop("降魔", 16))
drops.Add(new Drop("墨铁刀", 16))
drops.Add(new Drop("绝命弓", 16))
drops.Add(new Drop("修罗", 50))
drops.Add(new Drop("凝霜", 60))
drops.Add(new Drop("魔杖", 1000))
drops.Add(new Drop("银蛇", 1000))
drops.Add(new Drop("双极刀", 1000))
drops.Add(new Drop("满义弓", 1000))

// 衣服
drops.Add(new Drop("残影魔衣(女)", 80))
drops.Add(new Drop("轻革衣(男)", 80))
drops.Add(new Drop("魔法长袍(男)", 80))
drops.Add(new Drop("残影魔衣(男)", 80))
drops.Add(new Drop("轻革衣(女)", 80))
drops.Add(new Drop("灵魂战衣(女)", 80))
drops.Add(new Drop("重盔甲(男)", 80))
drops.Add(new Drop("魔法长袍(女)", 80))
drops.Add(new Drop("重盔甲(女)", 80))
drops.Add(new Drop("灵魂战衣(男)", 80))

// 头盔

// 项链
drops.Add(new Drop("竹笛", 50))
drops.Add(new Drop("灯笼项链", 16))
drops.Add(new Drop("白色虎齿项链", 16))
drops.Add(new Drop("铂金项链", 10))
drops.Add(new Drop("蓝翡翠项链", 50))
drops.Add(new Drop("放大镜", 50))

// 手镯
drops.Add(new Drop("金手镯", 16))
drops.Add(new Drop("黑檀手镯", 30))
drops.Add(new Drop("死神手套", 90))
drops.Add(new Drop("幽灵手套", 100))
drops.Add(new Drop("道士手镯", 30))
drops.Add(new Drop("坚固手套", 16))
drops.Add(new Drop("魔法手镯", 10))
drops.Add(new Drop("尽力手镯", 10))

// 戒指
drops.Add(new Drop("降妖除魔戒指", 600))
drops.Add(new Drop("黑色水晶戒指", 10))
drops.Add(new Drop("蛇眼戒指", 10))
drops.Add(new Drop("珍珠戒指", 10))
drops.Add(new Drop("金戒指", 20))
drops.Add(new Drop("骷髅戒指", 30))
drops.Add(new Drop("生铁戒指", 30))
drops.Add(new Drop("魅力戒指", 40))
drops.Add(new Drop("道德戒指", 40))
drops.Add(new Drop("珊瑚戒指", 600))
drops.Add(new Drop("狂风戒指", 2000))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("道术守护石(中)", 150))
drops.Add(new Drop("魔法守护石(中)", 150))
drops.Add(new Drop("攻击守护石(中)", 150))
drops.Add(new Drop("魔力守护石(中)", 150))
drops.Add(new Drop("生命守护石(中)", 150))
drops.Add(new Drop("能力守护石(中)", 150))

// 火把

// 药水
drops.Add(new Drop("太阳水", 40))
drops.Add(new Drop("魔法药(中量)", 4))
drops.Add(new Drop("魔法药(大量)", 8))
drops.Add(new Drop("金疮药(大量)", 8))
drops.Add(new Drop("金疮药(中量)", 4))
drops.Add(new Drop("强效太阳水", 60))
drops.Add(new Drop("金疮药(中量)", 4))
drops.Add(new Drop("魔法药(中量)", 4))
drops.Add(new Drop("金疮药(中量)", 4))
drops.Add(new Drop("魔法药(中量)", 4))
drops.Add(new Drop("万年雪霜", 20))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("颚骨", 5))

// 卷轴

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
drops.Add(new Drop("老旧的项链", 10, 0, true))

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
