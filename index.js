const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const countSpans = document.querySelectorAll('.count');
const totalPriceSpan = document.querySelector('.total-price');
const buyButton = document.querySelector('.buy-button');

const prices = [10.00, 15.40, 5.00 , 7.50, 13.99];
let counts = [0, 0, 0, 0, 0]; 

function updateTotalPrice() {
    let total = 0;
    for (let i = 0; i < counts.length; i++) {
        total += counts[i] * prices[i];
    }
    totalPriceSpan.textContent = `$${total.toFixed(2)}`;
}

function updateCounter(index, increment) {
    if (increment) {
        counts[index]++;
    } else {
        if (counts[index] > 0) {
            counts[index]--;
        }
    }
    countSpans[index].textContent = counts[index];
    updateTotalPrice();
}

decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        updateCounter(index, false);
    });
});

incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        updateCounter(index, true);
    });
});

buyButton.addEventListener('click', () => {
    let totalItems = counts.reduce((acc, curr) => acc + curr, 0);
    alert(`Товаров в корзине: ${totalItems}, общая цена: ${totalPriceSpan.textContent}`);
});
