import "./App.css";
import { DataList } from "./component/DataList";
export const mockData = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
];
function App() {
  return (
    <div className="App">
      <div>vite</div>
      <DataList data={mockData} createable flex />
    </div>
  );
}

export { App };
