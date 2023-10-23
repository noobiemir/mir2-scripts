import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(8500, 1));

// 武器
drops.Add(new Drop("冷月刀", 550))
drops.Add(new Drop("黄龙弓", 2000))
drops.Add(new Drop("修罗刀", 2000))
drops.Add(new Drop("龙纹剑", 2000))
drops.Add(new Drop("噬魂法杖", 2000))
drops.Add(new Drop("屠龙", 2000))
drops.Add(new Drop("霸王弓", 550))
drops.Add(new Drop("逍遥扇", 550))
drops.Add(new Drop("怒斩", 550))
drops.Add(new Drop("龙牙", 550))
drops.Add(new Drop("暗黑刀", 475))
drops.Add(new Drop("魂魅弓", 475))
drops.Add(new Drop("骨玉权杖", 475))
drops.Add(new Drop("裁决之杖", 475))
drops.Add(new Drop("血饮", 240))
drops.Add(new Drop("井中月", 400))
drops.Add(new Drop("满义弓", 160))
drops.Add(new Drop("双极刀", 160))
drops.Add(new Drop("银蛇", 160))
drops.Add(new Drop("魔杖", 160))
drops.Add(new Drop("炼狱", 160))
drops.Add(new Drop("无极棍", 475))

// 衣服
drops.Add(new Drop("残影魔衣(男)", 25))
drops.Add(new Drop("轻革衣(男)", 25))
drops.Add(new Drop("残影魔衣(女)", 25))
drops.Add(new Drop("灵魂战衣(女)", 25))
drops.Add(new Drop("灵魂战衣(男)", 25))
drops.Add(new Drop("魔法长袍(男)", 25))
drops.Add(new Drop("重盔甲(女)", 25))
drops.Add(new Drop("重盔甲(男)", 25))
drops.Add(new Drop("轻革衣(女)", 25))
drops.Add(new Drop("魔法长袍(女)", 25))

// 头盔
drops.Add(new Drop("钢铁头盔", 35))
drops.Add(new Drop("骷髅头盔", 5))
drops.Add(new Drop("道士头盔", 5))
drops.Add(new Drop("黄铜头盔", 5))

// 项链
drops.Add(new Drop("技巧项链", 600))
drops.Add(new Drop("生命项链", 35))
drops.Add(new Drop("天珠项链", 35))
drops.Add(new Drop("幽灵项链", 35))

// 手镯
drops.Add(new Drop("骑士手镯", 50))

// 戒指
drops.Add(new Drop("铂金戒指", 30))
drops.Add(new Drop("红宝石戒指", 30))
drops.Add(new Drop("龙之戒指", 30))
drops.Add(new Drop("隐身戒指", 3000))
drops.Add(new Drop("复活戒指", 5000))
drops.Add(new Drop("护身戒指", 2000))
drops.Add(new Drop("传送戒指", 3000))
drops.Add(new Drop("治愈戒指", 500))
drops.Add(new Drop("超负载戒指", 500))
drops.Add(new Drop("麻痹戒指", 2000))

// 护身符

// 腰带
drops.Add(new Drop("金刚腰带", 100))
drops.Add(new Drop("青铜腰带", 10))
drops.Add(new Drop("铁腰带", 10))
drops.Add(new Drop("黄金腰带", 20))

// 鞋子
drops.Add(new Drop("龙靴", 100))
drops.Add(new Drop("紫绸靴", 25))
drops.Add(new Drop("赤鳞靴", 200))
drops.Add(new Drop("避魂靴", 20))

// 石头

// 火把

// 药水
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("疾风药水(小)", 30))
drops.Add(new Drop("魔法药水(小)", 30))
drops.Add(new Drop("道力药水(小)", 30))
drops.Add(new Drop("魔法药(特大)", 2))
drops.Add(new Drop("魔法药(特大)", 1))
drops.Add(new Drop("金疮药(特大)", 2))
drops.Add(new Drop("金疮药(特大)", 1))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("太阳水", 2))
drops.Add(new Drop("强效太阳水", 2))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("强效太阳水", 1))
drops.Add(new Drop("太阳水", 1))
drops.Add(new Drop("金疮药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))
drops.Add(new Drop("魔法药(大量)", 1))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 1))

// 矿石
drops.Add(new Drop("白金矿", 50))
drops.Add(new Drop("白金矿", 50))
drops.Add(new Drop("金矿", 45))
drops.Add(new Drop("金矿", 45))
drops.Add(new Drop("黑铁矿", 20))
drops.Add(new Drop("黑铁矿", 20))
drops.Add(new Drop("白金矿", 50))
drops.Add(new Drop("黑铁矿", 20))

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("祝福油", 8))
drops.Add(new Drop("祝福油", 2))
drops.Add(new Drop("祝福油", 2))

// 宝石
drops.Add(new Drop("忍耐神珠", 300))
drops.Add(new Drop("疾风神珠", 600))
drops.Add(new Drop("集中神珠", 400))
drops.Add(new Drop("酷寒神珠", 300))
drops.Add(new Drop("回避神珠", 400))
drops.Add(new Drop("觉醒神珠", 600))
drops.Add(new Drop("中毒神珠", 300))
drops.Add(new Drop("魔性神珠", 200))
drops.Add(new Drop("制魔神珠", 300))
drops.Add(new Drop("守护神珠", 200))
drops.Add(new Drop("仙界神珠", 200))
drops.Add(new Drop("勇猛神珠", 200))
drops.Add(new Drop("强化神珠", 300))

// 坐骑

// 技能书
drops.Add(new Drop("无极真气", 60))
drops.Add(new Drop("气功波", 60))
drops.Add(new Drop("召唤神兽", 50))
drops.Add(new Drop("召唤月灵", 400))
drops.Add(new Drop("诅咒术", 400))
drops.Add(new Drop("复活术", 400))
drops.Add(new Drop("拔刀术", 350))
drops.Add(new Drop("阴阳盾", 1200))
drops.Add(new Drop("猛毒剑气", 100))
drops.Add(new Drop("月影术", 100))
drops.Add(new Drop("吸气", 100))
drops.Add(new Drop("烈火身", 200))
drops.Add(new Drop("净化术", 100))
drops.Add(new Drop("毒云", 800))
drops.Add(new Drop("迷魂术", 100))
drops.Add(new Drop("烈风击", 800))
drops.Add(new Drop("流星火雨", 800))
drops.Add(new Drop("轻身步", 800))
drops.Add(new Drop("双龙斩", 100))
drops.Add(new Drop("捕绳剑", 100))
drops.Add(new Drop("烈火剑法", 50))
drops.Add(new Drop("狮子吼", 100))
drops.Add(new Drop("圆月弯刀", 60))
drops.Add(new Drop("天霜冰环", 1200))
drops.Add(new Drop("空破闪", 100))
drops.Add(new Drop("剑气爆", 800))
drops.Add(new Drop("噬血术", 100))
drops.Add(new Drop("冰咆哮", 50))
drops.Add(new Drop("灭天火", 60))
drops.Add(new Drop("分身术", 100))
drops.Add(new Drop("火龙气焰", 400))
drops.Add(new Drop("护身气幕", 800))

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
