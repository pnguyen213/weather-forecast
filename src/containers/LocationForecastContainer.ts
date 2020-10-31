import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
// import { ThunkDispatch } from "redux-thunk";
import LocationForecast from "../components/LocationForecast/LocationForecast";
import { getLocationWoeid } from "../redux/action";
import { StoreState } from "../redux/types";


const mapStateToProps = (state: StoreState) => ({
    woeid: state.ui.woeid
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    // getLocationWoeid: (query: string) => dispatch(getLocationWoeid(query))
    return bindActionCreators({getLocationWoeid}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationForecast);
