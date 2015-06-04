# exchange-rates-bdf
Tipo de Cambio del Banco de Finanzas (http://www.bdfnet.com/)

## Install

    npm i exchange-rates-bdf

## Example

    var ExchangeRate = require('exchange-rates-bdf');
    var exchangeRate = new ExchangeRate();

    exchangeRate.get(function(err, result) {
      console.log(result)
    });

## Response

    {
      usd: {
        buy: 26.86,
        sale: 27.32
      },
      eur: {
        buy: 27.2266,
        sale: 30.8644
      }
    }
