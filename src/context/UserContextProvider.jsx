import { UserContext } from "./UserContext";

const initialState = JSON.parse(localStorage.getItem('registerData'));

export function UserContextProvider({ children }) {
  return (
    <UserContext value={initialState}>
      {children}
    </UserContext>
  )
}
