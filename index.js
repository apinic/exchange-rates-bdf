var request = require('request');
var cheerio = require('cheerio');

var url = 'https://www.bac.net/exchangerate/showXmlExchangeRate.do';

var ExchangeRate = function() {

};

ExchangeRate.prototype.get = function(callback) {
  var self = this;
  request.get(url, function(err, httpResponse, body) {
    if (err) {
      callback(err, null);
    }
    else {
      $ = cheerio.load(body);

      console.log();


      var result = {
        usd: {
          buy: '',
          sale: ''
        },
        eur: {
          buy: '',
          sale: ''
        }
      };

      result.usd.buy = $('#ctl00_ContentPlaceHolder1_wucHerramientas1_lblCompraDolar').text();
      /*
      result.usd.sale = parseFloat(country.saleRateUSD[0]);

      result.eur.buy = parseFloat(country.buyRateEUR[0]);
      result.eur.sale = parseFloat(country.saleRateEUR[0]);
      */

      console.log(result);

    }
  });
};

module.exports = ExchangeRate;
