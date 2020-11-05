import { connect } from "react-redux";
import { Dispatch } from "redux";
import ApiErrorHandler from "../components/Error/ApiErrorHandler";
import { clearError } from "../redux/action";
import { StoreState } from "../redux/types";


const mapStateToProps = (state: StoreState) => ({
    error: state.error.apiError
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiErrorHandler);