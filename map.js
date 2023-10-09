// Creating a map
const details = new Map();

details.set("name", "Vignesh Balan M");
details.set("age", 20);
details.set("occupation", "");

const name = details.get("name");

const hasAge = details.has("age");

for (const [key, value] of details) {
  console.log(`${key}: ${value}`);
}
