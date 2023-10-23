import DropList from "../../common.mjs";
const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const drops = new DropList<CS.Daboluo.Mir2.MirScripts.DropInfoDefinition>();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(35000, 1));

// 武器
drops.Add(new Drop("玄天", 400))
drops.Add(new Drop("地狱魔弓", 400))
drops.Add(new Drop("暗真魔刀", 400))
drops.Add(new Drop("裁决之杖", 35))
drops.Add(new Drop("骨玉权杖", 35))
drops.Add(new Drop("无极棍", 35))
drops.Add(new Drop("暗黑刀", 35))
drops.Add(new Drop("魂魅弓", 35))
drops.Add(new Drop("镇天", 400))
drops.Add(new Drop("怒斩", 150))
drops.Add(new Drop("龙牙", 150))
drops.Add(new Drop("冷月刀", 150))
drops.Add(new Drop("霸王弓", 150))
drops.Add(new Drop("屠龙", 200))
drops.Add(new Drop("噬魂法杖", 200))
drops.Add(new Drop("龙纹剑", 200))
drops.Add(new Drop("修罗刀", 200))
drops.Add(new Drop("黄龙弓", 200))
drops.Add(new Drop("开天", 400))
drops.Add(new Drop("逍遥扇", 150))

// 衣服
drops.Add(new Drop("鬼面甲胄(男)", 5))
drops.Add(new Drop("鬼面甲胄(女)", 5))
drops.Add(new Drop("火龙魔衣(男)", 5))
drops.Add(new Drop("火龙魔衣(女)", 5))
drops.Add(new Drop("玄天宝衣(男)", 5))
drops.Add(new Drop("玄天宝衣(女)", 5))
drops.Add(new Drop("修罗血衣(女)", 5))
drops.Add(new Drop("黄龙衣(男)", 5))
drops.Add(new Drop("玉魔甲(女)", 500))
drops.Add(new Drop("玉魔甲(男)", 500))
drops.Add(new Drop("修罗血衣(男)", 5))
drops.Add(new Drop("绿之魔甲(女)", 500))
drops.Add(new Drop("绿之魔甲(男)", 500))
drops.Add(new Drop("青之魔甲(女)", 500))
drops.Add(new Drop("青之魔甲(男)", 500))
drops.Add(new Drop("黑之魔甲(男)", 500))
drops.Add(new Drop("赤之魔甲(男)", 500))
drops.Add(new Drop("天衣无缝(女)", 1000))
drops.Add(new Drop("天衣无缝(男)", 1000))
drops.Add(new Drop("破凰天魔衣(女)", 500))
drops.Add(new Drop("破凰天魔衣(男)", 500))
drops.Add(new Drop("黄龙衣(女)", 5))
drops.Add(new Drop("赤之魔甲(女)", 500))
drops.Add(new Drop("黑之魔甲(女)", 500))

// 头盔
drops.Add(new Drop("道士头盔", 5))
drops.Add(new Drop("钢铁头盔", 10))
drops.Add(new Drop("黄铜头盔", 10))
drops.Add(new Drop("黑铁头盔", 30))
drops.Add(new Drop("勇士头盔", 10))
drops.Add(new Drop("英雄头盔", 35))
drops.Add(new Drop("贤者帽", 40))
drops.Add(new Drop("通天冠", 40))
drops.Add(new Drop("骷髅头盔", 5))

// 项链
drops.Add(new Drop("放大镜", 5))
drops.Add(new Drop("技巧项链", 500))
drops.Add(new Drop("镇魂项链", 60))
drops.Add(new Drop("金刚铃项链", 60))
drops.Add(new Drop("水波颈饰", 60))
drops.Add(new Drop("灵魂项链", 20))
drops.Add(new Drop("恶魔铃铛", 20))
drops.Add(new Drop("绿色项链", 20))
drops.Add(new Drop("狂风项链", 30))
drops.Add(new Drop("竹笛", 5))
drops.Add(new Drop("蓝翡翠项链", 5))
drops.Add(new Drop("白色虎齿项链", 5))
drops.Add(new Drop("灯笼项链", 5))

