import { createContext, ReactNode, useState } from "react";

type Children = {
    children: ReactNode;
};

export const UserContext = createContext({
    user: false,
    handleUser: () => {},
});

export function UserContextProvider({ children }: Children) {
    const [user, setUser] = useState<boolean>(true);

    function handleUser(): void {
        setUser(!user);
    }

    const contextValue = {
        user,
        handleUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
