//libs
import React, { Component } from "react";

//src
import "./LogTable.css";
import prettyPrintTime from "../utils";
import { connect } from "react-redux";

export type Log = {
  action: string;
  time: number;
};

type Props = {
  logs: Log[];
};

class LogTable extends Component<Props> {
  render() {
    const { logs } = this.props;
    const timerColors = (action: string) => {
      console.log(action);
      switch (action) {
        case "START":
          return "rgb(135, 232, 235)";
        case "PAUSE":
          return "pink";
        case "SPLIT":
          return "rgb(122, 83, 21)";
        default:
          return "white";
      }
    };
    return logs.map((item, i) => (
      <div className="formatting" key={i}>
        <td>#{i}</td>
        <td style={{ color: timerColors(item.action) }}>
          {prettyPrintTime(item.time)}
        </td>
        <td>{item.action}</td>
      </div>
    ));
  }
}

const mapStateToProps = ({ log: { logs } }) => ({
  logs
});

export default connect(mapStateToProps)(LogTable);
