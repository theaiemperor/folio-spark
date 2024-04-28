import Footer from "./components/Footer/Footer";
import NavigationWrapper from "./components/Wrapper/NavigationWrapper";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ThemeWrapper from "./components/Wrapper/ThemeWrapper";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <NavigationWrapper />
        <Footer />
      </ThemeWrapper>
    </Provider>
  );
}
