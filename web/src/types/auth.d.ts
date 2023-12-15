export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  expires_in: number;
  not_before_policy: number;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
  session_state: string;
  token_type: string;
}

export interface LoginState {
  loading: boolean;
  token: LoginResponse | null;
  error: ErrorState | null;
}

export interface ErrorState {
  error_description: string;
  status: boolean;
  code: string | null;
}
