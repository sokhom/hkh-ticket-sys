import { connect } from 'react-redux';
import { openTask } from 'modules/list/TaskListModule';
import TaskList from 'components/List/TaskList'

const mapStateToProps = state =>{
    console.log('mapStateToProps', state);
    console.log('mapStateToProps11', state.tasks.data);
    return ({
      data: state.tasks.data
    })
} ;

const mapDispatchToProps = dispatch => ({
  openTask: (task) => {
       console.log('mapDispatchToProps-openTask',ticketDone);
       dispatch(openTask(task))
  }
});

export default(store) => connect(mapStateToProps, mapDispatchToProps)(TaskList(store));