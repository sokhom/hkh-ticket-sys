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
        var {path} = getItemConfig(itemType);
        const  compo = loadable(() => import(`${path}`).then(Item=> Item));
         console.log(compo);
        comps[`${path}`] = compo;

        return compo;
    }
}

export const getItem = (itemType) => getComp(itemType);