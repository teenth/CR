import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Index from './Index.jsx'

import { setMenuState, setScrollState } from '../../actions'
function mapStateToProps(state) {
    return {
        loadingState: state.getIn(['pageState','isLoading']),
        menuState: state.getIn(['pageState','isShowMenu']),
        bgImage: state.getIn(['setting','bgImage'])
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setMenuState, setScrollState },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);