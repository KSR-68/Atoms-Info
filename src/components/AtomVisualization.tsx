import type { Element } from "../data/elements";
import "./AtomVisualization.css";

interface AtomVisualizationProps {
  element: Element;
}

export const AtomVisualization = ({ element }: AtomVisualizationProps) => {
  const { electronConfiguration, protons, neutrons, symbol } = element;
  const totalShells = electronConfiguration.length;
  
  // Fixed container size - we'll scale content to fit
  const containerSize = 320;
  // Calculate the natural size of the largest shell
  const baseSize = 50;
  const shellIncrement = 38;
  const maxShellSize = baseSize + totalShells * shellIncrement + 10; // +10 for electron size
  
  // Calculate scale to ensure all shells fit
  const scale = Math.min(1, (containerSize - 20) / maxShellSize);

  return (
    <div className="atom-visualization">
      <div className="atom-container" style={{ width: containerSize, height: containerSize }}>
        <div className="atom-scaled" style={{ transform: `scale(${scale})` }}>
          {/* Nucleus */}
          <div className="nucleus">
            <span className="nucleus-symbol">{symbol}</span>
            <span className="nucleus-info">
              {protons}p+ {neutrons}n
            </span>
          </div>

          {/* Electron Shells */}
          {electronConfiguration.map((electronsInShell, shellIndex) => (
            <ElectronShell
              key={shellIndex}
              shellNumber={shellIndex + 1}
              electronCount={electronsInShell}
              totalShells={totalShells}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="shell-legend">
        {electronConfiguration.map((electrons, index) => (
          <div key={index} className="legend-item">
            <span className="shell-label">{getShellName(index)}:</span>
            <span className="electron-count">{electrons} e⁻</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get shell name
function getShellName(shellIndex: number): string {
  const shellNames = ["K", "L", "M", "N", "O", "P", "Q"];
  return shellNames[shellIndex] || `Shell ${shellIndex + 1}`;
}

interface ElectronShellProps {
  shellNumber: number;
  electronCount: number;
  totalShells: number;
}

const ElectronShell = ({ shellNumber, electronCount, totalShells }: ElectronShellProps) => {
  // Calculate shell size based on shell number
  const baseSize = 50;
  const shellIncrement = 38;
  const shellSize = baseSize + shellNumber * shellIncrement;

  // Generate electrons positioned around the shell
  const electrons = [];
  for (let i = 0; i < electronCount; i++) {
    const angle = (i / electronCount) * 360;
    // Add randomized animation delay for more natural movement
    const animationDelay = (i * 0.1) + (shellNumber * 0.2);
    const animationDuration = 3 + shellNumber * 0.5; // Outer shells move slower

    electrons.push(
      <div
        key={i}
        className="electron"
        style={{
          animationDelay: `${animationDelay}s`,
          animationDuration: `${animationDuration}s`,
          transform: `rotate(${angle}deg) translateX(${shellSize / 2}px)`,
        }}
      />
    );
  }

  // Calculate opacity for depth effect
  const opacity = 1 - (shellNumber - 1) * (0.1 / totalShells);

  return (
    <div
      className="electron-shell"
      style={{
        width: shellSize,
        height: shellSize,
        opacity,
      }}
    >
      <div className="orbit-path" />
      <div className="electrons-container" style={{ animationDuration: `${3 + shellNumber * 2}s` }}>
        {electrons}
      </div>
    </div>
  );
};
