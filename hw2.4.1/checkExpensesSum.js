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

function yearlyExpensesSum(expenses) {
  let filteredExpenses = expenses.yearlyExpenses.filter(
    (number) => number > 1000
  );
  console.log("filtered array of expenses:", filteredExpenses);
  let sum = 0;
  for (i = 0; i < filteredExpenses.length; i++) {
    sum += filteredExpenses[i];
  }
  console.log("Sum of filtered expenses is = ", sum);
}

expensesExamples.forEach((expenses) => {
  yearlyExpensesSum(expenses);
});
