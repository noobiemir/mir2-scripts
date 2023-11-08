import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(15000, 1));

// 武器
drops.Add(new Drop("炼狱", 30))
drops.Add(new Drop("魔杖", 30))
drops.Add(new Drop("银蛇", 30))
drops.Add(new Drop("双极刀", 30))
drops.Add(new Drop("满义弓", 30))
drops.Add(new Drop("井中月", 55))
drops.Add(new Drop("血饮", 55))
drops.Add(new Drop("裁决之杖", 90))
drops.Add(new Drop("骨玉权杖", 90))
drops.Add(new Drop("暗黑刀", 90))
drops.Add(new Drop("魂魅弓", 90))
drops.Add(new Drop("无极棍", 90))

// 衣服
drops.Add(new Drop("轻革衣(女)", 10))
drops.Add(new Drop("魔法长袍(男)", 10))
drops.Add(new Drop("重盔甲(女)", 10))
drops.Add(new Drop("重盔甲(男)", 10))
drops.Add(new Drop("灵魂战衣(女)", 10))
drops.Add(new Drop("残影魔衣(男)", 10))
drops.Add(new Drop("残影魔衣(女)", 10))
drops.Add(new Drop("轻革衣(男)", 10))
drops.Add(new Drop("战神盔甲(男)", 40))
drops.Add(new Drop("魂魅神衣(男)", 40))
drops.Add(new Drop("炎红战衣(女)", 40))
drops.Add(new Drop("炎红战衣(男)", 40))
drops.Add(new Drop("幽灵战衣(女)", 40))
drops.Add(new Drop("幽灵战衣(男)", 40))
drops.Add(new Drop("恶魔长袍(女)", 40))
drops.Add(new Drop("魔法长袍(女)", 10))
drops.Add(new Drop("恶魔长袍(男)", 40))
drops.Add(new Drop("战神盔甲(女)", 40))
drops.Add(new Drop("魂魅神衣(女)", 40))
drops.Add(new Drop("灵魂战衣(男)", 10))

// 头盔
drops.Add(new Drop("道士头盔", 5))
drops.Add(new Drop("黑铁头盔", 145))
drops.Add(new Drop("记忆头盔", 85))
drops.Add(new Drop("祈祷头盔", 160))
drops.Add(new Drop("钢铁头盔", 10))
drops.Add(new Drop("骷髅头盔", 5))

// 项链
drops.Add(new Drop("技巧项链", 100))
drops.Add(new Drop("记忆项链", 70))
drops.Add(new Drop("幽灵项链", 50))
drops.Add(new Drop("生命项链", 50))
drops.Add(new Drop("天珠项链", 50))
drops.Add(new Drop("绿色项链", 90))
drops.Add(new Drop("恶魔铃铛", 90))
drops.Add(new Drop("灵魂项链", 90))
drops.Add(new Drop("狂风项链", 90))

// 手镯
drops.Add(new Drop("骑士手镯", 95))
drops.Add(new Drop("幽灵手套", 10))
drops.Add(new Drop("思贝尔手镯", 50))
drops.Add(new Drop("三眼手镯", 50))
drops.Add(new Drop("记忆手镯", 85))

// 戒指
drops.Add(new Drop("铂金戒指", 40))
drops.Add(new Drop("魅力戒指", 5))
drops.Add(new Drop("传送戒指", 12000))
drops.Add(new Drop("超负载戒指", 12000))
drops.Add(new Drop("珊瑚戒指", 8))
drops.Add(new Drop("祈祷戒指", 80))
drops.Add(new Drop("狂风戒指", 40))
drops.Add(new Drop("龙之戒指", 40))
drops.Add(new Drop("红宝石戒指", 40))
drops.Add(new Drop("道德戒指", 5))
drops.Add(new Drop("力量戒指", 100))
drops.Add(new Drop("泰坦戒指", 100))
drops.Add(new Drop("记忆戒指", 100))
drops.Add(new Drop("紫碧螺", 100))
drops.Add(new Drop("降妖除魔戒指", 8))

// 护身符

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("攻击守护石(大)", 40))
drops.Add(new Drop("魔法守护石(大)", 40))
drops.Add(new Drop("道术守护石(大)", 40))
drops.Add(new Drop("攻击守护石(特大)", 70))
drops.Add(new Drop("魔法守护石(特大)", 70))
drops.Add(new Drop("道术守护石(特大)", 70))

// 火把

// 药水
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("道力药水(中)", 40))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("攻击药水(中)", 40))
drops.Add(new Drop("魔法药水(中)", 40))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("沃玛号角", 40))

// 卷轴
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 10))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("净化术", 50))
drops.Add(new Drop("双龙斩", 50))
drops.Add(new Drop("分身术", 200))
drops.Add(new Drop("狮子吼", 200))
drops.Add(new Drop("气功波", 30))
drops.Add(new Drop("捕绳剑", 200))
drops.Add(new Drop("捕缚术", 30))
drops.Add(new Drop("灭天火", 30))
drops.Add(new Drop("圆月弯刀", 30))
drops.Add(new Drop("月影术", 200))
drops.Add(new Drop("无极真气", 30))

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
drops.Add(new Drop("金条", 50))

export default drops;
