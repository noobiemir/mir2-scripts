import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(20000, 1));

// 武器
drops.Add(new Drop("龙纹剑", 550))
drops.Add(new Drop("祖玛无极棍", 170))
drops.Add(new Drop("LitheBow", 225))
drops.Add(new Drop("怒斩", 225))
drops.Add(new Drop("逍遥扇", 225))
drops.Add(new Drop("裁决之杖", 300))
drops.Add(new Drop("FiendBow", 300))
drops.Add(new Drop("骨玉权杖", 300))
drops.Add(new Drop("无极棍", 300))
drops.Add(new Drop("MaleficBow", 550))
drops.Add(new Drop("屠龙", 550))
drops.Add(new Drop("噬魂法杖", 550))
drops.Add(new Drop("开天", 800))
drops.Add(new Drop("BowOfForce", 800))
drops.Add(new Drop("镇天", 800))
drops.Add(new Drop("玄天", 800))
drops.Add(new Drop("祖玛骨玉权杖", 170))
drops.Add(new Drop("祖玛裁决之杖", 170))
drops.Add(new Drop("龙牙", 225))

// 衣服
drops.Add(new Drop("鬼面甲胄(女)", 35))
drops.Add(new Drop("恶魔长袍(女)", 30))
drops.Add(new Drop("恶魔长袍(男)", 30))
drops.Add(new Drop("TemperedArmour(女)", 40))
drops.Add(new Drop("TemperedArmour(男)", 40))
drops.Add(new Drop("战神盔甲(女)", 30))
drops.Add(new Drop("战神盔甲(男)", 30))
drops.Add(new Drop("鬼面甲胄(男)", 35))
drops.Add(new Drop("火龙魔衣(男)", 35))
drops.Add(new Drop("幽灵战衣(女)", 30))
drops.Add(new Drop("火龙魔衣(女)", 35))
drops.Add(new Drop("玄天宝衣(男)", 35))
drops.Add(new Drop("玄天宝衣(女)", 35))
drops.Add(new Drop("幽灵战衣(男)", 30))
drops.Add(new Drop("天衣无缝(男)", 10000))
drops.Add(new Drop("天衣无缝(女)", 10000))

// 头盔
drops.Add(new Drop("黑铁头盔", 20))
drops.Add(new Drop("黄金头盔", 15))
drops.Add(new Drop("贤者帽", 70))
drops.Add(new Drop("修罗头盔", 70))
drops.Add(new Drop("骷髅头盔", 10))
drops.Add(new Drop("通天冠", 70))
drops.Add(new Drop("道士头盔", 10))
drops.Add(new Drop("英雄头盔", 70))
drops.Add(new Drop("勇士头盔", 20))

// 项链
drops.Add(new Drop("蓝翡翠项链", 15))
drops.Add(new Drop("灯笼项链", 10))
drops.Add(new Drop("白色虎齿项链", 10))
drops.Add(new Drop("放大镜", 15))
drops.Add(new Drop("生命项链", 30))
drops.Add(new Drop("幽灵项链", 30))
drops.Add(new Drop("五玄项链", 275))
drops.Add(new Drop("狂风项链", 300))
drops.Add(new Drop("镇魂项链", 80))
drops.Add(new Drop("金刚铃项链", 80))
drops.Add(new Drop("SurvivalNecklace", 275))
drops.Add(new Drop("灵魂项链", 65))
drops.Add(new Drop("恶魔铃铛", 65))
drops.Add(new Drop("绿色项链", 65))
drops.Add(new Drop("天珠项链", 30))
drops.Add(new Drop("水波颈饰", 80))
drops.Add(new Drop("竹笛", 15))

// 手镯
drops.Add(new Drop("三眼手镯", 40))
drops.Add(new Drop("龙之手镯", 85))
drops.Add(new Drop("阎罗手套", 100))
drops.Add(new Drop("八极轮", 300))
drops.Add(new Drop("抗魔轮", 300))
drops.Add(new Drop("伏魔轮", 300))
drops.Add(new Drop("五玄手镯", 375))
drops.Add(new Drop("SurvivalBracelet", 375))
drops.Add(new Drop("骑士手镯", 85))

