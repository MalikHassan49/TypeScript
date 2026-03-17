"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = '1M';
// union ke matlab ha: variable multiple types le sakte ha
let ApiRequestStatus = "pending";
let airlineSeat = "middle";
let orders = ['20', '12', '28', '35'];
let currentOrder;
for (const order of orders) {
    if (order === '28') {
        currentOrder = order;
    }
}
// currentOrder = 45;  avoid this
// console.log(currentOrder);
// any: ke matlab ha typescript ko farq nahi parte variable kis type ke hai.
let data;
data = "hello";
data = 12;
data = true;
data = [];
console.log(data);
//# sourceMappingURL=unionAndany.js.map