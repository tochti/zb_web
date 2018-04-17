import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { clearInterval } from "timers";

import offersAPI from "../api/http/offers";
import { ErrorType } from "../api/errors";
import http from "../api/http";
import AppState from "../state";
import { BicyclesIndex, OffersIndex } from "../bicycle";
import NewestOffer from "./NewestOffer";
import { updateBackendState, BackendCondition } from "../BackendCondition";

const requestOffers = async (dispatch: Dispatch<AppState>) => {
  dispatch(requestingOffers());

  const { offers, bicycles, err } = await offersAPI.requestOffers();

  if (err) {
    if (typeof err.Type === ErrorType.BadInput) {
      // sentry.send(err);
      throw err;
    }

    dispatch(updateBackendState(BackendCondition.Error));
  }

  dispatch(updateBackendState(BackendCondition.OK));
  dispatch(updateOffers(offers));
  dispatch(updateBicycles(bicycles));

  dispatch(stopRequestingOffers());
};

const retryRequestOffers = (dispatch: Dispatch<AppState>): (() => void) => {
  const ticker = setInterval(async () => {
    const isOK = await requestOffers(dispatch);
    if (!isOK) {
      clearInterval(ticker);
    }
  }, http.timeout + 5);

  return () => {
    clearInterval(ticker);
  };
};

interface Props {
  dispatch: Dispatch<AppState>;
  offers: OffersIndex;
  bicycles: BicyclesIndex;
  isRequestingOffers?: boolean;
}

class Overview extends Component<Props> {
  clearRequestOffersTicker: () => void;

  constructor(props: any) {
    super(props);
  }

  async componentDidUpdate() {
    const { dispatch } = this.props;
    const isOK = await requestOffers(dispatch);
    if (!isOK) {
      this.clearRequestOffersTicker = retryRequestOffers(dispatch);
    }
  }

  componentWillUnmount() {
    this.clearRequestOffersTicker();
  }

  render() {
    const { offers, bicycles, isRequestingOffers } = this.props;

    return (
      <div className="Overview">
        <NewestOffer
          isRequesting={isRequestingOffers || false}
          offers={offers}
          bicycles={bicycles}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  bicycles: state.bicycles,
  offers: state.offers,
  isRequestingOffers: state.currentRequests.offers
});

export default connect(mapStateToProps)(Overview);
