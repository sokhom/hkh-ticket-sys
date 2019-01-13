import { connect } from 'react-redux';
import {changeLayoutCollapsed} from 'modules/GlobalModule';
import SiderMenuWrapper from 'components/SiderMenu';

/**
 * Maps the state properties to the React component `props`.
 *
 * @param {Object} state The application state.
 * @returns {Object} The props passed to the react component.
 */
const mapStateToProps = state => ({
  collapsed: state.global.collapsed
});

/**
 * Maps the store `dispatch` function to the React component `props`.
 *
 * @param {Function} dispatch The Redux store dispatch function.
 * @returns {Object} The props passed to the react component.
 */
const mapDispatchToProps = dispatch => ({
  onCollapse: (collapsed) => dispatch(changeLayoutCollapsed(collapsed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SiderMenuWrapper);
