import React from "react";
import produce from "immer";
import { connect } from "react-redux";
import AppState from "./state";

export enum BackendCondition {
  OK,
  Error
}

export const UPDATE_BACKEND_STATE = "UPDATE_BACKEND_STATE";
export type UPDATE_BACKEND_STATE = typeof UPDATE_BACKEND_STATE;

export interface UpdateBackendState {
  type: UPDATE_BACKEND_STATE;
  state: BackendCondition;
}

export const updateBackendState = (
  state: BackendCondition
): UpdateBackendState => ({
  type: UPDATE_BACKEND_STATE,
  state: state
});

export const reducer = (state: BackendCondition, action: UpdateBackendState) =>
  produce(state, draft => {
    if (action.type == UPDATE_BACKEND_STATE) {
      draft = action.state;
    }
  });

const BackendConditionComponent = (props: { condition: BackendCondition }) => {
  return (
    <div>
      <p>{BackendCondition.OK ? "OK" : "Error"}</p>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  condition: state.backendCondition
});

export default connect(mapStateToProps)(BackendConditionComponent);
