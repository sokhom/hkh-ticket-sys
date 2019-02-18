
import loadable from 'loadable-components';

const items ={
       ticket: {name:'ticket',path:'containers/list/TicketItemContainer',component:() => loadable(() =>import('containers/list/TicketItemContainer'))},
       none: {name:'none',path:'./NoItemException'}
     };


export default items;