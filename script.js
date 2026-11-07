console.log("Hello from script.js!");

const tags = ["vegan", "spicy", "late night"];
const prices = [6.5, 2, 12, 4];

console.log(tags, prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}

let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

const totalText = document.querySelector("#total").textContent = "$" + total;
