//libs
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//src
import "./App.css";
import Timer from "./Timer";
import Actions from "./Actions";
import LogTable from "./LogTable";
import SplitTimer from "./SplitTimer";
import { updateTimer, resetTimer } from "./redux/actions/timerActions";

type State = {
  timerStart: number;
};
type Props = {
  currentTime: number;
  updateTimer: (newTime: number) => void;
  resetTimer: () => void;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      timerStart: 0
    };
  }
  timer!: ReturnType<typeof setTimeout>;
  render() {
    return (
      <div className="container">
        <div className="stopWatch">
          <Timer />
          <SplitTimer />
          <Actions
            handleStart={this.startTimer}
            handleStop={this.stopTimer}
            handleReset={this.resetTimer}
          />
          <LogTable />
        </div>
      </div>
    );
  }
  startTimer = () => {
    const { currentTime } = this.props;
    this.setState({
      timerStart: Date.now() - currentTime
    });
    this.timer = setInterval(() => {
      const { updateTimer } = this.props;
      const { timerStart } = this.state;
      updateTimer(Date.now() - timerStart);
    }, 1);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  resetTimer = () => {
    const { resetTimer } = this.props;
    resetTimer();
  };
}

const mapStateToProps = ({ timer: { currentTime } }) => ({
  currentTime
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateTimer,
      resetTimer
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
