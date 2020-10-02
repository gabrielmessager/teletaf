/**
 * Theme definition
 */

// import { SMALL_MAX, MEDIUM_MIN, MEDIUM_MAX, LARGE_MIN } from './breakpoints';

export const SMALL_MAX = 480
export const MEDIUM_MIN = SMALL_MAX + 1
export const MEDIUM_MAX = 960
export const LARGE_MIN = MEDIUM_MAX + 1

export const SMALL = `screen and (max-width: ${SMALL_MAX}px)`
export const MEDIUM_UP = `screen and (min-width: ${MEDIUM_MIN}px)`
export const MEDIUM = `screen and (min-width: ${MEDIUM_MIN}px) and (max-width: ${MEDIUM_MAX}px)`
export const MEDIUM_DOWN = `screen and (max-width: ${MEDIUM_MAX}px)`
export const LARGE = `screen and (min-width: ${LARGE_MIN}px)`

const breakpoints = {
  tablet: "768px",
  desktop: "992px",
}

const mediaQueries = {
  mobile: `@media screen and (max-width: ${breakpoints.tablet})`,
  tablet: `@media screen and (max-width: ${breakpoints.desktop})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
}

const spaces = {
  px: "1px",
  0: "0",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  48: "48px",
  64: "64px",
}

// const zIndices = {
//   negative: -1,
//   base: 0,
//   auto: "auto",
//   overlay: 1300,
//   modal: 1400,
//   popover: 1500,
//   toast: 1600,
//   tooltip: 1700,
// }

export const baseTheme = {
  // zIndices,
  breakpoints,
  mediaQueries,
  spaces,
  radii: {
    0: 0,
    4: "4px",
    6: "6px",
    8: "8px",
  },
  fontSizes: {
    12: "12px",
    14: "14px",
    16: "16px",
  },
}

export const colorPalette = {
  /** Reds */
  red010: "#FCF3F2",
  red020: "#FADCD9",
  red030: "#FABBB4",
  red040: "#FC9086",
  red050: "#FA5343",
  red060: "#D91F11",
  red070: "#A1160A",
  red080: "#75160C",
  red090: "#4F150F",
  red100: "#24120C",

  /** Oranges */
  orange010: "#FCF2EB",
  orange020: "#FCDDC7",
  orange030: "#FCBC97",
  orange040: "#FC9162",
  orange050: "#E86427",
  orange060: "#BF4815",
  orange070: "#8F3415",
  orange080: "#632B17",
  orange090: "#402117",
  orange100: "#1F1410",

  /** Yellows */
  yellow010: "#FAF6CF",
  yellow020: "#F7E379",
  yellow030: "#F5C518",
  yellow040: "#D9A514",
  yellow050: "#B3870E",
  yellow060: "#946613",
  yellow070: "#70491C",
  yellow080: "#54341F",
  yellow090: "#38251B",
  yellow100: "#1C1613",

  /** Limes */
  lime010: "#EBF7DA",
  lime020: "#D5F0B1",
  lime030: "#AAD971",
  lime040: "#78BF39",
  lime050: "#52A31D",
  lime060: "#3C7D0E",
  lime070: "#2E5C0E",
  lime080: "#254211",
  lime090: "#1C2E10",
  lime100: "#121A0D",

  /** Greens */
  green010: "#EBF7ED",
  green020: "#C7EBD1",
  green030: "#88DBA8",
  green040: "#43C478",
  green050: "#16A163",
  green060: "#077D55",
  green070: "#075E45",
  green080: "#094536",
  green090: "#092E25",
  green100: "#081A15",

  /** Teals */
  teal010: "#EBF5F4",
  teal020: "#BEEBE7",
  teal030: "#86D9D4",
  teal040: "#4EBFB9",
  teal050: "#279C9C",
  teal060: "#167B7D",
  teal070: "#155C5E",
  teal080: "#124241",
  teal090: "#102E2D",
  teal100: "#0C1A19",

  /** Turquoises */
  turquoise010: "#EBF5F4",
  turquoise020: "#C7E8ED",
  turquoise030: "#81D8E6",
  turquoise040: "#45BCD1",
  turquoise050: "#159AB3",
  turquoise060: "#067A91",
  turquoise070: "#09596B",
  turquoise080: "#0C424D",
  turquoise090: "#102D33",
  turquoise100: "#0F181A",

  /** Aquas */
  aqua010: "#EBF3F7",
  aqua020: "#C9E7F5",
  aqua030: "#8BD3F7",
  aqua040: "#48B8F0",
  aqua050: "#1195D6",
  aqua060: "#0073BA",
  aqua070: "#08548A",
  aqua080: "#0E3D66",
  aqua090: "#0C2B45",
  aqua100: "#0B1724",

  /** Blues */
  blue010: "#F0F4FA",
  blue020: "#D4E4FA",
  blue030: "#ADCCF7",
  blue040: "#75B1FF",
  blue050: "#3D8DF5",
  blue060: "#186ADE",
  blue070: "#0D4EA6",
  blue080: "#103A75",
  blue090: "#11294D",
  blue100: "#0D1826",

  /** Ultramarines */
  ultraMarine010: "#F2F3FA",
  ultraMarine020: "#DEE0FA",
  ultraMarine030: "#C2C7FC",
  ultraMarine040: "#A0A7FA",
  ultraMarine050: "#7681FC",
  ultraMarine060: "#545FE8",
  ultraMarine070: "#3A45B0",
  ultraMarine080: "#2F337D",
  ultraMarine090: "#23254D",
  ultraMarine100: "#141429",

  /** Purples */
  purple010: "#F7F2FC",
  purple020: "#EADCFC",
  purple030: "#DABEFA",
  purple040: "#C89AFC",
  purple050: "#AC71F0",
  purple060: "#8F49DE",
  purple070: "#6B30AB",
  purple080: "#4C277D",
  purple090: "#331F4D",
  purple100: "#1C1229",

  /** Pinks */
  pink010: "#FCF0F8",
  pink020: "#F7DAED",
  pink030: "#F7B7E2",
  pink040: "#FA87D4",
  pink050: "#ED4CB7",
  pink060: "#CC1D92",
  pink070: "#961574",
  pink080: "#6B155A",
  pink090: "#47153F",
  pink100: "#241020",

  /** Grays */
  gray010: "#F2F5F7",
  gray020: "#DCE3E8",
  gray030: "#C1CCD6",
  gray040: "#9FB1BD",
  gray050: "#7A909E",
  gray060: "#5B7282",
  gray070: "#3E5463",
  gray080: "#2A3F4D",
  gray090: "#1C2B36",
  gray100: "#0E171F",

  /** White alpha scale */
  whiteA00: "rgba(255, 255, 255, 0.02)",
  whiteA05: "rgba(255, 255, 255, 0.04)",
  whiteA10: "rgba(255, 255, 255, 0.08)",
  whiteA15: "rgba(255, 255, 255, 0.10)",
  whiteA20: "rgba(255, 255, 255, 0.15)",
  whiteA30: "rgba(255, 255, 255, 0.2)",
  whiteA40: "rgba(255, 255, 255, 0.3)",
  whiteA50: "rgba(255, 255, 255, 0.4)",
  whiteA60: "rgba(255, 255, 255, 0.5)",
  whiteA70: "rgba(255, 255, 255, 0.6)",
  whiteA80: "rgba(255, 255, 255, 0.7)",
  whiteA90: "rgba(255, 255, 255, 0.8)",
  whiteA100: "rgba(255, 255, 255, 1)",
}

export const theme = {
  ...baseTheme,
  colors: colorPalette,
}
