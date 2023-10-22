import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(15000, 5));

// 武器
drops.Add(new Drop("冷月刀", 70))
drops.Add(new Drop("裁决之杖", 45))
drops.Add(new Drop("骨玉权杖", 45))
drops.Add(new Drop("无极棍", 45))
drops.Add(new Drop("暗黑刀", 45))
drops.Add(new Drop("魂魅弓", 45))
drops.Add(new Drop("龙牙", 70))
drops.Add(new Drop("怒斩", 70))
drops.Add(new Drop("逍遥扇", 70))
drops.Add(new Drop("霸王弓", 70))
drops.Add(new Drop("屠龙", 200))
drops.Add(new Drop("噬魂法杖", 200))
drops.Add(new Drop("龙纹剑", 200))
drops.Add(new Drop("修罗刀", 200))
drops.Add(new Drop("黄龙弓", 200))

// 衣服
drops.Add(new Drop("修罗血衣(女)", 30))
drops.Add(new Drop("StuddedArmour(女)", 30))
drops.Add(new Drop("修罗血衣(男)", 30))
drops.Add(new Drop("StuddedArmour(男)", 30))
drops.Add(new Drop("玄天宝衣(男)", 30))
drops.Add(new Drop("玄天宝衣(女)", 30))
drops.Add(new Drop("火龙魔衣(男)", 30))
drops.Add(new Drop("鬼面甲胄(女)", 30))
drops.Add(new Drop("鬼面甲胄(男)", 30))
drops.Add(new Drop("火龙魔衣(女)", 30))

// 头盔
drops.Add(new Drop("黑铁头盔", 20))
drops.Add(new Drop("勇士头盔", 20))
drops.Add(new Drop("英雄头盔", 20))
drops.Add(new Drop("贤者帽", 20))
drops.Add(new Drop("通天冠", 20))

// 项链
drops.Add(new Drop("绿色项链", 55))
drops.Add(new Drop("天珠项链", 35))
drops.Add(new Drop("生命项链", 35))
drops.Add(new Drop("幽灵项链", 35))
drops.Add(new Drop("蓝翡翠项链", 5))
drops.Add(new Drop("恶魔铃铛", 55))
drops.Add(new Drop("技巧项链", 100))
drops.Add(new Drop("金刚铃项链", 120))
drops.Add(new Drop("镇魂项链", 120))
drops.Add(new Drop("狂风项链", 90))
drops.Add(new Drop("水波颈饰", 120))
drops.Add(new Drop("灵魂项链", 55))

// 手镯
drops.Add(new Drop("黑铁手镯", 25))
drops.Add(new Drop("白驼手套", 85))
drops.Add(new Drop("八极轮", 55))
drops.Add(new Drop("抗魔轮", 55))
drops.Add(new Drop("伏魔轮", 60))
drops.Add(new Drop("魂锁轮", 85))
drops.Add(new Drop("太极轮", 85))
drops.Add(new Drop("阎罗手套", 10))
drops.Add(new Drop("龙之手镯", 40))
drops.Add(new Drop("三眼手镯", 20))
drops.Add(new Drop("心灵手镯", 40))
drops.Add(new Drop("骑士手镯", 20))
drops.Add(new Drop("金手镯", 5))
drops.Add(new Drop("思贝尔手镯", 20))

// 戒指
drops.Add(new Drop("太极环", 140))
drops.Add(new Drop("雷霆环", 140))
drops.Add(new Drop("无极环", 140))
drops.Add(new Drop("鬼刃环", 80))
drops.Add(new Drop("奥玛环", 80))
drops.Add(new Drop("泰坦戒指", 75))
drops.Add(new Drop("紫碧螺", 75))
drops.Add(new Drop("力量戒指", 75))
drops.Add(new Drop("铂金戒指", 50))
drops.Add(new Drop("心意环", 80))
drops.Add(new Drop("龙之戒指", 50))
drops.Add(new Drop("红宝石戒指", 50))

// 护身符

// 腰带
drops.Add(new Drop("铁腰带", 10))
drops.Add(new Drop("钢铁腰带", 15))
drops.Add(new Drop("黄金腰带", 40))

// 鞋子
drops.Add(new Drop("紫绸靴", 10))
drops.Add(new Drop("避魂靴", 15))
drops.Add(new Drop("龙靴", 50))

// 石头

// 火把

// 药水
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("疾风药水(小)", 60))
drops.Add(new Drop("超级魔法药", 1))
drops.Add(new Drop("魔法药水(小)", 60))
drops.Add(new Drop("攻击药水(小)", 60))
drops.Add(new Drop("道力药水(小)", 60))
drops.Add(new Drop("魔力药水(小)", 60))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("体力药水(小)", 60))
drops.Add(new Drop("超级金疮药", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("太阳水", 1))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 10))

// 宝石
drops.Add(new Drop("强化神珠", 125))
drops.Add(new Drop("守护神珠", 300))
drops.Add(new Drop("制魔神珠", 300))
drops.Add(new Drop("魔性神珠", 350))
drops.Add(new Drop("酷寒神珠", 600))
drops.Add(new Drop("勇猛神珠", 300))
drops.Add(new Drop("中毒神珠", 500))
drops.Add(new Drop("仙界神珠", 200))

// 坐骑

// 技能书
drops.Add(new Drop("火龙气焰", 90))
drops.Add(new Drop("迷魂术", 50))

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
