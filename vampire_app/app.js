// 1. Require Mongoose
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/vamptest';
// 2. Require your Model
// const db = require('./models');
const Vampire = require('./models/vampire');
const { filter } = require('./populateVampires');
const populateVampires = require('./populateVampires');
// 3. Require your extra data source
const vampData = require('./populateVampires');
// 4. Connect your database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('MongoDB successfully connected.');
});

mongoose.connection.on('error', (error) => {
    console.log(`MongoDB connection error: ${error}`);
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you


// Vampire.collection.insertMany(vampData, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
//     process.exit();
// });


// ### Add some new vampire data




// Vampire.create({
//     name: 'John Doe',
//     hair_color: 'brown',
//     eye_color: 'green',
//     dob:'January 9, 1920',
//     loves: ['potatoes','blood'],
//     location:'Los Angeles, California, US',
//     gender: 'm',
//     victims: 4
// });

// Vampire.create({
//     name: 'Steve Jones',
//     hair_color: 'blond',
//     eye_color: 'red',
//     dob: 'June 19, 1980',
//     loves: ['ice cream', 'rain'],
//     location: 'Phoenix, Arizona, US',
//     gender: 'm',
//     victims: 2
// });

// Vampire.create({
//     name: 'Jane Doe',
//     hair_color: 'brown',
//     eye_color: 'blue',
//     dob: 'December 2, 1960',
//     loves: ['long walks on the beach' , 'bats'],
//     location: 'Paris, France',
//     gender: 'f',
//     victims: 10
// });

// Vampire.create({
//     name: 'Susan Williams',
//     hair_color: 'blonde',
//     eye_color: 'green',
//     dob: 'August 30, 1990',
//     loves: ['sleeping' , 'coffins'],
//     location: 'Toronto, Canada',
//     gender:'f',
//     victims: 6
// });




/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

//1) find all the vampires that are females
// Vampire.find({gender: 'f'} , (error, allFemaleVampires) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(allFemaleVampires);
//     }
//     process.exit();
// });

//2) have greater than 500 victims
// Vampire.find({victims: {$gt: 500}} , (error, filteredVampires) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(filteredVampires);
//     }
//     process.exit();
// });

//3) have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 150}} , (error, filteredVampires) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(filteredVampires);
//     }
//     process.exit();
// });

//4) have a victim count is not equal to 210234
// Vampire.find({victims: {$ne: 210234}} , (error, filteredVampires) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(filteredVampires);
//     }
//     process.exit();
// });

//5) have greater than 150 AND fewer than 500 victims
// Vampire.find({victims: {$gt: 150 , $lt: 500}} , (error, filteredVampires) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(filteredVampires);
//     }
//     process.exit();
// });


/////////////////////////////////////////////////
// ### Select by exists or does not exist
//1) have a title property
// Vampire.find({title: {$exists: true}} , (error,titleVampires) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(titleVampires);
//     }
//     process.exit();
// });

//2) do not have a victims property
// Vampire.find({victims: {$exists: false}} , (error,noVictims) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(noVictims)
//     }
//     process.exit();
// });

//3) have a title AND no victims
// Vampire.find({victims: {$exists: false} , title: {$exists: true}} , (error, filteredVampires) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(filteredVampires)
//     }
//     process.exit();
// });

//4) have victims AND the victims they have are greater than 1000
Vampire.find({victims: {$exists: true} , victims: {$gt: 1000}} , (error, filteredVampires) => {
    if (error) {
        console.log(error)
    } else {
        console.log(filteredVampires)
    }
    process.exit();
});
/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////

// const VampireModel = require('./models/vampire');


// module.exports = {
//     Vampire: VampireModel
// };

