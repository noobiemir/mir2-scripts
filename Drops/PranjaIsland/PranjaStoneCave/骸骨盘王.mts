import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// 格式:drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

//钱
drops.Add(new Drop(15000, 1));

//武器
drops.Add(new Drop("屠龙", 200))
drops.Add(new Drop("暗黑刀", 45))
drops.Add(new Drop("FiendBow", 45))
drops.Add(new Drop("龙牙", 125))
drops.Add(new Drop("怒斩", 125))
drops.Add(new Drop("逍遥扇", 125))
drops.Add(new Drop("冷月刀", 125))
drops.Add(new Drop("LitheBow", 125))
drops.Add(new Drop("裁决之杖", 45))
drops.Add(new Drop("噬魂法杖", 200))
drops.Add(new Drop("龙纹剑", 200))
drops.Add(new Drop("修罗刀", 200))
drops.Add(new Drop("MaleficBow", 200))
drops.Add(new Drop("开天", 500))
drops.Add(new Drop("镇天", 500))
drops.Add(new Drop("玄天", 500))
drops.Add(new Drop("暗真魔刀", 500))
drops.Add(new Drop("BowOfForce", 500))
drops.Add(new Drop("无极棍", 45))
drops.Add(new Drop("骨玉权杖", 45))

//衣服
drops.Add(new Drop("恶魔长袍(女)", 5))
drops.Add(new Drop("天衣无缝(女)", 1800))
drops.Add(new Drop("战神盔甲(男)", 5))
drops.Add(new Drop("幽灵战衣(男)", 5))
drops.Add(new Drop("幽灵战衣(女)", 5))
drops.Add(new Drop("炎红战衣(男)", 5))
drops.Add(new Drop("炎红战衣(女)", 5))
drops.Add(new Drop("天衣无缝(男)", 1800))
drops.Add(new Drop("战神盔甲(女)", 5))
drops.Add(new Drop("StuddedArmour(男)", 40))
drops.Add(new Drop("修罗血衣(女)", 40))
drops.Add(new Drop("修罗血衣(男)", 40))
drops.Add(new Drop("玄天宝衣(女)", 40))
drops.Add(new Drop("StuddedArmour(女)", 40))
drops.Add(new Drop("火龙魔衣(女)", 40))
drops.Add(new Drop("玄天宝衣(男)", 40))
drops.Add(new Drop("TemperedArmour(男)", 5))
drops.Add(new Drop("TemperedArmour(女)", 5))
drops.Add(new Drop("恶魔长袍(男)", 5))
drops.Add(new Drop("鬼面甲胄(女)", 40))
drops.Add(new Drop("火龙魔衣(男)", 40))
drops.Add(new Drop("鬼面甲胄(男)", 40))

//头盔
drops.Add(new Drop("黑铁头盔", 70))
drops.Add(new Drop("勇士头盔", 90))
drops.Add(new Drop("通天冠", 150))
drops.Add(new Drop("修罗头盔", 150))
drops.Add(new Drop("黄铜头盔", 10))
drops.Add(new Drop("钢铁头盔", 15))
drops.Add(new Drop("道士头盔", 5))
drops.Add(new Drop("骷髅头盔", 5))
drops.Add(new Drop("英雄头盔", 150))
drops.Add(new Drop("贤者帽", 150))

//项链
drops.Add(new Drop("白色虎齿项链", 5))
drops.Add(new Drop("狂风项链", 80))
drops.Add(new Drop("绿色项链", 80))
drops.Add(new Drop("恶魔铃铛", 80))
drops.Add(new Drop("灵魂项链", 80))
drops.Add(new Drop("幽灵项链", 45))
drops.Add(new Drop("生命项链", 45))
drops.Add(new Drop("天珠项链", 45))
drops.Add(new Drop("灯笼项链", 5))

