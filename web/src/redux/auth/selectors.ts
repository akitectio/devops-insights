interface State {
  auth: {
    isLoggedIn: boolean;
  };
}

export const isLoggedInSelector = (state: State) => state.auth.isLoggedIn;
