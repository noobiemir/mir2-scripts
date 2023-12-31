import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{权重}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 权重：物品掉落率为 1 ÷ {权重}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(15000, 1));

// 武器
drops.Add(new Drop("噬魂法杖", 550))
drops.Add(new Drop("龙纹剑", 550))
drops.Add(new Drop("修罗刀", 550))
drops.Add(new Drop("黄龙弓", 550))
drops.Add(new Drop("开天", 800))
drops.Add(new Drop("镇天", 800))
drops.Add(new Drop("霸王弓", 225))
drops.Add(new Drop("玄天", 800))
drops.Add(new Drop("地狱魔弓", 800))
drops.Add(new Drop("祖玛裁决之杖", 170))
drops.Add(new Drop("祖玛骨玉权杖", 170))
drops.Add(new Drop("祖玛无极棍", 170))
drops.Add(new Drop("祖玛暗黑刀", 170))
drops.Add(new Drop("祖玛之魂魅弓", 170))
drops.Add(new Drop("暗真魔刀", 800))
drops.Add(new Drop("冷月刀", 225))
drops.Add(new Drop("屠龙", 550))
drops.Add(new Drop("怒斩", 225))
drops.Add(new Drop("凝霜", 50))
drops.Add(new Drop("炼狱", 50))
drops.Add(new Drop("魔杖", 50))
drops.Add(new Drop("银蛇", 50))
drops.Add(new Drop("双极刀", 50))
drops.Add(new Drop("逍遥扇", 225))
drops.Add(new Drop("井中月", 50))
drops.Add(new Drop("满义弓", 50))
drops.Add(new Drop("裁决之杖", 280))
drops.Add(new Drop("骨玉权杖", 280))
drops.Add(new Drop("无极棍", 280))
drops.Add(new Drop("暗黑刀", 280))
drops.Add(new Drop("魂魅弓", 280))
drops.Add(new Drop("龙牙", 225))
drops.Add(new Drop("血饮", 50))

// 衣服
drops.Add(new Drop("黄龙衣(男)", 55))
drops.Add(new Drop("天衣无缝(女)", 1000))
drops.Add(new Drop("天衣无缝(男)", 1000))
drops.Add(new Drop("黄龙衣(女)", 55))
drops.Add(new Drop("修罗血衣(女)", 55))
drops.Add(new Drop("修罗血衣(男)", 55))
drops.Add(new Drop("玄天宝衣(男)", 55))
drops.Add(new Drop("火龙魔衣(女)", 55))
drops.Add(new Drop("火龙魔衣(男)", 55))
drops.Add(new Drop("鬼面甲胄(女)", 55))
drops.Add(new Drop("鬼面甲胄(男)", 55))
drops.Add(new Drop("玄天宝衣(女)", 55))

// 头盔
drops.Add(new Drop("黑铁头盔", 80))
drops.Add(new Drop("骷髅头盔", 5))
drops.Add(new Drop("道士头盔", 5))
drops.Add(new Drop("勇士头盔", 80))
drops.Add(new Drop("英雄头盔", 70))
drops.Add(new Drop("贤者帽", 70))
drops.Add(new Drop("通天冠", 70))

// 项链
drops.Add(new Drop("天珠项链", 40))
drops.Add(new Drop("生命项链", 40))
drops.Add(new Drop("幽灵项链", 40))
drops.Add(new Drop("技巧项链", 400))
drops.Add(new Drop("恶魔铃铛", 65))
drops.Add(new Drop("绿色项链", 65))
drops.Add(new Drop("狂风项链", 100))
drops.Add(new Drop("灵魂项链", 65))

// 手镯
drops.Add(new Drop("三眼手镯", 40))
drops.Add(new Drop("死神手套", 5))
drops.Add(new Drop("金手镯", 5))
drops.Add(new Drop("幽灵手套", 5))
drops.Add(new Drop("思贝尔手镯", 40))
drops.Add(new Drop("骑士手镯", 85))
drops.Add(new Drop("龙之手镯", 85))
drops.Add(new Drop("心灵手镯", 85))
drops.Add(new Drop("黑铁手镯", 35))
drops.Add(new Drop("阎罗手套", 65))

