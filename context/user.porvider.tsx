import { getCurrentUser } from "@/services/AuthServices";
import { IUser } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserProviderValues | undefined>(
  undefined
);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const hendelUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    hendelUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within the userProvider context");
  }
  return context;
};

export default UserProvider;
