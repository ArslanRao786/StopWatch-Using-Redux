//libs
import React, { Component } from "react";
import { connect } from "react-redux";

//src
import prettyPrintTime from "../utils";
import "./SplitTimer.css";
import { Log } from "../LogTable/LogTable";

type Props = {
  splitLogs: Log[];
};

class SplitTimer extends Component<Props> {
  render() {
    const { splitLogs } = this.props;
    return splitLogs.map(item => (
      <div className="splitFormatter">
        <td>{prettyPrintTime(item.time)}</td>
      </div>
    ));
  }
}

const mapStateToProps = ({ log: { splitLogs } }) => ({
  splitLogs
});

export default connect(mapStateToProps)(SplitTimer);
