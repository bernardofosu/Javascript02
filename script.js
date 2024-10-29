"use strict";

// functions
const yourAge = calAge(1996);

function calAge(birthYear) {
    return 2024 - birthYear;
}

console.log(yourAge);


// functions
const calAge1 = function (birthYear) {
    return 2024 - birthYear;
}

const yourAge1 = calAge1(1998);
console.log(yourAge1);


function cutFruitPieces(fruit) {
    return fruit * 4;
}


// functions
function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} apples and ${orangesPieces} oranges`;
    return juice;
}

console.log(final)
const final = fruitProcessor(2, 3)

const calcAverage1 = (scoreOne, scoreTwo, scoreThree) => {
    const totalAverage = (scoreOne + scoreTwo + scoreThree) / 3;
    return totalAverage;
}


// functions
const avgDolphins = calcAverage1(44, 23, 71);
const avgKoalas = calcAverage1(65, 54, 49);

const avgDolphins1 = calcAverage1(85, 54, 41);
const avgKoalas1 = calcAverage1(23, 34, 27);

console.log(avgDolphins, avgKoalas, avgDolphins1, avgDolphins1);


const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas}.)`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins}.)`;
    }
    else {
        return `No team won!`;
    }

}

console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(avgDolphins1, avgKoalas1));
console.log(checkWinner(200, 100));


// functions exercise
const checkWinner1 = function (avgDolphins, avgKoalas, avgDolphins1, avgKoalas1) {

    const totalAverageDolphins = avgDolphins + avgDolphins1;
    const totalAverageKoalas = avgKoalas + avgKoalas1;
    console.log(totalAverageDolphins, totalAverageKoalas);

    if (totalAverageDolphins > totalAverageKoalas) {
        return `Dolphins win (${totalAverageDolphins} vs. ${totalAverageKoalas}.)`;
    }
    if (totalAverageDolphins < totalAverageKoalas) {
        return `Dolphins win (${totalAverageKoalas} vs. ${totalAverageDolphins}.)`;
    }
    else {
        return `No team won!`;
    }

    console.log(checkWinner1(avgDolphins, avgKoalas, avgDolphins1, avgKoalas1));



    const birth_year = [1992, 1996, 1997, 2000];

    const friends = ["Ama", "Kojo", "Kwasi"];
    console.log(friends);
    friends.push("Yaw");
    console.log(friends);


    // if and else statement
    function calcTip(bill) {

        if (bill > 50 && bill < 300) {
            const tip = bill * 0.15;
            return tip;
        }
        else if (bill >= 300) {
            const tip = bill * 0.20;
            return tip;
        }
        else {
            return 0
        }
    }

    const calculateTip = calcTip(300);
    console.log(calculateTip);

    // const testData = [125, 555, 44];

    // const tips = [18.75, 111, 0]

    // const tips2 = [calcTip(125), calcTip(555), calcTip(44)]

    // const total = [tips[0] + testData[0], tips[1] + testData[1], tips[2] + testData[2]]

    // console.log(tips2)
    // console.log(total)

    // const bernard = {
    //     firstName: "Bernard",
    //     lastName: "Ofosu",
    //     birthYear: 1996,
    //     job: "Planner",
    //     friends: ["Ama", "Kojo", "Yaw"],

    //     calAge: function () {
    //         // console.log(john)
    //         this.age = 2025 - this.birthYear;
    //         return this.age;
    //     }
    // };

    // console.log(bernard.calAge())

    // console.log(bernard.age)
    // console.log(bernard.age)
    // console.log(bernard.age)

    // console.log(`${bernard.firstName} has ${bernard["friends"].length}, his best is called ${bernard.friends[2]}`)

    // 

    // for (let rep = 1; rep <= 10; rep += 1) {
    //     console.log(`Lifting Weights ${rep}`)
    // }

    // let bernard = ["Bernard", "Ofosu", 1996, "Planner", ["Ama", "Kojo", "Yaw"],
    // ]

    // let type = []
    // for (let i = 0; i < bernard.length; i += 1) {
    //     console.log(bernard[i], typeof (bernard[i]));
    //     type[i] = typeof (bernard[i])
    // }
    // console.log(type)

    // let array = [1996, 1990, 1980, 2000]
    // let ages = []

    // for (let i = 0; i < array.length; i++) {
    //     ages.push(2024 - array[i]);
    // }
    // console.log(ages);


    // let dice = Math.trunc(Math.random() * 6 + 1);

    // while (dice === 6) {
    //     console.log(`You rolled a ${dice}`);
    //     dice = Math.trunc(Math.random() * 6 + 1);
    // }

    const bills = [22, 295, 176, 37, 105, 10, 1100, 86, 52];

    let tips = [];
    let totals = [];

    function calcTip(bills) {
        for (let i = 0; i < bills.length; i++) {
            let bill = bills[i];
            if (bill > 50 && bill < 300) {
                const tip = bill * 0.15;
                tips.push(tip);
                totals.push(bill + tip);
            }
            else if (bill >= 300) {
                const tip = bill * 0.20;
                tips.push(tip);
                totals.push(bill + tip);
            }
            else {
                let tip = 0;
                tips.push(tip);
                totals.push(bill + tip);
            }
        }
    }
// const calculateTip = calcTip(bills);
// console.log(calculateTip);
// calcTip(bills);
// console.log(bills, tips, totals);

// const arr = [22, 295, 176, 37, 105, 10, 1100, 86, 52];
// function calcTip(arr) {
//     let array_1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         array_1 += arr[i];
//     }
//     return array_1 / arr.length;
// }
// const calculateTip = calcTip(bills);
// console.log(calculateTip);
// calcTip(bills);
// console.log(calcTip(arr));
