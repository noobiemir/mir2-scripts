import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(60000, 1));

// 武器
drops.Add(new Drop("LethalBow", 500))
drops.Add(new Drop("鹤羽扇", 500))
drops.Add(new Drop("火莲杖", 500))
drops.Add(new Drop("黑虎斧", 400))
drops.Add(new Drop("黑乌刀", 450))

// 衣服
drops.Add(new Drop("黑虎甲胄(男)", 200))
drops.Add(new Drop("LightTemperedArmour(男)", 200))
drops.Add(new Drop("黑虎甲胄(女)", 200))
drops.Add(new Drop("莲盛魔衣(男)", 200))
drops.Add(new Drop("莲盛魔衣(女)", 200))
drops.Add(new Drop("鹤羽圣衣(女)", 200))
drops.Add(new Drop("黑乌飞甲(男)", 200))
drops.Add(new Drop("黑乌飞甲(女)", 200))
drops.Add(new Drop("鹤羽圣衣(男)", 200))
drops.Add(new Drop("LightTemperedArmour(女)", 200))

// 头盔

// 项链
drops.Add(new Drop("魔神鬼影", 100))
drops.Add(new Drop("魔玉电影", 100))
drops.Add(new Drop("昆仑眼泪", 100))

// 手镯
drops.Add(new Drop("铁魔双轮", 100))
drops.Add(new Drop("曜火虹轮", 100))
drops.Add(new Drop("玉女天使", 100))

// 戒指
drops.Add(new Drop("麻痹戒指", 3500))
drops.Add(new Drop("复活戒指", 5000))
drops.Add(new Drop("隐身戒指", 3000))
drops.Add(new Drop("超负载戒指", 500))
drops.Add(new Drop("治愈戒指", 500))
drops.Add(new Drop("盟约戒指", 100))
drops.Add(new Drop("血玉环", 100))
drops.Add(new Drop("五行连环", 100))
drops.Add(new Drop("传送戒指", 3000))
drops.Add(new Drop("火焰戒指", 250))
drops.Add(new Drop("护身戒指", 3500))

// 护身符

// 腰带

// 鞋子

// 石头

// 火把

// 药水
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 2))
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("战神油", 5))

// 宝石
drops.Add(new Drop("回避神珠", 800))
drops.Add(new Drop("酷寒神珠", 325))
drops.Add(new Drop("集中神珠", 800))
drops.Add(new Drop("疾风神珠", 800))
drops.Add(new Drop("中毒神珠", 325))
drops.Add(new Drop("魔性神珠", 250))
drops.Add(new Drop("守护神珠", 200))
drops.Add(new Drop("仙界神珠", 250))
drops.Add(new Drop("勇猛神珠", 250))
drops.Add(new Drop("制魔神珠", 200))

// 坐骑

// 技能书
drops.Add(new Drop("诅咒术", 200))
drops.Add(new Drop("攻破斩", 50))
drops.Add(new Drop("护身气幕", 200))
drops.Add(new Drop("烈火身", 200))
drops.Add(new Drop("火龙气焰", 200))
drops.Add(new Drop("流星火雨", 400))
drops.Add(new Drop("毒云", 400))
drops.Add(new Drop("剑气爆", 400))
drops.Add(new Drop("轻身步", 400))
drops.Add(new Drop("召唤月灵", 200))
drops.Add(new Drop("阴阳盾", 600))
drops.Add(new Drop("嗜血术", 50))
drops.Add(new Drop("迷魂术", 50))
drops.Add(new Drop("捕绳剑", 50))
drops.Add(new Drop("月影术", 50))
drops.Add(new Drop("分身术", 50))
drops.Add(new Drop("狮子吼", 50))
drops.Add(new Drop("净化术", 50))
drops.Add(new Drop("双龙斩", 50))
drops.Add(new Drop("烈风击", 600))
drops.Add(new Drop("吸气", 50))

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
drops.Add(new Drop("金条", 30))

export default drops;
