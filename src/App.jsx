import { useSelector } from "react-redux";
import Balance from "./components/Balance";
import LangSwitcher from "./components/LangSwitcher";

export default function App() {
  const lang = useSelector((state) => state.locale.lang);
  return (
    <div>
      <Balance />
      <LangSwitcher />
      <p>Select lang: {lang} </p>
    </div>
  );
}
