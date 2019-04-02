
import loadable from 'loadable-components';

const items ={
       ticket: {name:'ticket',path:'containers/list/TicketItemContainer',component:() => loadable(() =>import('containers/list/TicketItemContainer'))},
        ticketView: {name:'ticket',path:'containers/List/TicketItemContainer',component:() => loadable(() =>import('components/Task/Ticket/TicketItemView'))},
       none: {name:'none',path:'./NoItemException'}
     };


export default items;