import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import LocationForecast from "../components/LocationForecast/LocationForecast";
import { getLocationForecastAction } from "../redux/action";
import { StoreState } from "../redux/types";


const mapStateToProps = (state: StoreState) => ({
    recentForecasts: state.ui.recentForecasts
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({getLocationForecastAction}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationForecast);
