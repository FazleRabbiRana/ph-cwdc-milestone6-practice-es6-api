/* -------------------------
 * Task-1
 * একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।
------------------------- */

const bio = {
	name: {
		first: 'Fazle',
		middle: 'Rabbi',
		last: 'Rana',
	},
	interests: ['books', 'sports', 'travelling', 'movies'],
	cash: 3000,
	fullName: function() {
		let fullName = `Full name is: ${this.name.first} ${this.name.middle} ${this.name.last}`;
		return fullName;
	},
	income: function(addAmount) {
		this.cash = this.cash + addAmount;
		return this.cash;
	}
}

const name = bio.fullName();
console.log(name);

const newBalance = bio.income(700);
console.log(newBalance);

/* -------------------------
 * Task-2
 * একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
------------------------- */

const bioSummary = `${bio.name.last} has interest in ${bio.interests[0]}. ${bio.name.last} got a cash balance of ${bio.income(1000)}.`;

console.log(bioSummary);