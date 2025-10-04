export type StoryResult = {
  image: string;
  title: string;
  translationKey: string;
};

export const storyResultatsDatasets: Record<
  | "resultats-1"
  | "resultats-2"
  | "resultats-3"
  | "resultats-4"
  | "resultats-5"
  | "resultats-6",
  StoryResult
> = {
  "resultats-1": {
    image: "https://app.lezard-agency.com/api/ig/pdp/meryyrodriguezz?cb=1759162955926",
    title: "Maria Rodri 🤠",
    translationKey: "resultats.story.1",
  },
  "resultats-2": {
    image: "https://app.lezard-agency.com/api/ig/pdp/tealer?cb=1759330612505",
    title: "Tealer",
    translationKey: "resultats.story.2",
  },
  "resultats-3": {
    image: "https://app.lezard-agency.com/api/ig/pdp/becaybrand?cb=1759330645004",
    title: "Becay",
    translationKey: "resultats.story.3",
  },
  "resultats-4": {
    image: "https://app.lezard-agency.com/api/ig/pdp/theride.collective?cb=1759330681641",
    title: "The Ride Collective",
    translationKey: "resultats.story.4",
  },
  "resultats-5": {
    image: "https://app.lezard-agency.com/api/ig/pdp/clemencebertrand?cb=1759330766221",
    title: "Clemence Bertrand",
    translationKey: "resultats.story.5",
  },
  "resultats-6": {
    image: "https://app.lezard-agency.com/api/ig/pdp/shopnatscafe?cb=1759330807958",
    title: "Shopnats Cafe",
    translationKey: "resultats.story.6",
  },
};
