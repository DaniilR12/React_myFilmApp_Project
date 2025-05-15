import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import AppMain from "./AppMain";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppMain />
      </Provider>
    </>
  );
}
