import { combineReducers } from "redux-immutable";

import { reducer as DashboardReducer } from "../pages/dashboard";
import { reducer as LoginReducer } from "../pages/login/store";
import { reducer as headerReducer } from "../components/header/store";

const reducer = combineReducers({
  dashboard: DashboardReducer,
  login: LoginReducer,
  header: headerReducer,
});

export default reducer;
