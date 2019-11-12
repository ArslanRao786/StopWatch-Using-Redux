//libs
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//src
import "./Actions.css";
import { updateTimerState } from "../redux/actions/timerActions";
import { updateLog, updateSplitLog } from "../redux/actions/logActions";
import { EVENTS } from "../constants";

type Props = {
  timerState: boolean;
  currentTime: number;
  updateTimerState: (timerState: boolean) => void;
  updateLog: (timerAction: string, currentTime: number) => void;
  updateSplitLog: (timerAction: string, currentTime: number) => void;
  handleStart: () => void;
  handleStop: () => void;
  handleReset: () => void;
};

class Actions extends Component<Props> {
  render() {
    const {
      timerState,
      updateTimerState,
      currentTime,
      updateLog,
      updateSplitLog,
      handleStart,
      handleStop,
      handleReset
    } = this.props;

    return (
      <div className="buttons">
        {timerState === false ? (
          <button
            className="start"
            onClick={() => {
              updateTimerState(true);
              handleStart();
              updateLog(EVENTS.START, currentTime);
            }}
          >
            Start
          </button>
        ) : (
          <button
            className="stop"
            onClick={() => {
              updateTimerState(false);
              handleStop();
              updateLog(EVENTS.PAUSE, currentTime);
            }}
          >
            Pause
          </button>
        )}

        <button
          className="split"
          onClick={() => {
            updateLog(EVENTS.SPLIT, currentTime);
            updateSplitLog(EVENTS.SPLIT, currentTime);
          }}
          disabled={timerState === false}
        >
          Split
        </button>

        <button
          className="reset"
          onClick={() => {
            handleReset();
          }}
          disabled={timerState === true}
        >
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ timer: { timerState, currentTime } }) => ({
  timerState,
  currentTime
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateTimerState,
      updateLog,
      updateSplitLog
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
