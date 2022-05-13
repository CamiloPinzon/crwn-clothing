import { compose, createStore, applyMuddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWeares = [logger];
const composedEnhancers = compose(applyMuddleware(middleWeares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

