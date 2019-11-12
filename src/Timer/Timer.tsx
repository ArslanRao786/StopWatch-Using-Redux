// libs
import React, { Component } from "react";
import { connect } from "react-redux";

//src
import prettyPrintTime from "../utils";

type Props = {
  currentTime: number;
};

class Timer extends Component<Props> {
  render() {
    const { currentTime } = this.props;
    return (
      <div>
        <h1>{prettyPrintTime(currentTime)}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ timer: { currentTime } }) => ({
  currentTime
});

export default connect(mapStateToProps)(Timer);
