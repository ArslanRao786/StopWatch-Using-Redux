// libs
import React from "react";
import { connect } from "react-redux";

// src
import "./LogTable.css";
import prettyPrintTime from "../utils";
import { ReduxStoreState } from "../types";

type StoreProps = {
  logs: any;
};

type Props = StoreProps;

const LogTable = (props: Props) => {
  const { logs } = props;
  const timerColors = (action: string) => {
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
  return logs.map((item: { action: string; time: number }, i: number) => (
    <div className="formatting" key={i}>
      <td>#{i}</td>
      <td style={{ color: timerColors(item.action) }}>
        {prettyPrintTime(item.time)}
      </td>
      <td>{item.action}</td>
    </div>
  ));
};

const mapStateToProps = ({ log: { logs } }: ReduxStoreState): StoreProps => ({
  logs
});

export default connect<StoreProps, ReduxStoreState>(mapStateToProps)(LogTable);
