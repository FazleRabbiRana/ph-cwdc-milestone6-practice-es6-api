/* -------------------------
 * Task-4
 * অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
------------------------- */
const numbers = [24, 52, 45, 94, 58, 32, 14, 97, 38];
const dividedBySeven = numbers.map(number => Math.round(number / 7));
console.log(dividedBySeven);

/* -------------------------
 * Task-5
 * জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
------------------------- */
/**
* array.map(): 
  => Loops through an array and returns a new array using a callback function.

* array.forEach():
  => Loops through an array and directly give result without returning an array.

* array.filter():
  => Loops through an array and returns an array based on the condition fulfilled.

* array.find():
  => Loops through an array and returns only the first element which meets the condition.
*/

/* -------------------------
 * Task-6:
 * সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
------------------------- */
const mobile = {
	brand: 'samsung',
	origin: 'south korea',
	price: {
		storage64gb: 30000,
		storage128gb: 35000,
	},
	colors: ['black', 'purple', 'white'],
}

const {origin} = mobile;
console.log(origin); 

const {storage128gb} = mobile.price;
console.log(storage128gb);
