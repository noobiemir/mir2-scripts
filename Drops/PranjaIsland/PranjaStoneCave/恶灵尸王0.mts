import { createDropList, Drop } from "../../common.mjs";
const drops = createDropList();

// drops.Add(new Drop({物品},{几率}))
// 物品：如输入数字，则为金钱掉落，如输入字符串则为物品掉落
// 几率：物品掉落率为 1 ÷ {几率}，如100则几率为 1%; 400 则为 0.25%

// 钱
drops.Add(new Drop(8000, 5));

// 武器
drops.Add(new Drop("霸王弓", 400))
drops.Add(new Drop("龙牙", 400))
drops.Add(new Drop("逍遥扇", 400))
drops.Add(new Drop("怒斩", 400))
drops.Add(new Drop("冷月刀", 400))

// 衣服
drops.Add(new Drop("轻革衣(女)", 20))
drops.Add(new Drop("轻革衣(男)", 20))
drops.Add(new Drop("残影魔衣(女)", 20))
drops.Add(new Drop("残影魔衣(男)", 20))
drops.Add(new Drop("魔法长袍(女)", 20))
drops.Add(new Drop("魔法长袍(男)", 20))
drops.Add(new Drop("灵魂战衣(女)", 20))
drops.Add(new Drop("灵魂战衣(男)", 20))
drops.Add(new Drop("重盔甲(女)", 20))
drops.Add(new Drop("重盔甲(男)", 20))

// 头盔

// 项链
drops.Add(new Drop("五玄项链", 190))
drops.Add(new Drop("灵力项链", 90))
drops.Add(new Drop("青雷项链", 90))
drops.Add(new Drop("紫晶项链", 90))

// 手镯
drops.Add(new Drop("五玄手镯", 190))
drops.Add(new Drop("天音轮", 50))
drops.Add(new Drop("平凡护腕", 50))
drops.Add(new Drop("雪玉手镯", 50))
drops.Add(new Drop("三眼手镯", 40))

// 戒指
drops.Add(new Drop("道力戒指", 50))
drops.Add(new Drop("道德戒指", 10))
drops.Add(new Drop("平凡戒指", 50))
drops.Add(new Drop("天音戒指", 50))
drops.Add(new Drop("珊瑚戒指", 40))
drops.Add(new Drop("龙之戒指", 200))
drops.Add(new Drop("铂金戒指", 200))
drops.Add(new Drop("降妖除魔戒指", 40))
drops.Add(new Drop("红宝石戒指", 200))

// 护身符
drops.Add(new Drop("灰色药粉", 50))

// 腰带

// 鞋子

// 石头
drops.Add(new Drop("魔法守护石(特大)", 50))
drops.Add(new Drop("魔法守护石(大)", 25))
drops.Add(new Drop("攻击守护石(特大)", 50))
drops.Add(new Drop("攻击守护石(大)", 25))
drops.Add(new Drop("道术守护石(特大)", 50))
drops.Add(new Drop("道术守护石(大)", 25))

// 火把

// 药水
drops.Add(new Drop("魔法药(中量)", 1))
drops.Add(new Drop("金疮药(中量)", 1))
drops.Add(new Drop("太阳水", 5))
drops.Add(new Drop("强效太阳水", 10))
drops.Add(new Drop("魔法药(大量)", 2))
drops.Add(new Drop("金疮药(大量)", 2))

// 矿石

// 肉

// 工艺材料

// 卷轴
drops.Add(new Drop("随机传送卷", 1))
drops.Add(new Drop("回城卷", 5))

// 宝石

// 坐骑

// 技能书
drops.Add(new Drop("群体治疗术", 19))
drops.Add(new Drop("寒冰掌", 20))
drops.Add(new Drop("魔法盾", 15))

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
