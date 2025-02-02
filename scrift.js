// // let fruits = ["apple", "banana", "cherry"]; 
// // fruits.push("orange" )
// // console.log(fruits)


// // let numbers = [10, 20, 30, 40];  
// // numbers.shift()
// // console.log(numbers)

// // let colors = ["red", "blue", "green"]; 
// // colors.splice(1,0,"yellow")
// // console.log(colors)

// // let animals1 = ["cat", "dog"]; 
// // let animals2 = ["lion", "tiger"]; 
// // let animals=animals1.concat(animals2)
// // console.log(animals)


// // let scores = [50, 30, 20, 10, 40]; 
// // scores.sort()
// // console.log(scores)

// // let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
// // cities.join("-")
// // console.log(cities)

// // let letters = ["a", "b", "c", "d"]; 
// // letters.reverse()
// // console.log(letters)

// // let books = ["Math", "Science", "History"]; 

// // console.log(books.length)

// // დავალება 1: სტრიქონის სიგრძე
// // შეამოწმეთ მოცემული სტრიქონის სიგრძე და დააბეჭდეთ, რამდენი სიმბოლოა მასში.
// let text = 'School';
// let result = text.length;
// console.log(result);


// // დავალება 2: სტრიქონის ყველა ასო დიდი
// // შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ დიდი ასოებით.
// let text1 ="School";
// let result1 = text1.toUpperCase();
// console.log(result1);


// // დავალება 3: სტრიქონის ყველა ასო პატარა
// // შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ პატარა ასოებით.

// let text3= "School";
// let result3=text3.toLowerCase();
// console.log(result3);


// // // დავალება 4: სტრიქონის კონკრეტული სიმბოლო
// // // შეიტანეთ სტრიქონი და შეამოწმეთ, რა სიმბოლოა კონკრეტულ ინდექსზე.
// // let text4 ="School";
// // let result4 = text4.indexOf(h);
// // console.log(result4);


// // დავალება 5: სტრიქონის ნაწილი
// // შეიტანეთ სტრიქონი და ამოჭერით მხოლოდ ნაწილობრივი სტრიქონი (ინდექსებით განსაზღვრული).

// let text5 =" School";
// let result5 = text5.slice(1,4);
// console.log(result5);


// // დავალება 6: სტრიქონის ცვლილება
// // შეიტანეთ სტრიქონი და შეცვალეთ სიტყვა "hello" სიტყვით "hi".
// let text6 =" hello";
// let result6 = text6.replace("hello" , "hi")
// console.log(result6);


// // // 
// // დავალება 7: სტრიქონის განაწილება
// // შეიტანეთ სტრიქონი, რომელშიც სიტყვები გამოყოფილია მძიმეთი, და გაყავით სტრიქონი შესაბამის ნაწილებად (მიუთითეთ split() მეთოდზე).
// let text7 ="hello Word";
// let result7 = text7.split()
// console.log(result7);



// // დავალება 8: სტრიქონის დასაწყისი
// // შეამოწმეთ, იწყება თუ არა სტრიქონი სიტყვით "Java"
// let text8 ="hello";
// let result8 = text8.startsWith("java")
// console.log(result8);


// // დავალება 9: სტრიქონის ბოლოს
// // შეამოწმეთ, მთავრდება თუ არა სტრიქონი სიტყვით "Script".
// let text9 ="hello";
// let result9 = text9.endsWith("Script")
// console.log(result9);


// // დავალება 10: სტრიქონის გამეორება
// // შეიტანეთ სტრიქონი და გამეორეთ ის 4-ჯერ.
// let text10 ="hello";
// let result10 = text10.repeat(4)
// console.log(result10);

// // დავალება 11: სტრიქონის ცარიელი სივრცეების მოცილება
// // შეიტანეთ სტრიქონი, რომელშიც იქნება ცარიელი ადგილები დასაწყისსა და ბოლოში. წაშალეთ ეს ცარიელი ადგილები.
// let text11 ="   hello";
// let result11 = text11.trim()
// console.log(result11);


// // დავალება 12: სტრიქონის გამოყოფა 

// // შეიტანეთ სტრიქონი და შეამოწმეთ, თუ შეიცავს თუ არა ის სიტყვას "JavaScript".

// let text12 ="   hello";
// let result12 = text12.includes('JavaScript')
// console.log(result12);


// let fullName = (prompt('დაწერე სახელი'))
// let resalt = fullName.charAt(0).toUpperCase()+ fullName.slice(1).toLowerCase();

// console.log(`ჩემი სახელია ${Text}`);


// let fullName = (prompt('დაწერე სახელი'))
//  console.log(`ჩემი სახელია ${fullName}`);



//  შექმენით ობიექტი, რომელიც შეიცავს შემდეგ მონაცემებს: 

// let student = {
//     fullname: 'mari',
//     age: 50,
//     study:true,
//     subject :  [ 'Math', 'geografi', 'biology'],
//     addres:{
//      city : 'tbilisi',
//       street:'meunargia' },

// }

// console.log(student)


// შექმენი ობიექტი  წიგნის  

// let book = {
//     aoutor : 'ilia',
//     year: 1985 ,
//     ilia : true,
//     janr: {
//         aoutor :'chavchavadze',
//         aoutor :' wereteli',
//     },
// }
// console.log(book)



// შექმენი ობიექტი, რომელიც აღწერს თეატრის ბილეთს. 

let tiket = {
    tiketNumber: 50,
    price: 20 ,
    Available : true,
    addres: {
        city :'tbilisi',
        street:' Wavchavadze',
    },
}



 tiket.price=30,
 console.log(tiket)