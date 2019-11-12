import { UPDATE_LOG, UPDATE_SPLIT_LOG } from "../actions/logActions";
import { Log } from "../../LogTable/LogTable";

type State = {
  logs: Log[];
  splitLogs: Log[];
};

const initialState: State = {
  logs: [],
  splitLogs: []
};

type ActionType = {
  payload: {
    actionType: string;
    time: number;
  };
  type: string;
};

const logReducer = (state: State = initialState, action: ActionType): State => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_LOG:
      return {
        ...state,
        logs: [
          ...state.logs,
          {
            action: payload.actionType,
            time: payload.time
          }
        ]
      };

    case UPDATE_SPLIT_LOG:
      return {
        ...state,
        splitLogs: [
          {
            action: payload.actionType,
            time: payload.time
          }
        ]
      };

    default:
      return state;
  }
};

export default logReducer;
