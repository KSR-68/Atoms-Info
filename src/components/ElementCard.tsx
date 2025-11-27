import type { Element } from "../data/elements";
import { typeColors } from "../data/elements";
import "./ElementCard.css";

interface ElementCardProps {
  element: Element;
  onClick: (element: Element) => void;
  isSelected: boolean;
}

export const ElementCard = ({ element, onClick, isSelected }: ElementCardProps) => {
  const backgroundColor = typeColors[element.type];

  return (
    <div
      className={`element-card ${isSelected ? "selected" : ""}`}
      style={{
        backgroundColor,
        gridColumn: getGridColumn(element),
        gridRow: getGridRow(element),
      }}
      onClick={() => onClick(element)}
    >
      <span className="atomic-number">{element.atomicNumber}</span>
      <span className="symbol">{element.symbol}</span>
      <span className="name">{element.name}</span>
    </div>
  );
};

// Helper function to determine grid column based on element properties
function getGridColumn(element: Element): number {
  // Lanthanides (57-71) and Actinides (89-103) go in separate rows
  if (element.type === "Lanthanide" && element.atomicNumber >= 57 && element.atomicNumber <= 71) {
    return (element.atomicNumber - 57) + 3;
  }
  if (element.type === "Actinide" && element.atomicNumber >= 89 && element.atomicNumber <= 103) {
    return (element.atomicNumber - 89) + 3;
  }

  // For elements with a group, use the group number
  if (element.group !== null) {
    return element.group;
  }

  return 3; // Default fallback
}

// Helper function to determine grid row based on element properties
function getGridRow(element: Element): number {
  // Lanthanides go in row 9
  if (element.type === "Lanthanide" && element.atomicNumber >= 57 && element.atomicNumber <= 71) {
    return 9;
  }
  // Actinides go in row 10
  if (element.type === "Actinide" && element.atomicNumber >= 89 && element.atomicNumber <= 103) {
    return 10;
  }

  return element.period;
}
