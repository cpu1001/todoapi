const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


 var password = 'abc1233';
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });


var hashedPassword = '$2a$10$U8R/rpMrWZ.knQhRLc1j9Onu13CA8QudJ5b5QNPAyfcK7HCFG4PRu';

bcrypt.compare(password, hashedPassword, (err, res)=>{
    console.log(res);
});


// var data = {
//     id:10
// };

// var token = jwt.sign (data, '123abc');

// console.log(token);

// var decoded = jwt.decode(token, '123abc');
// console.log('Decoded var: ' + decoded);





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