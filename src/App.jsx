import "./App.css";
import Checkbox from "./Checkbox";

function App() {
  return (
    <div>
      <Checkbox label={"انتخاب کن:"} checked={true} disabled />
      <Checkbox label={"انتخاب کن:"} />
      <Checkbox label={"انتخاب کن:"} />
    </div>
  );
}
export default App;
