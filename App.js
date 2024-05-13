import { NavigationContainer } from "@react-navigation/native";
import UsersContextProvider from "./src/contexts/usersContextProvider";
import Root from "./src/Navigation/root";
import { ImageBackground } from "react-native";
import styles from "./styles";
export default function App() {
  return (

    <UsersContextProvider>

      <NavigationContainer>
        <Root></Root>
      </NavigationContainer>

    </UsersContextProvider>

  );
}
