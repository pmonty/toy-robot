import { connect } from "react-redux";

import { CommandLog } from "../components/command-log";
import { ApplicationState } from "../reducers";

const mapStateToProps = ({ robot }: ApplicationState) => ({
  log: robot.log
});

export default connect(
  mapStateToProps,
  null
)(CommandLog);
