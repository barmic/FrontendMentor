const GREATEST = 'max'

fetch('https://barmic.github.io/FrontendMentor/expenses-chart-component-main/data.json')
  .then(response => response.json())
  .then(function(data) {
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
  });