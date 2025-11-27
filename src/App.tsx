import { useState } from "react";
import type { Element } from "./data/elements";
import { PeriodicTable } from "./components/PeriodicTable";
import { ElementPopup } from "./components/ElementPopup";
import "./App.css";

function App() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const handleClosePopup = () => {
    setSelectedElement(null);
  };

  return (
    <div className="app">
      <PeriodicTable
        selectedElement={selectedElement}
        onElementClick={handleElementClick}
      />
      <ElementPopup element={selectedElement} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
