// Que => 1 Reverse String using set time-out
let input = "input"
function reverseString(str){
    return input.split("").reverse().join("")
}

function delayString(){
setTimeout(()=>{
const reversed = reverseString(input)
console.log(reversed)
},2000)
}

delayString()

// Que:-2 random Number

let delay = 3;
let randomNumber = setInterval(()=>{
    delay--;
    // display message every number untill random number generated
    console.log(`${delay} seconds left to print the random number`)
    // condition to stop random number at "0" second
    if(delay===0){
        clearInterval(randomNumber);
        const randomNumberGenrate = Math.floor(Math.random()*100);
        console.log(`random number generated ${randomNumberGenrate}`);
    }

},3000)

// Que -3 Exchange rate

let cart = {
    item1 : 100,
    item2 : 200
}

let exchangeRate = 80;
// convert dollar into rupee using map
let priceInRupee = Object.fromEntries(Object.entries(cart).map(([item,value])=>[item,value * exchangeRate]))

console.log(priceInRupee);

// here Object.fromEntries change an array into an object
// object.entries change an object into an array



// Que-4 filterd books greater than 2010

const books = [
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2012 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 2015 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 }
  ];
  
 const filteredBooks = books
 .filter(book => book.year >= 2010)
 .map(book => ({
   title: book.title,
   author: book.author.toUpperCase(),
   year: book.year
 }));

console.log(filteredBooks);

// Que-5 Url Validation

let url = "https://pwskills.com/Asif_ahamad"

let pattern = /https:/gi

function urlMatch(){
  if(url.match(pattern)){
    return "pattern-Match"
  }else{
    return "something went wrong try again"
  }
}

console.log(urlMatch());

// Que-6 linkedin url validation


function validateLinkedInProfileURL(url) {
  // define regular expression pattern for valid LinkedIn profile URLs
  const pattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

  // test the input URL against the regular expression pattern
  if (pattern.test(url)) {
    return "Valid LinkedIn profile URL";
  } else {
    return "Invalid LinkedIn profile URL";
  }
}

console.log(validateLinkedInProfileURL("https://www.linkedin.com/in/john-doe")); // Valid LinkedIn profile URL
console.log(validateLinkedInProfileURL("https://www.linkedin.com/in/john.doe")); // Invalid LinkedIn profile URL (contains invalid character ".")
console.log(validateLinkedInProfileURL("https://www.linkedin.com/in/john-doe-1234567890123456789012345678901")); // Invalid LinkedIn profile URL (too long)
