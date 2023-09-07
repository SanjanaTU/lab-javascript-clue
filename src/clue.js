// ITERATION 1

// Suspects Array

const suspectsArray = [
{
    firstName: "John",
    lastName: "Doe",
    occupation: "Engineer",
    age: 30,
    description: "Tall with brown hair",
    image: "john-doe.jpg",
    color: "Blue",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    occupation: "Doctor",
    age: 35,
    description: "Short with black hair",
    image: "alice-smith.jpg",
    color: "Green",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    occupation: "Lawyer",
    age: 40,
    description: "Medium height with blonde hair",
    image: "bob-johnson.jpg",
    color: "Brown",
  },
  {
    firstName: "Eva",
    lastName: "Brown",
    occupation: "Teacher",
    age: 28,
    description: "Average height with red hair",
    image: "eva-brown.jpg",
    color: "Red"
  },
  {
    firstName: "Michael",
    lastName: "Davis",
    occupation: "Artist",
    age: 50,
    description: "Bearded with gray hair",
    image: "michael-davis.jpg",
    color: "Gray"
  },
  {
    firstName: "Sarah",
    lastName: "Wilson",
    occupation: "Detective",
    age: 45,
    description: "Tall with brown hair",
    image: "sarah-wilson.jpg",
    color: "Black"
  }
];


console.log(suspectsArray.length === 6);

// Rooms Array

const roomsArray = [
    { name: "Living Room" },
    { name: "Kitchen" },
    { name: "Bedroom 1" },
    { name: "Bedroom 2" },
    { name: "Bathroom 1" },
    { name: "Bathroom 2" },
    { name: "Dining Room" },
    { name: "Office" },
    { name: "Library" },
    { name: "Guest Room" },
    { name: "Basement" },
    { name: "Attic" },
    { name: "Garage" },
    { name: "Patio" },
    { name: "Backyard" }
  ];
  
  // Check if roomsArray is an array and has 15 rooms
  console.log(Array.isArray(roomsArray)); // true
  console.log(roomsArray.length === 15); // true
 

// Weapons Array

const weaponsArray = [
    { name: "Knife", weight: 0.5 },
    { name: "Pistol", weight: 1.0 },
    { name: "Rope", weight: 2.0 },
    { name: "Candlestick", weight: 1.5 },
    { name: "Lead Pipe", weight: 3.0 },
    { name: "Wrench", weight: 2.5 },
    { name: "Revolver", weight: 2.0 },
    { name: "Poison", weight: 0.2 },
    { name: "Bat", weight: 2.2 }
  ];
  
  // Check if weaponsArray is an array and has 9 weapons
  console.log(Array.isArray(weaponsArray)); // true
  console.log(weaponsArray.length === 9); // true
 

// ITERATION 2

function selectRandom(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
      }
    
      if (arr.length === 1) {
        return arr[0]; // Return the only element if the array has only one element
      }
    
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex]; // Return a random element from the array
    }
    
    // Test cases
    console.log(selectRandom([])); // Output: undefined (empty array)
    console.log(selectRandom([5])); // Output: 5 (single-value array)
    console.log(selectRandom([1, 2, 3, 4, 5])); // Output: Random element from the array
  

function pickMystery() {
    const suspectsArray = [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Alice", lastName: "Smith" },
        { firstName: "Bob", lastName: "Johnson" },
        // Add more suspects as needed
      ];
    
      const weaponsArray = [
        { name: "Knife", weight: 0.5 },
        { name: "Pistol", weight: 1.0 },
        { name: "Rope", weight: 2.0 },
        // Add more weapons as needed
      ];
    
      const roomsArray = [
        { name: "Living Room" },
        { name: "Kitchen" },
        { name: "Bedroom 1" },
        // Add more rooms as needed
      ];
    
      const randomSuspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
      const randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
      const randomRoom = roomsArray[Math.floor(Math.random() * roomsArray.length)];
    
      return {
        suspect: randomSuspect,
        weapon: randomWeapon,
        room: randomRoom
      };
    }
    
    // Test case
    const mystery = pickMystery();
    console.log(mystery);


// ITERATION 3

function revealMystery() {
    if (!mystery || !mystery.suspect || !mystery.weapon || !mystery.room) {
        return "Invalid mystery object"; // Return an error message for an invalid mystery object
      }
    
      const { suspect, weapon, room } = mystery;
    
      const fullName = `${suspect.firstName} ${suspect.lastName}`;
      const weaponName = weapon.name;
      const roomName = room.name;
    
      return `${fullName} killed Mr. Boddy using the ${weaponName} in the ${roomName}!`;
    }
    
   
    // Test case
    console.log(revealMystery(mystery));


