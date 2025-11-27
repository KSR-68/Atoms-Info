import type { Element } from "../data/elements";
import { typeColors } from "../data/elements";
import { AtomVisualization } from "./AtomVisualization";
import "./ElementPopup.css";

interface ElementPopupProps {
  element: Element | null;
  onClose: () => void;
}

export const ElementPopup = ({ element, onClose }: ElementPopupProps) => {
  if (!element) return null;

  const backgroundColor = typeColors[element.type];

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="element-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="popup-layout">
          {/* Left side - Atom Visualization */}
          <div className="popup-left">
            <div className="popup-header" style={{ backgroundColor }}>
              <span className="popup-atomic-number">{element.atomicNumber}</span>
              <span className="popup-symbol">{element.symbol}</span>
              <span className="popup-name">{element.name}</span>
            </div>
            <AtomVisualization element={element} />
          </div>

          {/* Right side - Information */}
          <div className="popup-right">
            <div className="info-section">
              <h3>Basic Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Atomic Number</span>
                  <span className="info-value">{element.atomicNumber}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Block</span>
                  <span className="info-value block-badge" data-block={element.block}>
                    {element.block.toUpperCase()}-block
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Group</span>
                  <span className="info-value">
                    {element.group !== null ? element.group : "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Period</span>
                  <span className="info-value">{element.period}</span>
                </div>
                <div className="info-item full-width">
                  <span className="info-label">Type</span>
                  <span className="info-value type-badge" style={{ backgroundColor }}>
                    {element.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Atomic Structure</h3>
              <div className="structure-grid">
                <div className="structure-item protons">
                  <div className="structure-icon">p⁺</div>
                  <div className="structure-details">
                    <span className="structure-count">{element.protons}</span>
                    <span className="structure-label">Protons</span>
                  </div>
                </div>
                <div className="structure-item neutrons">
                  <div className="structure-icon">n</div>
                  <div className="structure-details">
                    <span className="structure-count">{element.neutrons}</span>
                    <span className="structure-label">Neutrons</span>
                  </div>
                </div>
                <div className="structure-item electrons">
                  <div className="structure-icon">e⁻</div>
                  <div className="structure-details">
                    <span className="structure-count">{element.electrons}</span>
                    <span className="structure-label">Electrons</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Electron Configuration</h3>
              <div className="electron-config">
                {element.electronConfiguration.map((electrons, index) => (
                  <div key={index} className="shell-config">
                    <span className="shell-number">{getShellName(index)}</span>
                    <div className="shell-bar">
                      <div 
                        className="shell-fill" 
                        style={{ 
                          width: `${(electrons / getMaxElectronsForShell(index)) * 100}%` 
                        }}
                      />
                    </div>
                    <span className="shell-electrons">{electrons}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get maximum electrons for a shell
function getMaxElectronsForShell(shellIndex: number): number {
  const maxElectrons = [2, 8, 18, 32, 32, 18, 8];
  return maxElectrons[shellIndex] || 32;
}

// Helper function to get shell name
function getShellName(shellIndex: number): string {
  const shellNames = ["K", "L", "M", "N", "O", "P", "Q"];
  return shellNames[shellIndex] || `Shell ${shellIndex + 1}`;
}
