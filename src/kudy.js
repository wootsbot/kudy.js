const configDefault = require("./config-default");

function Kudy() {
  let self = this;

  self.config = {
    numberRandom: configDefault.defaultNumberRandom,
    phrases: configDefault.phrases
  };

  self.configure = function(options) {
    self.config = Object.assign(configDefault, options || {});
  };
}

Kudy.prototype.make = function() {
  let self = this;

  const numberRandom = self.config.numberRandom || self.config.phrases.length;
  const phrases = self.config.phrases;

  const quotes = phrases[Math.floor(Math.random() * numberRandom)];

  return quotes;
};

const instance = new Kudy();

module.exports = instance;
