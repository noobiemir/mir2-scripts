const { $generic } = puer;

type DropType = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const DropList = $generic(CS.System.Collections.Generic.List$1, CS.Daboluo.Mir2.MirScripts.DropInfoDefinition);

const Drop = CS.Daboluo.Mir2.MirScripts.DropInfoDefinition;
const GroupedDrop = CS.Daboluo.Mir2.MirScripts.GroupDropInfoDefinition;
const GroupedDropMode = CS.Daboluo.Mir2.GroupedDropMode;

const createDropList = function(){
    return new DropList<DropType>();
}

export {
    createDropList,
    Drop,
    GroupedDrop,
    GroupedDropMode
};