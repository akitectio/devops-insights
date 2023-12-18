export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  status: boolean;
  data: {
    access_token: string;
    expires_in: number;
    not_before_policy: number;
    refresh_expires_in: number;
    refresh_token: string;
    scope: string;
    session_state: string;
    token_type: string;
  } | null;
}

export interface authState {
  isLoading: boolean;
  token: LoginResponse | null;
  error: ErrorState | null;
}

interface stateSelectors {
  auth: {
    isLoggedIn: boolean;
    isLoading: boolean;
    error: ErrorState | null;
    token: LoginResponse | null;
  };
}

interface ErrorState {
  status: boolean;
  data: {
    message: string;
  } | null;
}
