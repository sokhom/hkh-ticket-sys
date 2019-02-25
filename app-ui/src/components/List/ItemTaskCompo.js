import loadable from 'loadable-components';
import conf from './task_config';


const comps={};
function getItemConfig(itemType){
    var itemCof = conf[`${itemType}`];
    if(itemCof){
        return itemCof;
    }else{
        return conf['none'];
    }
}

function getComp(itemType){
    var comp = comps[`${itemType}`];
    if(comp){
        return comp;
    }else{
        var {path,component} = getItemConfig(itemType);
        const  compo = loadable(() => import(`${path}`));
        comps[`${path}`] = component();
            return component();
    }
}

export const getItem = (itemType) => getComp(itemType);