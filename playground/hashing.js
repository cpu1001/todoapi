const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');





var data = {
    id:10
};

var token = jwt.sign (data, '123abc');

console.log(token);

var decoded = jwt.decode(token, '123abc');
console.log('Decoded var: ' + decoded);





// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log (`Message : ${message}`);
// console.log (`Hash : ${hash}`);

// var data = {
//     id : 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.has


// var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Success, data passed');
// } else {
//     console.log('data changed, dont trust');
// }