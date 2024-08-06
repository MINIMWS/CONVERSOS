document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegar valores dos inputs
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Taxas de câmbio fictícias para exemplo
    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85, BRL: 5.25, GBP: 0.75, JPY: 110, CHF: 0.91 },
        EUR: { USD: 1.18, EUR: 1, BRL: 6.18, GBP: 0.88, JPY: 129, CHF: 1.08 },
        BRL: { USD: 0.19, EUR: 0.16, BRL: 1, GBP: 0.14, JPY: 21, CHF: 0.17 },
        GBP: { USD: 1.33, EUR: 1.14, BRL: 7.07, GBP: 1, JPY: 146, CHF: 1.23 },
        JPY: { USD: 0.0091, EUR: 0.0077, BRL: 0.048, GBP: 0.0068, JPY: 1, CHF: 0.0084 },
        CHF: { USD: 1.1, EUR: 0.93, BRL: 5.94, GBP: 0.81, JPY: 118, CHF: 1 }
    };
    
    // Realizar a conversão
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    // Exibir o resultado
    document.getElementById('result-text').innerText = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
