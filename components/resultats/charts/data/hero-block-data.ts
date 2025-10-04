export type BlockProps = {
  value: string;
};

export const heroBlockDatasets: Record<
  | "resultats-1"
  | "resultats-2"
  | "resultats-3"
  | "resultats-4"
  | "resultats-5"
  | "resultats-6",
  BlockProps[]
> = {
  "resultats-1": [
    { value: "+480" },
    { value: "+300" },
    { value: "0.94%" },
    { value: "x2.5" },
  ],
  "resultats-2": [
    { value: "+520" },
    { value: "+340" },
    { value: "1.12%" },
    { value: "x2.8" },
  ],
  "resultats-3": [
    { value: "+610" },
    { value: "+420" },
    { value: "1.28%" },
    { value: "x3.0" },
  ],
  "resultats-4": [
    { value: "+700" },
    { value: "+500" },
    { value: "1.42%" },
    { value: "x3.2" },
  ],
  "resultats-5": [
    { value: "+820" },
    { value: "+600" },
    { value: "1.55%" },
    { value: "x3.6" },
  ],
  "resultats-6": [
    { value: "+950" },
    { value: "+720" },
    { value: "1.72%" },
    { value: "x4.1" },
  ],
};