// 手镯
drops.Add(new Drop("龙之手镯", 20))
drops.Add(new Drop("骑士手镯", 20))
drops.Add(new Drop("金手镯", 5))
drops.Add(new Drop("死神手套", 5))
drops.Add(new Drop("心灵手镯", 20))
drops.Add(new Drop("幽灵手套", 5))
drops.Add(new Drop("阎罗手套", 20))
drops.Add(new Drop("伏魔轮", 70))
drops.Add(new Drop("抗魔轮", 70))
drops.Add(new Drop("白驼手套", 90))
drops.Add(new Drop("魂锁轮", 90))
drops.Add(new Drop("太极轮", 90))
drops.Add(new Drop("八极轮", 70))

// 戒指
drops.Add(new Drop("魅力戒指", 5))
drops.Add(new Drop("复活戒指", 3000))
drops.Add(new Drop("麻痹戒指", 5000))
drops.Add(new Drop("护身戒指", 2500))
drops.Add(new Drop("狂风戒指", 15))
drops.Add(new Drop("珊瑚戒指", 5))
drops.Add(new Drop("降妖除魔戒指", 5))
drops.Add(new Drop("道德戒指", 5))
drops.Add(new Drop("骷髅戒指", 5))
drops.Add(new Drop("力量戒指", 25))
drops.Add(new Drop("紫碧螺", 25))
drops.Add(new Drop("奥玛环", 50))
drops.Add(new Drop("鬼刃环", 60))
drops.Add(new Drop("心意环", 60))
drops.Add(new Drop("无极环", 70))
drops.Add(new Drop("雷霆环", 70))
drops.Add(new Drop("太极环", 70))
drops.Add(new Drop("传送戒指", 2500))
drops.Add(new Drop("泰坦戒指", 25))

// 护身符

// 腰带
drops.Add(new Drop("黄金腰带", 50))
drops.Add(new Drop("青铜腰带", 10))
drops.Add(new Drop("铁腰带", 15))

// 鞋子
drops.Add(new Drop("紫绸靴", 10))
drops.Add(new Drop("避魂靴", 20))
drops.Add(new Drop("龙靴", 30))

// 石头

// 火把

// 药水
drops.Add(new Drop("疾风药水(大)", 10))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("道力药水(大)", 10))
drops.Add(new Drop("魔法药水(大)", 10))
drops.Add(new Drop("攻击药水(大)", 10))
drops.Add(new Drop("苹果", 15))
drops.Add(new Drop("苹果", 10))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("金疮药(特大)", 2))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("邪眼骷髅", 20))

// 卷轴
drops.Add(new Drop("祝福油", 2))
drops.Add(new Drop("祝福油", 5))

// 宝石
drops.Add(new Drop("觉醒神珠", 200))
drops.Add(new Drop("忍耐神珠", 200))
drops.Add(new Drop("酷寒神珠", 300))
drops.Add(new Drop("中毒神珠", 300))
drops.Add(new Drop("回避神珠", 140))
drops.Add(new Drop("强化神珠", 130))
drops.Add(new Drop("魔性神珠", 100))
drops.Add(new Drop("仙界神珠", 100))
drops.Add(new Drop("勇猛神珠", 100))
drops.Add(new Drop("集中神珠", 140))

// 坐骑

// 技能书
drops.Add(new Drop("火龙气焰", 200))
drops.Add(new Drop("召唤月灵", 120))
drops.Add(new Drop("噬血术", 160))
drops.Add(new Drop("迷魂术", 160))
drops.Add(new Drop("捕绳剑", 160))
drops.Add(new Drop("分身术", 120))
drops.Add(new Drop("狮子吼", 50))
drops.Add(new Drop("诅咒术", 200))
drops.Add(new Drop("双龙斩", 100))
drops.Add(new Drop("气功波", 50))
drops.Add(new Drop("无极真气", 100))
drops.Add(new Drop("灭天火", 100))
drops.Add(new Drop("圆月弯刀", 100))
drops.Add(new Drop("空破闪", 200))
drops.Add(new Drop("净化术", 50))

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
drops.Add(new Drop("金条", 10))
drops.Add(new Drop("金砖", 50))
drops.Add(new Drop("金盒", 500))

export default drops;
