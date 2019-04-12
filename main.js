// Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const familyMembers = [

    {
        name: 'Randy',
        occupation: 'dentist',
        faveFood: 'donuts',
        catchphrase: 'let me force string',
        chore: 'dishes'
    },

    {
        name: 'lisa',
        occupation: 'pilot',
        faveFood: 'peanuts',
        catchphrase: 'we\'re going down.....under!',
        chore: 'mowing the lawn'
    },

    {   
        name: 'tina',
        occupation: 'straight C student',
        faveFood: 'pizza rolls',
        catchphrase: 'ahhhhhh',
        chore: 'sweeping'
    },

    {   
        name: 'raybob',
        occupation: 'dropout',
        faveFood: 'all',
        catchphrase: 'I will eat that',
        chore: 'scrubbing the toilet'
    }

]

console.log('our family: ', familyMembers);



// console log out the sentence "Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Mystery Tour Album." using information accessed from the object beatles
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);

// Represent your pet: Create an object that represents your pet.

const myPet = {
    name: 'Mo',
    species: 'reptile',
    nicknames: ['M', 'O', 'Moey'],
    age: 3
}


// Fast Food Practice: You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers.
// The object should have a property named orders that is an array. 
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    }
}

const chickenComboMeal = {
    sandwichType: 'big',
    fries: true,
    drinkSize: 'small'
}

const burgerComboMeal = {
    sandwichType: 'big',
    fries: true,
    drinkSize: 'large'
}


// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);

console.log(restaurant);

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()