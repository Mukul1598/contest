/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  
  let result = arr.filter(person => person.profession === "developer");
  console.log(result);

  // let result = arr.filter(student => {
  //   return student.profession === "developer";
  // });
  // console.log(result);

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  
  let result = arr.forEach(person => {
    if(person.profession === "developer"){
      console.log(person);
    }
  });

}

function addData() {
  //Write your code here, just console.log

  arr.push({id:4,name:"susan", age:"20", profession:"intern"});
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  
  let result = arr.filter(person => person.profession !== "admin");
  console.log(result);

  // for(let i = 0; i<arr.length ; i++){
  //   if(arr[i].profession === "admin"){
  //     arr.splice(i,1);
  //     break;
  //   }
  // }
  // console.log(arr);

}

function concatenateArray() {
  //Write your code here, just console.log

  let newArr = [{ Id: 6, Profession: "Wrestler", age: "44", Name: "John Cena" },
                { Id: 7, Profession: "Actor", age: "40", Name: "Jack Sparrow" },
                { Id: 8, Profession: "Actress", age: "36", Name: "Karen Gillian" },
                ];
  
  let result = arr.concat(newArr);
  console.log(result);
  
}
