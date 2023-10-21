import DropList from "../../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(20000, 5));

// 武器
drops.Add(new Drop("火莲杖", 350))
drops.Add(new Drop("黑乌刀", 350))
drops.Add(new Drop("鹤羽扇", 350))
drops.Add(new Drop("龙牙", 60))
drops.Add(new Drop("黑虎斧", 350))
drops.Add(new Drop("逍遥扇", 60))
drops.Add(new Drop("冷月刀", 60))
drops.Add(new Drop("LitheBow", 60))
drops.Add(new Drop("怒斩", 60))

// 衣服
drops.Add(new Drop("鬼面甲胄(男)", 30))
drops.Add(new Drop("鬼面甲胄(女)", 30))
drops.Add(new Drop("火龙魔衣(男)", 30))
drops.Add(new Drop("火龙魔衣(女)", 30))
drops.Add(new Drop("玄天宝衣(男)", 30))
drops.Add(new Drop("玄天宝衣(女)", 30))
drops.Add(new Drop("修罗血衣(男)", 30))
drops.Add(new Drop("StuddedArmour(男)", 30))
drops.Add(new Drop("StuddedArmour(女)", 30))
drops.Add(new Drop("黑虎甲胄(男)", 350))
drops.Add(new Drop("莲盛魔衣(男)", 350))
drops.Add(new Drop("莲盛魔衣(女)", 350))
drops.Add(new Drop("鹤羽圣衣(男)", 350))
drops.Add(new Drop("鹤羽圣衣(女)", 350))
drops.Add(new Drop("黑乌飞甲(女)", 350))
drops.Add(new Drop("修罗血衣(女)", 30))
drops.Add(new Drop("黑虎甲胄(女)", 350))
drops.Add(new Drop("黑乌飞甲(男)", 350))

// 头盔
drops.Add(new Drop("贤者帽", 60))
drops.Add(new Drop("修罗头盔", 60))
drops.Add(new Drop("英雄头盔", 60))
drops.Add(new Drop("通天冠", 60))

// 项链
drops.Add(new Drop("昆仑眼泪", 300))
drops.Add(new Drop("魔玉电影", 300))
drops.Add(new Drop("魔神鬼影", 300))
drops.Add(new Drop("镇魂项链", 110))
drops.Add(new Drop("金刚铃项链", 110))
drops.Add(new Drop("水波颈饰", 110))

// 手镯
drops.Add(new Drop("抗魔轮", 50))
drops.Add(new Drop("玉女天使", 300))
drops.Add(new Drop("曜火虹轮", 300))
drops.Add(new Drop("铁魔双轮", 300))
drops.Add(new Drop("太极轮", 90))
drops.Add(new Drop("魂锁轮", 90))
drops.Add(new Drop("白驼手套", 90))
drops.Add(new Drop("伏魔轮", 50))
drops.Add(new Drop("八极轮", 50))
drops.Add(new Drop("精钢手镯", 50))

// 戒指
drops.Add(new Drop("五行连环", 300))
drops.Add(new Drop("盟约戒指", 300))
drops.Add(new Drop("血玉环", 300))
drops.Add(new Drop("无极环", 40))
drops.Add(new Drop("雷霆环", 40))
drops.Add(new Drop("太极环", 40))
drops.Add(new Drop("奥玛环", 40))
drops.Add(new Drop("心意环", 40))
drops.Add(new Drop("鬼刃环", 40))

// 护身符

// 腰带
drops.Add(new Drop("黄金腰带", 30))
drops.Add(new Drop("金刚腰带", 30))

// 鞋子
drops.Add(new Drop("避魂靴", 20))
drops.Add(new Drop("赤鳞靴", 70))
drops.Add(new Drop("龙靴", 50))

// 石头

// 火把

// 药水
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(特大)", 1))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 5))

// 宝石
drops.Add(new Drop("集中神珠", 200))
drops.Add(new Drop("酷寒神珠", 200))
drops.Add(new Drop("中毒神珠", 200))
drops.Add(new Drop("强化神珠", 200))
drops.Add(new Drop("制魔神珠", 200))
drops.Add(new Drop("守护神珠", 200))
drops.Add(new Drop("魔性神珠", 200))
drops.Add(new Drop("仙界神珠", 200))
drops.Add(new Drop("勇猛神珠", 200))
drops.Add(new Drop("忍耐神珠", 200))
drops.Add(new Drop("疾风神珠", 200))

// 坐骑

// 技能书
drops.Add(new Drop("幽灵盾", 100))
drops.Add(new Drop("护身气幕", 300))
drops.Add(new Drop("攻破斩", 100))
drops.Add(new Drop("嗜血术", 100))
drops.Add(new Drop("分身术", 200))
drops.Add(new Drop("天霜冰环", 500))
drops.Add(new Drop("复活术", 300))
drops.Add(new Drop("毒云", 300))
drops.Add(new Drop("无极真气", 100))
drops.Add(new Drop("反击", 1000))
drops.Add(new Drop("深延术", 1000))
drops.Add(new Drop("气功波", 100))
drops.Add(new Drop("瘟疫", 1000))
drops.Add(new Drop("吸气", 1000))
drops.Add(new Drop("复活术", 1000))
drops.Add(new Drop("攻破斩", 1000))
drops.Add(new Drop("诅咒术", 1000))
drops.Add(new Drop("火龙气焰", 1000))
drops.Add(new Drop("轻身步", 500))
drops.Add(new Drop("吸气", 300))
drops.Add(new Drop("月影术", 200))
drops.Add(new Drop("猛毒剑气", 200))
drops.Add(new Drop("捕缚术", 100))
drops.Add(new Drop("烈风击", 100))
drops.Add(new Drop("血风击", 1000))

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
