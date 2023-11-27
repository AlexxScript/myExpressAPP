import { createContext, Dispatch, SetStateAction } from "react";

interface UserState {
  message: string;
  state: string;
}

interface AuthContextType {
  user: UserState;
  setUser: Dispatch<SetStateAction<UserState>>;
}

const defaultUserState: UserState = {
  message: "",
  state: "unauthenticated"
};

const AuthenticatedContext = createContext<AuthContextType>({
  user: defaultUserState,
  setUser: () => {}
});

export default AuthenticatedContext;
