import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(25000, 10));

// 武器
drops.Add(new Drop("黄龙弓", 250))
drops.Add(new Drop("修罗刀", 250))
drops.Add(new Drop("龙纹剑", 250))
drops.Add(new Drop("噬魂法杖", 250))
drops.Add(new Drop("魂魅弓", 50))
drops.Add(new Drop("暗黑刀", 50))
drops.Add(new Drop("无极棍", 50))
drops.Add(new Drop("屠龙", 250))
drops.Add(new Drop("裁决之杖", 50))
drops.Add(new Drop("井中月", 25))
drops.Add(new Drop("满义弓", 10))
drops.Add(new Drop("双极刀", 10))
drops.Add(new Drop("银蛇", 10))
drops.Add(new Drop("魔杖", 10))
drops.Add(new Drop("炼狱", 10))
drops.Add(new Drop("血饮", 50))
drops.Add(new Drop("骨玉权杖", 50))

// 衣服

// 头盔
drops.Add(new Drop("骷髅头盔", 10))
drops.Add(new Drop("道士头盔", 10))
drops.Add(new Drop("黑铁头盔", 50))

// 项链
drops.Add(new Drop("生命项链", 35))
drops.Add(new Drop("狂风项链", 50))
drops.Add(new Drop("祈祷项链", 50))
drops.Add(new Drop("天珠项链", 35))
drops.Add(new Drop("魔血项链", 500))
drops.Add(new Drop("灵魂项链", 50))
drops.Add(new Drop("恶魔铃铛", 50))
drops.Add(new Drop("绿色项链", 50))
drops.Add(new Drop("幽灵项链", 35))
drops.Add(new Drop("虹魔项链", 500))

// 手镯
drops.Add(new Drop("虹魔手镯", 500))
drops.Add(new Drop("魔血手镯", 500))
drops.Add(new Drop("骑士手镯", 35))
drops.Add(new Drop("心灵手镯", 35))
drops.Add(new Drop("龙之手镯", 35))

// 戒指
drops.Add(new Drop("超负载戒指", 5000))
drops.Add(new Drop("治愈戒指", 1000))
drops.Add(new Drop("隐身戒指", 5000))
drops.Add(new Drop("传送戒指", 50000))
drops.Add(new Drop("复活戒指", 50000))
drops.Add(new Drop("护身戒指", 50000))
drops.Add(new Drop("麻痹戒指", 50000))
drops.Add(new Drop("珊瑚戒指", 2))
drops.Add(new Drop("火焰戒指", 1000))
drops.Add(new Drop("泰坦戒指", 35))
drops.Add(new Drop("虹魔戒指", 500))
drops.Add(new Drop("魔血戒指", 500))
drops.Add(new Drop("龙之戒指", 10))
drops.Add(new Drop("红宝石戒指", 10))
drops.Add(new Drop("降妖除魔戒指", 2))
drops.Add(new Drop("祈祷戒指", 35))
drops.Add(new Drop("力量戒指", 35))
drops.Add(new Drop("紫碧螺", 35))
drops.Add(new Drop("铂金戒指", 10))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("攻击药水(中)", 5))
drops.Add(new Drop("魔法药水(中)", 5))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("疾风药水(中)", 5))
drops.Add(new Drop("体力药水(中)", 5))
drops.Add(new Drop("魔力药水(中)", 5))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("道力药水(中)", 5))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 1))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))

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
drops.Add(new Drop("金盒", 1000))
drops.Add(new Drop("金条", 10))
drops.Add(new Drop("金砖", 100))

export default drops;
