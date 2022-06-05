const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];
const GREATEST = 'max'

const values = new Map();
let max = {amount: Number.MIN_VALUE};
let min = {amount: Number.MAX_VALUE};
for (let d of data) {
    values.set(d.day, d.amount);
    if (max.amount < d.amount) {
        max = d;
    }
    if (min.amount > d.amount) {
        min = d;
    }
}

for (let barChart of document.querySelectorAll("section.chart > div")) {
    const currentDay = barChart.dataset.day;
    const amount = values.get(currentDay);

    const percent = amount * 100 / max.amount;

    barChart.children[1].style.height = `${percent}px`;
    if (max.day === currentDay) {
        barChart.children[1].classList.add(GREATEST);
    } else {
        barChart.children[1].classList.remove(GREATEST);
    }

    barChart.children[0].children[0].textContent = `\$${amount}`;
}