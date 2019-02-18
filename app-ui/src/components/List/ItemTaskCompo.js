import loadable from 'loadable-components';
import conf from './task_config';


const comps={};
function getItemConfig(itemType){
    var itemCof = conf[`${itemType}`];
    if(itemCof){
         console.log('itemCof' ,itemCof);
        return itemCof;
    }else{
//        console.log('none item' ,conf['none']);
        return conf['none'];
    }
}

function getComp(itemType){
    var comp = comps[`${itemType}`];
    if(comp){
        return comp;
    }else{
        var {path,component} = getItemConfig(itemType);
        console.log('`${path}`',`${path}`);
        var parthString = "'" + path+ "'"
        const  compo = loadable(() => import(`${path}`));
         console.log(component);
//       comps[`${path}`] = compo;
            return component();
    }
}

export const getItem = (itemType) => getComp(itemType);