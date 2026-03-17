let subs: string | number = '1M';

// union ke matlab ha: variable multiple types le sakte ha lekin is main sirf limited types allowed hoti hain.

let ApiRequestStatus: 'pending' | 'success' | 'error' = "pending";

let airlineSeat: 'aisle' | 'middle' | 'window' = "middle";

let orders = ['20', '12', '28', '35']

let currentOrder: string | undefined;

for (const order of orders) {
  if (order === '28') {
    currentOrder = order;
  }
}

// currentOrder = 45;  avoid this


console.log(currentOrder);


// any: ke matlab ha typescript ko farq nahi parte variable kis type ke hai.

let data: any;

data = "hello";
data = 12;
data = true;
data = [];

console.log(data);
