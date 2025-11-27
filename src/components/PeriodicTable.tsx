import { elements } from "../data/elements";
import type { Element } from "../data/elements";
import { ElementCard } from "./ElementCard";
import "./PeriodicTable.css";

interface PeriodicTableProps {
  selectedElement: Element | null;
  onElementClick: (element: Element) => void;
}

export const PeriodicTable = ({ selectedElement, onElementClick }: PeriodicTableProps) => {
  return (
    <div className="periodic-table-container">
      <h1 className="table-title">Periodic Table of Elements</h1>
      
      <div className="periodic-table">
        {elements.map((element) => (
          <ElementCard
            key={element.atomicNumber}
            element={element}
            onClick={onElementClick}
            isSelected={selectedElement?.atomicNumber === element.atomicNumber}
          />
        ))}

        {/* Lanthanide/Actinide placeholders in main table */}
        <div className="placeholder lanthanide-placeholder" style={{ gridColumn: 3, gridRow: 6 }}>
          57-71
        </div>
        <div className="placeholder actinide-placeholder" style={{ gridColumn: 3, gridRow: 7 }}>
          89-103
        </div>
      </div>

      {/* Legend */}
      <div className="legend">
        <h3>Element Types</h3>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#ff6b6b" }}></span>
            <span>Alkali Metal</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#feca57" }}></span>
            <span>Alkaline Earth Metal</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#48dbfb" }}></span>
            <span>Transition Metal</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#1dd1a1" }}></span>
            <span>Post-Transition Metal</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#5f27cd" }}></span>
            <span>Metalloid</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#ff9ff3" }}></span>
            <span>Nonmetal</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#54a0ff" }}></span>
            <span>Halogen</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#c8d6e5" }}></span>
            <span>Noble Gas</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#00d2d3" }}></span>
            <span>Lanthanide</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: "#ff9f43" }}></span>
            <span>Actinide</span>
          </div>
        </div>
      </div>
    </div>
  );
};