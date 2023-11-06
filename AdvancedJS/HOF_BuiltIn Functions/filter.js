let myarr = [1,2,3,4,5,7,8,2,6,9]

let evenArr = myarr.filter(

    function (num){
        // let result = num % 2
        // if(result == 0)
        //     return true
        // else
        //     return false
        return num%2 == 0;
    }
)

console.log(evenArr)


const students = [
    { name: 'John James', status: true},
    { name: 'Micheal Obi', status: false },
    { name: 'Bola Ade', status: true },
    { name: 'Emmanuel', status: false },
    { name: 'Faithfulness Alamu',status: true },
  ];
//   const presentStudent= [];
//   for(let i = 0; i < student.length; i++) {
//     if(students[i].status >= true) {
//       presentStudent.push(students[i].name);
//     }
//   }
//   console.log(presentStudent);
  //Output
  //[ 'John James', 'Bola Ade', 'Faithfulness Alamu' ]

  const presentStudent =students.filter(student => student.status == true);
console.log(presentStudent);
