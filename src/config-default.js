const phrases = require("./phrases");

const DEFAULT_NUMBER_RANDOM = null;
const DEFAULT_LIST_PHRASES = phrases;
const LNG = "es";

const configDefault = {
  defaultNumberRandom: DEFAULT_NUMBER_RANDOM,
  phrases: DEFAULT_LIST_PHRASES,
  lng: LNG
};

module.exports = configDefault;
