let expensesExamples = [
  {
    yearlyExpenses: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function getMonthsOfLowExpenses(expenses) {
  const lowMonths = [];
  expenses.forEach((item, i) => {
    if (item <= 1000) {
      lowMonths.push(
        new Date((i + 1).toString()).toLocaleString("default", {
          month: "short",
        })
      );
    }
  });

  return lowMonths;
}

function getYearlyExpensesSum(expenses) {
  let sum = 0;
  expenses.forEach((item) => {
    if (item > 1000) {
      sum += item;
    }
  });

  return sum;
}

expensesExamples.forEach((expenses) => {
  const sum = getYearlyExpensesSum(expenses.yearlyExpenses);
  console.log("Sum of filtered expenses is = ", sum);
  const lowMonths = getMonthsOfLowExpenses(expenses.yearlyExpenses);
  console.log("Months of low expenses: ", lowMonths);
});
