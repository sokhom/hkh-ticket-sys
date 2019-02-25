
import loadable from 'loadable-components';

const items ={
       ticket: {name:'ticket',path:'containers/list/TicketItemContainer',component:() => loadable(() =>import('containers/list/TicketItemContainer'))},
        ticketView: {name:'ticket',path:'containers/list/TicketItemContainer',component:() => loadable(() =>import('components/list/TicketItemView'))},
       none: {name:'none',path:'./NoItemException'}
     };


export default items;