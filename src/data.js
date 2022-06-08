const exchangeRates = {
USDKGS: 89,
EURKGS: 100,

} 
export function exchangeRates(USDKGS) {
    return exchangeRates[
        exchangeRates.findIndex(
            exchangeRates =>  exchangeRates.USDKGS === USDKGS
      )
    ];
  }
  export function exchangeRates(EURKGS) {
    return change[
       change.findIndex(
            change =>  change.EURKGS === EURKGS
      )
    ];
  }