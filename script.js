// APIを利用して仮想通貨の価格を取得する例
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=jpy')
    .then(response => response.json())
    .then(data => {
        const priceList = document.getElementById('price-list');
        for (const [key, value] of Object.entries(data)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ¥${value.jpy}`;
            priceList.appendChild(listItem);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