//手镯
drops.Add(new Drop("骑士手镯", 75))
drops.Add(new Drop("龙之手镯", 75))
drops.Add(new Drop("阎罗手套", 55))
drops.Add(new Drop("思贝尔手镯", 30))
drops.Add(new Drop("三眼手镯", 30))
drops.Add(new Drop("抗魔轮", 100))
drops.Add(new Drop("伏魔轮", 100))
drops.Add(new Drop("八极轮", 100))
drops.Add(new Drop("魂锁轮", 250))
drops.Add(new Drop("太极轮", 250))
drops.Add(new Drop("白驼手套", 250))
drops.Add(new Drop("心灵手镯", 75))

//戒指
drops.Add(new Drop("力量戒指", 50))
drops.Add(new Drop("铂金戒指", 25))
drops.Add(new Drop("紫碧螺", 50))
drops.Add(new Drop("鬼刃环", 100))
drops.Add(new Drop("奥玛环", 100))
drops.Add(new Drop("麻痹戒指", 4000))
drops.Add(new Drop("护身戒指", 4000))
drops.Add(new Drop("珊瑚戒指", 5))
drops.Add(new Drop("降妖除魔戒指", 5))
drops.Add(new Drop("狂风戒指", 10))
drops.Add(new Drop("太极环", 250))
drops.Add(new Drop("雷霆环", 250))
drops.Add(new Drop("无极环", 250))
drops.Add(new Drop("泰坦戒指", 50))
drops.Add(new Drop("龙之戒指", 25))
drops.Add(new Drop("心意环", 100))
drops.Add(new Drop("红宝石戒指", 25))

//护身符

//腰带
drops.Add(new Drop("金刚腰带", 60))
drops.Add(new Drop("黄金腰带", 30))
drops.Add(new Drop("青铜腰带", 30))
drops.Add(new Drop("铁腰带", 20))

//鞋子
drops.Add(new Drop("紫绸靴", 20))
drops.Add(new Drop("避魂靴", 20))
drops.Add(new Drop("龙靴", 30))
drops.Add(new Drop("赤鳞靴", 45))

//石头

//火把

//药水
drops.Add(new Drop("攻击药水(中)", 30))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药水(中)", 30))
drops.Add(new Drop("道力药水(中)", 30))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("疾风药水(中)", 30))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(特大)", 1))

//矿石

//肉

//工艺材料

//卷轴
drops.Add(new Drop("祝福油", 3))
drops.Add(new Drop("祝福油", 10))
drops.Add(new Drop("战神油", 5))

//宝石
drops.Add(new Drop("制魔神珠", 300))
drops.Add(new Drop("回避神珠", 300))
drops.Add(new Drop("中毒神珠", 300))
drops.Add(new Drop("集中神珠", 300))
drops.Add(new Drop("守护神珠", 300))
drops.Add(new Drop("酷寒神珠", 300))
drops.Add(new Drop("魔性神珠", 300))
drops.Add(new Drop("勇猛神珠", 300))
drops.Add(new Drop("强化神珠", 300))
drops.Add(new Drop("仙界神珠", 300))

//坐骑

//技能书
drops.Add(new Drop("攻破斩", 100))
drops.Add(new Drop("无极真气", 70))
drops.Add(new Drop("分身术", 600))
drops.Add(new Drop("召唤月灵", 500))
drops.Add(new Drop("火龙术", 70))
drops.Add(new Drop("圆月弯刀", 70))
drops.Add(new Drop("吸气", 100))
drops.Add(new Drop("捕缚术", 35))
drops.Add(new Drop("烈火剑法", 35))
drops.Add(new Drop("召唤神兽", 35))
drops.Add(new Drop("冰咆哮", 35))
drops.Add(new Drop("月影术", 100))
drops.Add(new Drop("猛毒剑气", 35))

//杂物

//缰绳

//铃铛

//马鞍

//丝带

//面具

//食物

//钩

//浮标

//饵

//探鱼器

//鱼线轮

//鱼

//任务

//觉醒

//宠物

//变身

//其它
drops.Add(new Drop("金条", 100))

export default drops;
