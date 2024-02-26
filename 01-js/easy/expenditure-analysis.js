/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map1 = new Map();
  let arr = [];

  for (let i = 0; i < transactions.length; i++) {
    if (map1.has(transactions[i].category)) {
      map1[transactions[i].category] += transactions[i].price;
      // console.log(map1.get(transactions[i].category));
      // console.log("hello");
      map1.set(
        transactions[i].category,
        transactions[i].price + map1.get(transactions[i].category)
      );
    } else {
      map1.set(transactions[i].category, transactions[i].price);
      // map1[transactions[i].category] = transactions[i].price;
      // console.log(map1);
    }
  }
  // return Array.from(map1, ([category, totalSpend]) => ({
  //   category,
  //   totalSpend,
  // }));
  let a = 5;
  for (let [key, value] of map1) {
    let object = {
      category: "",
      totalSpent: a,
    };
    object.category = key;
    object.totalSpent = value;

    arr.push(object);
  }
  // console.log(arr);
  return arr;
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];
calculateTotalSpentByCategory(transactions);
module.exports = calculateTotalSpentByCategory;