// 戒指
drops.Add(new Drop("治愈戒指", 4000))
drops.Add(new Drop("复活戒指", 40000))
drops.Add(new Drop("火焰戒指", 4000))
drops.Add(new Drop("护身戒指", 40000))
drops.Add(new Drop("泰坦戒指", 95))
drops.Add(new Drop("麻痹戒指", 40000))
drops.Add(new Drop("隐身戒指", 4000))
drops.Add(new Drop("狂风戒指", 10))
drops.Add(new Drop("护身戒指", 40000))
drops.Add(new Drop("力量戒指", 95))
drops.Add(new Drop("紫碧螺", 95))
drops.Add(new Drop("红宝石戒指", 35))
drops.Add(new Drop("龙之戒指", 35))
drops.Add(new Drop("狂风戒指", 10))
drops.Add(new Drop("珊瑚戒指", 5))
drops.Add(new Drop("降妖除魔戒指", 5))
drops.Add(new Drop("道德戒指", 5))
drops.Add(new Drop("魅力戒指", 5))
drops.Add(new Drop("生铁戒指", 5))
drops.Add(new Drop("骷髅戒指", 5))
drops.Add(new Drop("铂金戒指", 35))

// 护身符
drops.Add(new Drop("复活符", 5))

// 腰带
drops.Add(new Drop("黄金腰带", 100))
drops.Add(new Drop("金刚腰带", 150))

// 鞋子
drops.Add(new Drop("赤鳞靴", 150))
drops.Add(new Drop("龙靴", 100))

// 石头

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("攻击药水(中)", 30))
drops.Add(new Drop("魔法药水(中)", 30))
drops.Add(new Drop("道力药水(中)", 30))
drops.Add(new Drop("疾风药水(中)", 30))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("魔力药水(中)", 30))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("体力药水(中)", 30))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("金疮药(大量)", 1))

// 矿石

// 肉

// 工艺材料
drops.Add(new Drop("祖玛头像", 10))

// 卷轴
drops.Add(new Drop("祝福油", 5))
drops.Add(new Drop("祝福油", 2))

// 宝石
drops.Add(new Drop("勇猛神珠", 350))
drops.Add(new Drop("魔性神珠", 350))
drops.Add(new Drop("仙界神珠", 350))

// 坐骑

// 技能书
drops.Add(new Drop("无极真气", 30))
drops.Add(new Drop("气功波", 30))
drops.Add(new Drop("召唤神兽", 25))
drops.Add(new Drop("召唤月灵", 200))
drops.Add(new Drop("诅咒术", 200))
drops.Add(new Drop("复活术", 200))
drops.Add(new Drop("毒云", 400))
drops.Add(new Drop("拔刀术", 175))
drops.Add(new Drop("猛毒剑气", 50))
drops.Add(new Drop("月影术", 50))
drops.Add(new Drop("吸气", 50))
drops.Add(new Drop("烈火身", 200))
drops.Add(new Drop("轻身步", 400))
drops.Add(new Drop("阴阳盾", 600))
drops.Add(new Drop("净化术", 50))
drops.Add(new Drop("烈风击", 400))
drops.Add(new Drop("天霜冰环", 600))
drops.Add(new Drop("双龙斩", 50))
drops.Add(new Drop("捕绳剑", 50))
drops.Add(new Drop("烈火剑法", 25))
drops.Add(new Drop("狮子吼", 50))
drops.Add(new Drop("圆月弯刀", 30))
drops.Add(new Drop("空破闪", 50))
drops.Add(new Drop("迷魂术", 50))
drops.Add(new Drop("护身气幕", 400))
drops.Add(new Drop("噬血术", 50))
drops.Add(new Drop("冰咆哮", 25))
drops.Add(new Drop("灭天火", 30))
drops.Add(new Drop("分身术", 50))
drops.Add(new Drop("火龙气焰", 200))
drops.Add(new Drop("流星火雨", 400))
drops.Add(new Drop("剑气爆", 400))

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
drops.Add(new Drop("金条", 100))

export default drops;
