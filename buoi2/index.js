// let arr = ["chau", "khang", "phuc"];
// console.log("arr " + arr);
// console.log("lenght" + arr.length);
// console.log("push" + arr.push("nguyen"));
// console.log("arr " + arr);
// console.log("pop " + arr.pop());
// console.log("arr " + arr);
// console.log("shift " + arr.shift());
// console.log("arr " + arr);

let sp1 = {
  name: "laptop",
  price: "$2000",
  color: "black",
};

let sp2 = {
  name: "tv samsung",
  price: "$1000",
  color: " white",
};
console.log(sp1);
console.log(sp2);

sp1.option = "man hinh 4k";
sp1.note = "gaming";

sp2.manhinh = "4k";
sp2.tv = "50 inch";

let arr = [sp1, sp2];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i].price == "$1000") {
    console.log(arr[i].name);
  }
}
