import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [token, setToken] = useState(true);

const login = () => setToken(true);
const logout = () => setToken(false);

const value = useMemo(() => ({ token, login, logout }), [token]);
return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser debe usarse dentro de UserProvider");
    }
    return context;
}

