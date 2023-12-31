import { createDropList, Drop } from "../../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(500, 5));

// 武器
drops.Add(new Drop("满义弓", 2000))
drops.Add(new Drop("斩马刀", 80))
drops.Add(new Drop("偃月", 80))
drops.Add(new Drop("降魔", 80))
drops.Add(new Drop("墨铁刀", 80))
drops.Add(new Drop("绝命弓", 80))
drops.Add(new Drop("破魂", 80))
drops.Add(new Drop("凝霜", 300))
drops.Add(new Drop("炼狱", 2000))
drops.Add(new Drop("魔杖", 2000))
drops.Add(new Drop("银蛇", 2000))
drops.Add(new Drop("双极刀", 2000))
drops.Add(new Drop("修罗", 200))

// 衣服
drops.Add(new Drop("残影魔衣(女)", 200))
drops.Add(new Drop("残影魔衣(男)", 200))
drops.Add(new Drop("灵魂战衣(女)", 200))
drops.Add(new Drop("灵魂战衣(男)", 200))
drops.Add(new Drop("魔法长袍(女)", 200))
drops.Add(new Drop("重盔甲(男)", 200))
drops.Add(new Drop("重盔甲(女)", 200))
drops.Add(new Drop("轻革衣(男)", 200))
drops.Add(new Drop("魔法长袍(男)", 200))
drops.Add(new Drop("轻革衣(女)", 200))

// 头盔
drops.Add(new Drop("道士头盔", 200))
drops.Add(new Drop("黑铁头盔", 3400))
drops.Add(new Drop("骷髅头盔", 400))

// 项链
drops.Add(new Drop("灵魂项链", 95000))
drops.Add(new Drop("狂风项链", 90000))
drops.Add(new Drop("恶魔铃铛", 95000))
drops.Add(new Drop("放大镜", 160))
drops.Add(new Drop("竹笛", 160))
drops.Add(new Drop("蓝翡翠项链", 160))
drops.Add(new Drop("白色虎齿项链", 80))
drops.Add(new Drop("绿色项链", 95000))
drops.Add(new Drop("铂金项链", 60))
drops.Add(new Drop("灯笼项链", 80))

// 手镯
drops.Add(new Drop("龙之手镯", 90000))
drops.Add(new Drop("骑士手镯", 90000))
drops.Add(new Drop("心灵手镯", 95000))
drops.Add(new Drop("金手镯", 100))
drops.Add(new Drop("阎罗手套", 20000))
drops.Add(new Drop("死神手套", 100))
drops.Add(new Drop("黑檀手镯", 80))
drops.Add(new Drop("道士手镯", 80))
drops.Add(new Drop("坚固手套", 60))
drops.Add(new Drop("魔法手镯", 60))
drops.Add(new Drop("尽力手镯", 60))

// 戒指
drops.Add(new Drop("力量戒指", 95000))
drops.Add(new Drop("紫碧螺", 95000))
drops.Add(new Drop("铂金戒指", 4000))
drops.Add(new Drop("虎威戒指", 1000))
drops.Add(new Drop("泰坦戒指", 95000))
drops.Add(new Drop("红宝石戒指", 4000))
drops.Add(new Drop("蛇眼戒指", 60))
drops.Add(new Drop("屠魔戒指", 1000))
drops.Add(new Drop("龙之戒指", 4000))
drops.Add(new Drop("黑色水晶戒指", 60))
drops.Add(new Drop("金戒指", 80))
drops.Add(new Drop("骷髅戒指", 80))
drops.Add(new Drop("生铁戒指", 60))
drops.Add(new Drop("珍珠戒指", 60))
drops.Add(new Drop("魅力戒指", 60))
drops.Add(new Drop("降妖除魔戒指", 400))
drops.Add(new Drop("珊瑚戒指", 400))
drops.Add(new Drop("狂风戒指", 800))
drops.Add(new Drop("道德戒指", 60))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 40))
drops.Add(new Drop("金疮药(中量)", 10))
drops.Add(new Drop("魔法药(中量)", 10))
drops.Add(new Drop("金疮药(大量)", 10))
drops.Add(new Drop("魔法药(大量)", 10))
drops.Add(new Drop("太阳水", 10))
drops.Add(new Drop("万年雪霜", 100))
drops.Add(new Drop("道力药水(小)", 200))
drops.Add(new Drop("体力药水(小)", 200))
drops.Add(new Drop("魔力药水(小)", 200))
drops.Add(new Drop("攻击药水(小)", 200))
drops.Add(new Drop("魔法药水(小)", 200))
drops.Add(new Drop("苹果", 1000))
drops.Add(new Drop("疾风药水(小)", 200))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("蜘蛛网", 10))
drops.Add(new Drop("黑线", 10))

// 卷轴

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("无极真气", 1000))
drops.Add(new Drop("净化术", 700))

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
