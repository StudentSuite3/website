export const PLACE_TYPES = [
  "library",
  "other_places",
  "airport",
  "sat_centre",
  "foreign_lang_exam_centre",
  "gov_offices",
] as const;

export type PlaceType = (typeof PLACE_TYPES)[number];

export const PLACE_TYPE_LABELS: Record<PlaceType, string> = {
  library: "Library",
  other_places: "Other places",
  airport: "Airport",
  sat_centre: "SAT centre",
  foreign_lang_exam_centre: "Foreign lang exam centre",
  gov_offices: "Government offices",
};
