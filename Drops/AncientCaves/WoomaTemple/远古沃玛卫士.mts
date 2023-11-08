import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(7000, 1));

// 武器
drops.Add(new Drop("绝命弓", 15))
drops.Add(new Drop("偃月", 15))
drops.Add(new Drop("降魔", 15))
drops.Add(new Drop("墨铁刀", 15))
drops.Add(new Drop("修罗", 20))
drops.Add(new Drop("凝霜", 25))
drops.Add(new Drop("炼狱", 200))
drops.Add(new Drop("斩马刀", 15))
drops.Add(new Drop("魔杖", 200))
drops.Add(new Drop("双极刀", 200))
drops.Add(new Drop("满义弓", 200))
drops.Add(new Drop("银蛇", 200))
drops.Add(new Drop("破魂", 15))

// 衣服
drops.Add(new Drop("魔法长袍(男)", 10))
drops.Add(new Drop("魔法长袍(女)", 10))
drops.Add(new Drop("重盔甲(女)", 10))
drops.Add(new Drop("重盔甲(男)", 10))
drops.Add(new Drop("战神盔甲(女)", 40))
drops.Add(new Drop("炎红战衣(女)", 40))
drops.Add(new Drop("恶魔长袍(男)", 40))
drops.Add(new Drop("灵魂战衣(女)", 10))
drops.Add(new Drop("残影魔衣(男)", 10))
drops.Add(new Drop("残影魔衣(女)", 10))
drops.Add(new Drop("轻革衣(男)", 10))
drops.Add(new Drop("灵魂战衣(男)", 10))
drops.Add(new Drop("恶魔长袍(女)", 40))
drops.Add(new Drop("战神盔甲(男)", 40))
drops.Add(new Drop("幽灵战衣(女)", 40))
drops.Add(new Drop("炎红战衣(男)", 40))
drops.Add(new Drop("魂魅神衣(女)", 40))
drops.Add(new Drop("魂魅神衣(男)", 40))
drops.Add(new Drop("轻革衣(女)", 10))
drops.Add(new Drop("幽灵战衣(男)", 40))

// 头盔
drops.Add(new Drop("骷髅头盔", 10))
drops.Add(new Drop("钢铁头盔", 25))
drops.Add(new Drop("道士头盔", 10))

// 项链
drops.Add(new Drop("竹笛", 10))
drops.Add(new Drop("灯笼项链", 5))
drops.Add(new Drop("白色虎齿项链", 5))
drops.Add(new Drop("躲避手链", 8))
drops.Add(new Drop("蓝翡翠项链", 10))
drops.Add(new Drop("放大镜", 10))

// 手镯
drops.Add(new Drop("坚固手套", 5))
drops.Add(new Drop("阎罗手套", 500))
drops.Add(new Drop("幽灵手套", 20))
drops.Add(new Drop("金手镯", 15))
drops.Add(new Drop("死神手套", 15))
drops.Add(new Drop("黑檀手镯", 7))
drops.Add(new Drop("道士手镯", 7))
drops.Add(new Drop("尽力手镯", 7))
drops.Add(new Drop("魔法手镯", 5))

// 戒指
drops.Add(new Drop("道德戒指", 10))
drops.Add(new Drop("降妖除魔戒指", 20))
drops.Add(new Drop("珊瑚戒指", 20))
drops.Add(new Drop("狂风戒指", 30))
drops.Add(new Drop("龙之戒指", 50))
drops.Add(new Drop("红宝石戒指", 50))
drops.Add(new Drop("铂金戒指", 50))
drops.Add(new Drop("生铁戒指", 10))
drops.Add(new Drop("紫碧螺", 300))
drops.Add(new Drop("泰坦戒指", 300))
drops.Add(new Drop("骷髅戒指", 8))
drops.Add(new Drop("力量戒指", 300))
drops.Add(new Drop("魅力戒指", 10))

// 护身符

// 腰带

// 鞋子
drops.Add(new Drop("紫绸靴", 3000))

// 石头

// 火把

// 药水
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("魔法药水(小)", 15))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("攻击药水(小)", 15))
drops.Add(new Drop("疾风药水(小)", 15))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("道力药水(小)", 15))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("万年雪霜", 15))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("太阳水", 1))

// 矿石

// 肉

// 工艺材料

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

// 觉醒

// 宠物

// 变身

// 其它

export default drops;
