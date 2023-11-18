const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
      data.forEach((person)=>{
          if(person.profession==="developer"){
              console.log(person);
          }
      })
  }
  
  // 2. Add Data
  function addData() {
      let newname=prompt("Enter the name:");
      let newage=parseInt(prompt("Enter the age"));
      let newprofession=prompt("Enter the profession:");
      data.push({
          name:newname,
          age:newage,
          profession:newprofession
      });
      console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
      data=data.filter((person)=>person.profession!="admin");
      console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
      let dummyarray=[
      {name:"anjali",age:24,profession:"developer"},    
           {name:"pooja",age:22,profession:"student"}
          ]
        let combinedArr=data.concat(dummyarray);
        console.log(combinedArr);
  }
  
  // 5. Average Age
  function averageAge() {
      let avgval=0;
     
          data.forEach((person)=>{
              avgval+=person.age;
          })
          console.log(avgval/data.length);
      }
  
  
  // 6. Age Check
  function checkAgeAbove25() {
    let status=false;
    data.forEach(person=>{
        if(person.age>25){
            status=true;
        }
    })
    console.log(status);
     
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
      let professionsarr=[];
      data.forEach(person=>{
          if(!professionsarr.includes(person.profession)){
              professionsarr.push(person.profession);
          }
      })
      console.log(professionsarr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
      data.sort((a,b)=>a.age-b.age);
      console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
      data.forEach(person=>{
          if(person.name=="john"){
              person.profession="manager";
          }
      })
      console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
      let devcount=data.filter(person=>person.profession=="developer");
      let admincount=data.filter(person=>person.profession=="admin");
     
      console.log('Developers:${devcount.length}',
      'admin:${admincount.length}');
  }