// 戒指
drops.Add(new Drop("奥玛环", 300))
drops.Add(new Drop("SurvivalRing", 320))
drops.Add(new Drop("五玄戒指", 320))
drops.Add(new Drop("心意环", 300))
drops.Add(new Drop("鬼刃环", 300))
drops.Add(new Drop("狂风戒指", 100))
drops.Add(new Drop("泰坦戒指", 95))
drops.Add(new Drop("紫碧螺", 95))
drops.Add(new Drop("力量戒指", 95))

// 护身符

// 腰带
drops.Add(new Drop("金刚腰带", 50))
drops.Add(new Drop("黄金腰带", 30))
drops.Add(new Drop("钢铁腰带", 20))

// 鞋子
drops.Add(new Drop("龙靴", 30))
drops.Add(new Drop("避魂靴", 20))
drops.Add(new Drop("紫绸靴", 10))
drops.Add(new Drop("赤鳞靴", 50))

// 石头
drops.Add(new Drop("道术守护石", 200))
drops.Add(new Drop("魔法守护石", 200))
drops.Add(new Drop("攻击守护石", 200))
drops.Add(new Drop("能力守护石", 200))
drops.Add(new Drop("魔力守护石", 200))
drops.Add(new Drop("生命守护石", 200))

// 火把

// 药水
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 3))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 3))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 3))
drops.Add(new Drop("魔法药(大量)", 3))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 15))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("复活术", 90))
drops.Add(new Drop("召唤月灵", 120))
drops.Add(new Drop("猛毒剑气", 75))
drops.Add(new Drop("诅咒术", 210))
drops.Add(new Drop("体迅风", 40))
drops.Add(new Drop("拔刀术", 45))
drops.Add(new Drop("风身术", 50))
drops.Add(new Drop("迁移剑", 55))
drops.Add(new Drop("烈风击", 60))
drops.Add(new Drop("捕缚术", 70))
drops.Add(new Drop("召唤神兽", 85))
drops.Add(new Drop("月影术", 80))
drops.Add(new Drop("BindingShot", 120))
drops.Add(new Drop("轻身步", 210))
drops.Add(new Drop("Meditation", 40))
drops.Add(new Drop("ElementalShot", 40))
drops.Add(new Drop("ExplosiveTrap", 40))
drops.Add(new Drop("Concentration", 45))
drops.Add(new Drop("VampireShot", 45))
drops.Add(new Drop("SummonVampire", 50))
drops.Add(new Drop("BackStep", 55))
drops.Add(new Drop("DelayedExplosion", 60))
drops.Add(new Drop("HealingCircle", 80))
drops.Add(new Drop("ElementalBarrier", 60))
drops.Add(new Drop("SummonToad", 210))
drops.Add(new Drop("吸气", 120))
drops.Add(new Drop("无极真气", 75))
drops.Add(new Drop("CrippleShot", 210))
drops.Add(new Drop("群体治疗术", 65))
drops.Add(new Drop("PoisonShot", 210))
drops.Add(new Drop("野蛮冲撞", 40))
drops.Add(new Drop("双龙斩", 50))
drops.Add(new Drop("捕绳剑", 55))
drops.Add(new Drop("烈火剑法", 65))
drops.Add(new Drop("狮子吼", 70))
drops.Add(new Drop("圆月弯刀", 80))
drops.Add(new Drop("攻破斩", 85))
drops.Add(new Drop("护身气幕", 120))
drops.Add(new Drop("剑气爆", 210))
drops.Add(new Drop("迷魂术", 70))
drops.Add(new Drop("疾光电影", 45))
drops.Add(new Drop("火墙", 40))
drops.Add(new Drop("地狱雷光", 55))
drops.Add(new Drop("魔法盾", 60))
drops.Add(new Drop("冰咆哮", 65))
drops.Add(new Drop("火龙术", 70))
drops.Add(new Drop("分身术", 120))
drops.Add(new Drop("火龙气焰", 210))
drops.Add(new Drop("心灵启示", 40))
drops.Add(new Drop("神圣战甲术", 45))
drops.Add(new Drop("气功波", 50))
drops.Add(new Drop("困魔咒", 55))
drops.Add(new Drop("净化术", 60))
drops.Add(new Drop("寒冰掌", 50))

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
drops.Add(new Drop("觉醒之魂0", 40))
drops.Add(new Drop("觉醒之魂0", 40))

// 宠物

// 变身

// 其它

export default drops;
