export interface ResultStats {
  passPercentage: number;
  jeeSelections: number;
  neetSelections: number;
  top100: number;
}

export interface ResultsData {
  [year: string]: {
    [course: string]: ResultStats;
  };
}
