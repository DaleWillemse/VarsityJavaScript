let debtors = [
    { name: 'John Doe', amount: 200000 },
    { name: 'Jack Sparrow', amount: 300000 },
    { name: 'Judy Graham', amount: 400000 },
    { name: 'Ted Talks', amount: 500000 },
    { name: 'Ben Dover', amount: 600000 }
];

// Function that find the average debt using Map and Reduce.
function averageDebt(debtors){
    let allDebt = debtors.map(debtor => debtor.amount);
    let totalDebt = allDebt.reduce((total, amount) => total + amount);

    return totalDebt / debtors.length;
    
}

// console.log(averageDebt(debtors));