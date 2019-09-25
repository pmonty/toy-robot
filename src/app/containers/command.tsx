import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Command } from "../components/command";
import { reset, handleCommand } from "../reducers/robot/actions";

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ reset, handleCommand }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(Command);
