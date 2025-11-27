export type ElementType =
  | "Alkali Metal"
  | "Alkaline Earth Metal"
  | "Transition Metal"
  | "Post-Transition Metal"
  | "Metalloid"
  | "Nonmetal"
  | "Halogen"
  | "Noble Gas"
  | "Lanthanide"
  | "Actinide";

export type Block = "s" | "p" | "d" | "f";

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  protons: number;
  neutrons: number;
  electrons: number;
  block: Block;
  group: number | null; // null for lanthanides and actinides
  period: number;
  type: ElementType;
  electronConfiguration: number[]; // electrons per shell [2, 8, 18, ...]
}

export const elements: Element[] = [
  // Period 1
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", protons: 1, neutrons: 0, electrons: 1, block: "s", group: 1, period: 1, type: "Nonmetal", electronConfiguration: [1] },
  { atomicNumber: 2, symbol: "He", name: "Helium", protons: 2, neutrons: 2, electrons: 2, block: "s", group: 18, period: 1, type: "Noble Gas", electronConfiguration: [2] },

  // Period 2
  { atomicNumber: 3, symbol: "Li", name: "Lithium", protons: 3, neutrons: 4, electrons: 3, block: "s", group: 1, period: 2, type: "Alkali Metal", electronConfiguration: [2, 1] },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", protons: 4, neutrons: 5, electrons: 4, block: "s", group: 2, period: 2, type: "Alkaline Earth Metal", electronConfiguration: [2, 2] },
  { atomicNumber: 5, symbol: "B", name: "Boron", protons: 5, neutrons: 6, electrons: 5, block: "p", group: 13, period: 2, type: "Metalloid", electronConfiguration: [2, 3] },
  { atomicNumber: 6, symbol: "C", name: "Carbon", protons: 6, neutrons: 6, electrons: 6, block: "p", group: 14, period: 2, type: "Nonmetal", electronConfiguration: [2, 4] },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", protons: 7, neutrons: 7, electrons: 7, block: "p", group: 15, period: 2, type: "Nonmetal", electronConfiguration: [2, 5] },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", protons: 8, neutrons: 8, electrons: 8, block: "p", group: 16, period: 2, type: "Nonmetal", electronConfiguration: [2, 6] },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", protons: 9, neutrons: 10, electrons: 9, block: "p", group: 17, period: 2, type: "Halogen", electronConfiguration: [2, 7] },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", protons: 10, neutrons: 10, electrons: 10, block: "p", group: 18, period: 2, type: "Noble Gas", electronConfiguration: [2, 8] },

  // Period 3
  { atomicNumber: 11, symbol: "Na", name: "Sodium", protons: 11, neutrons: 12, electrons: 11, block: "s", group: 1, period: 3, type: "Alkali Metal", electronConfiguration: [2, 8, 1] },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", protons: 12, neutrons: 12, electrons: 12, block: "s", group: 2, period: 3, type: "Alkaline Earth Metal", electronConfiguration: [2, 8, 2] },
  { atomicNumber: 13, symbol: "Al", name: "Aluminum", protons: 13, neutrons: 14, electrons: 13, block: "p", group: 13, period: 3, type: "Post-Transition Metal", electronConfiguration: [2, 8, 3] },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", protons: 14, neutrons: 14, electrons: 14, block: "p", group: 14, period: 3, type: "Metalloid", electronConfiguration: [2, 8, 4] },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", protons: 15, neutrons: 16, electrons: 15, block: "p", group: 15, period: 3, type: "Nonmetal", electronConfiguration: [2, 8, 5] },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", protons: 16, neutrons: 16, electrons: 16, block: "p", group: 16, period: 3, type: "Nonmetal", electronConfiguration: [2, 8, 6] },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", protons: 17, neutrons: 18, electrons: 17, block: "p", group: 17, period: 3, type: "Halogen", electronConfiguration: [2, 8, 7] },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", protons: 18, neutrons: 22, electrons: 18, block: "p", group: 18, period: 3, type: "Noble Gas", electronConfiguration: [2, 8, 8] },

  // Period 4
  { atomicNumber: 19, symbol: "K", name: "Potassium", protons: 19, neutrons: 20, electrons: 19, block: "s", group: 1, period: 4, type: "Alkali Metal", electronConfiguration: [2, 8, 8, 1] },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", protons: 20, neutrons: 20, electrons: 20, block: "s", group: 2, period: 4, type: "Alkaline Earth Metal", electronConfiguration: [2, 8, 8, 2] },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", protons: 21, neutrons: 24, electrons: 21, block: "d", group: 3, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 9, 2] },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", protons: 22, neutrons: 26, electrons: 22, block: "d", group: 4, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 10, 2] },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", protons: 23, neutrons: 28, electrons: 23, block: "d", group: 5, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 11, 2] },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", protons: 24, neutrons: 28, electrons: 24, block: "d", group: 6, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 13, 1] },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", protons: 25, neutrons: 30, electrons: 25, block: "d", group: 7, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 13, 2] },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", protons: 26, neutrons: 30, electrons: 26, block: "d", group: 8, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 14, 2] },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", protons: 27, neutrons: 32, electrons: 27, block: "d", group: 9, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 15, 2] },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", protons: 28, neutrons: 31, electrons: 28, block: "d", group: 10, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 16, 2] },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", protons: 29, neutrons: 35, electrons: 29, block: "d", group: 11, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 18, 1] },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", protons: 30, neutrons: 35, electrons: 30, block: "d", group: 12, period: 4, type: "Transition Metal", electronConfiguration: [2, 8, 18, 2] },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", protons: 31, neutrons: 39, electrons: 31, block: "p", group: 13, period: 4, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 3] },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", protons: 32, neutrons: 41, electrons: 32, block: "p", group: 14, period: 4, type: "Metalloid", electronConfiguration: [2, 8, 18, 4] },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", protons: 33, neutrons: 42, electrons: 33, block: "p", group: 15, period: 4, type: "Metalloid", electronConfiguration: [2, 8, 18, 5] },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", protons: 34, neutrons: 45, electrons: 34, block: "p", group: 16, period: 4, type: "Nonmetal", electronConfiguration: [2, 8, 18, 6] },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", protons: 35, neutrons: 45, electrons: 35, block: "p", group: 17, period: 4, type: "Halogen", electronConfiguration: [2, 8, 18, 7] },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", protons: 36, neutrons: 48, electrons: 36, block: "p", group: 18, period: 4, type: "Noble Gas", electronConfiguration: [2, 8, 18, 8] },

  // Period 5
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", protons: 37, neutrons: 48, electrons: 37, block: "s", group: 1, period: 5, type: "Alkali Metal", electronConfiguration: [2, 8, 18, 8, 1] },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", protons: 38, neutrons: 50, electrons: 38, block: "s", group: 2, period: 5, type: "Alkaline Earth Metal", electronConfiguration: [2, 8, 18, 8, 2] },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", protons: 39, neutrons: 50, electrons: 39, block: "d", group: 3, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 9, 2] },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", protons: 40, neutrons: 51, electrons: 40, block: "d", group: 4, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 10, 2] },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", protons: 41, neutrons: 52, electrons: 41, block: "d", group: 5, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 12, 1] },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", protons: 42, neutrons: 54, electrons: 42, block: "d", group: 6, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 13, 1] },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", protons: 43, neutrons: 55, electrons: 43, block: "d", group: 7, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 13, 2] },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", protons: 44, neutrons: 57, electrons: 44, block: "d", group: 8, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 15, 1] },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", protons: 45, neutrons: 58, electrons: 45, block: "d", group: 9, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 16, 1] },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", protons: 46, neutrons: 60, electrons: 46, block: "d", group: 10, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 18] },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", protons: 47, neutrons: 61, electrons: 47, block: "d", group: 11, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 18, 1] },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", protons: 48, neutrons: 64, electrons: 48, block: "d", group: 12, period: 5, type: "Transition Metal", electronConfiguration: [2, 8, 18, 18, 2] },
  { atomicNumber: 49, symbol: "In", name: "Indium", protons: 49, neutrons: 66, electrons: 49, block: "p", group: 13, period: 5, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 18, 3] },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", protons: 50, neutrons: 69, electrons: 50, block: "p", group: 14, period: 5, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 18, 4] },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", protons: 51, neutrons: 71, electrons: 51, block: "p", group: 15, period: 5, type: "Metalloid", electronConfiguration: [2, 8, 18, 18, 5] },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", protons: 52, neutrons: 76, electrons: 52, block: "p", group: 16, period: 5, type: "Metalloid", electronConfiguration: [2, 8, 18, 18, 6] },
  { atomicNumber: 53, symbol: "I", name: "Iodine", protons: 53, neutrons: 74, electrons: 53, block: "p", group: 17, period: 5, type: "Halogen", electronConfiguration: [2, 8, 18, 18, 7] },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", protons: 54, neutrons: 77, electrons: 54, block: "p", group: 18, period: 5, type: "Noble Gas", electronConfiguration: [2, 8, 18, 18, 8] },

  // Period 6
  { atomicNumber: 55, symbol: "Cs", name: "Cesium", protons: 55, neutrons: 78, electrons: 55, block: "s", group: 1, period: 6, type: "Alkali Metal", electronConfiguration: [2, 8, 18, 18, 8, 1] },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", protons: 56, neutrons: 81, electrons: 56, block: "s", group: 2, period: 6, type: "Alkaline Earth Metal", electronConfiguration: [2, 8, 18, 18, 8, 2] },
  
  // Lanthanides (57-71)
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", protons: 57, neutrons: 82, electrons: 57, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 18, 9, 2] },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", protons: 58, neutrons: 82, electrons: 58, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 19, 9, 2] },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", protons: 59, neutrons: 82, electrons: 59, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 21, 8, 2] },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", protons: 60, neutrons: 84, electrons: 60, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 22, 8, 2] },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", protons: 61, neutrons: 84, electrons: 61, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 23, 8, 2] },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", protons: 62, neutrons: 88, electrons: 62, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 24, 8, 2] },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", protons: 63, neutrons: 89, electrons: 63, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 25, 8, 2] },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", protons: 64, neutrons: 93, electrons: 64, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 25, 9, 2] },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", protons: 65, neutrons: 94, electrons: 65, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 27, 8, 2] },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", protons: 66, neutrons: 97, electrons: 66, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 28, 8, 2] },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", protons: 67, neutrons: 98, electrons: 67, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 29, 8, 2] },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", protons: 68, neutrons: 99, electrons: 68, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 30, 8, 2] },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", protons: 69, neutrons: 100, electrons: 69, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 31, 8, 2] },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", protons: 70, neutrons: 103, electrons: 70, block: "f", group: null, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 32, 8, 2] },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", protons: 71, neutrons: 104, electrons: 71, block: "d", group: 3, period: 6, type: "Lanthanide", electronConfiguration: [2, 8, 18, 32, 9, 2] },

  // Period 6 continued
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", protons: 72, neutrons: 106, electrons: 72, block: "d", group: 4, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 10, 2] },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", protons: 73, neutrons: 108, electrons: 73, block: "d", group: 5, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 11, 2] },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", protons: 74, neutrons: 110, electrons: 74, block: "d", group: 6, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 12, 2] },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", protons: 75, neutrons: 111, electrons: 75, block: "d", group: 7, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 13, 2] },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", protons: 76, neutrons: 114, electrons: 76, block: "d", group: 8, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 14, 2] },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", protons: 77, neutrons: 115, electrons: 77, block: "d", group: 9, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 15, 2] },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", protons: 78, neutrons: 117, electrons: 78, block: "d", group: 10, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 17, 1] },
  { atomicNumber: 79, symbol: "Au", name: "Gold", protons: 79, neutrons: 118, electrons: 79, block: "d", group: 11, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 18, 1] },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", protons: 80, neutrons: 121, electrons: 80, block: "d", group: 12, period: 6, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 18, 2] },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", protons: 81, neutrons: 123, electrons: 81, block: "p", group: 13, period: 6, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 32, 18, 3] },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", protons: 82, neutrons: 125, electrons: 82, block: "p", group: 14, period: 6, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 32, 18, 4] },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", protons: 83, neutrons: 126, electrons: 83, block: "p", group: 15, period: 6, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 32, 18, 5] },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", protons: 84, neutrons: 125, electrons: 84, block: "p", group: 16, period: 6, type: "Metalloid", electronConfiguration: [2, 8, 18, 32, 18, 6] },
  { atomicNumber: 85, symbol: "At", name: "Astatine", protons: 85, neutrons: 125, electrons: 85, block: "p", group: 17, period: 6, type: "Halogen", electronConfiguration: [2, 8, 18, 32, 18, 7] },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", protons: 86, neutrons: 136, electrons: 86, block: "p", group: 18, period: 6, type: "Noble Gas", electronConfiguration: [2, 8, 18, 32, 18, 8] },

  // Period 7
  { atomicNumber: 87, symbol: "Fr", name: "Francium", protons: 87, neutrons: 136, electrons: 87, block: "s", group: 1, period: 7, type: "Alkali Metal", electronConfiguration: [2, 8, 18, 32, 18, 8, 1] },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", protons: 88, neutrons: 138, electrons: 88, block: "s", group: 2, period: 7, type: "Alkaline Earth Metal", electronConfiguration: [2, 8, 18, 32, 18, 8, 2] },

  // Actinides (89-103)
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", protons: 89, neutrons: 138, electrons: 89, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 18, 9, 2] },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", protons: 90, neutrons: 142, electrons: 90, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 18, 10, 2] },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", protons: 91, neutrons: 140, electrons: 91, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 20, 9, 2] },
  { atomicNumber: 92, symbol: "U", name: "Uranium", protons: 92, neutrons: 146, electrons: 92, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 21, 9, 2] },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", protons: 93, neutrons: 144, electrons: 93, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 22, 9, 2] },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", protons: 94, neutrons: 150, electrons: 94, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 24, 8, 2] },
  { atomicNumber: 95, symbol: "Am", name: "Americium", protons: 95, neutrons: 148, electrons: 95, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 25, 8, 2] },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", protons: 96, neutrons: 151, electrons: 96, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 25, 9, 2] },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", protons: 97, neutrons: 150, electrons: 97, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 27, 8, 2] },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", protons: 98, neutrons: 153, electrons: 98, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 28, 8, 2] },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", protons: 99, neutrons: 153, electrons: 99, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 29, 8, 2] },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", protons: 100, neutrons: 157, electrons: 100, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 30, 8, 2] },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", protons: 101, neutrons: 157, electrons: 101, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 31, 8, 2] },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", protons: 102, neutrons: 157, electrons: 102, block: "f", group: null, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 32, 8, 2] },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", protons: 103, neutrons: 159, electrons: 103, block: "d", group: 3, period: 7, type: "Actinide", electronConfiguration: [2, 8, 18, 32, 32, 8, 3] },

  // Period 7 continued
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", protons: 104, neutrons: 163, electrons: 104, block: "d", group: 4, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 10, 2] },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", protons: 105, neutrons: 163, electrons: 105, block: "d", group: 5, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 11, 2] },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", protons: 106, neutrons: 163, electrons: 106, block: "d", group: 6, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 12, 2] },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", protons: 107, neutrons: 163, electrons: 107, block: "d", group: 7, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 13, 2] },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", protons: 108, neutrons: 169, electrons: 108, block: "d", group: 8, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 14, 2] },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", protons: 109, neutrons: 169, electrons: 109, block: "d", group: 9, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 15, 2] },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", protons: 110, neutrons: 171, electrons: 110, block: "d", group: 10, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 16, 2] },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", protons: 111, neutrons: 171, electrons: 111, block: "d", group: 11, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 17, 2] },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", protons: 112, neutrons: 173, electrons: 112, block: "d", group: 12, period: 7, type: "Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 18, 2] },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", protons: 113, neutrons: 173, electrons: 113, block: "p", group: 13, period: 7, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 18, 3] },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", protons: 114, neutrons: 175, electrons: 114, block: "p", group: 14, period: 7, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 18, 4] },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", protons: 115, neutrons: 175, electrons: 115, block: "p", group: 15, period: 7, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 18, 5] },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", protons: 116, neutrons: 177, electrons: 116, block: "p", group: 16, period: 7, type: "Post-Transition Metal", electronConfiguration: [2, 8, 18, 32, 32, 18, 6] },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", protons: 117, neutrons: 177, electrons: 117, block: "p", group: 17, period: 7, type: "Halogen", electronConfiguration: [2, 8, 18, 32, 32, 18, 7] },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", protons: 118, neutrons: 176, electrons: 118, block: "p", group: 18, period: 7, type: "Noble Gas", electronConfiguration: [2, 8, 18, 32, 32, 18, 8] },
];

// Helper function to get element by atomic number
export const getElementById = (atomicNumber: number): Element | undefined => {
  return elements.find((el) => el.atomicNumber === atomicNumber);
};

// Helper function to get element by symbol
export const getElementBySymbol = (symbol: string): Element | undefined => {
  return elements.find((el) => el.symbol.toLowerCase() === symbol.toLowerCase());
};

// Color mapping for element types
export const typeColors: Record<ElementType, string> = {
  "Alkali Metal": "#ff6b6b",
  "Alkaline Earth Metal": "#feca57",
  "Transition Metal": "#48dbfb",
  "Post-Transition Metal": "#1dd1a1",
  "Metalloid": "#5f27cd",
  "Nonmetal": "#ff9ff3",
  "Halogen": "#54a0ff",
  "Noble Gas": "#c8d6e5",
  "Lanthanide": "#00d2d3",
  "Actinide": "#ff9f43",
};
