var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

if(obj1.name == obj2.name){
  console.log("the names are equal");
}
else{
  console.log("the names are not equal");
  
if(obj1.age == obj2.age){
  console.log("the ages are equal");
}
else{
  console.log("the ages are not equal");
