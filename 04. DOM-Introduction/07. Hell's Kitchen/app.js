function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      let restourants = [];

      for(let rest of input){
         [name, allWorkers] = rest.split(" - ")
         if(!restourants.find(e=>e.name === name)){
            let currRest = {
               name,
               averageSalary: 0,
               highestSalary: 0,
               workers: allWorkers.split(", ")
            };
            restourants.push(currRest);
         }
         else{
            for(let worker of allWorkers){
               rest.workers.push(worker);
            }
         }         
      }

      for(let rest of restourants){
         let currSalary = 0;
         let highSalary = 0;

         for(let worker of rest.workers){
            let salary = Number(worker.split(" ")[1]);
            currSalary += salary;
            if(highSalary < salary){
               highSalary = salary;
            }
         }
         rest.averageSalary = currSalary / rest.workers.length;
         rest.highestSalary = highSalary;
      }

      let bestRest = {};
      Object.assign(bestRest, restourants[0]);
      for(let currRest of restourants){
         if(currRest.averageSalary > bestRest.averageSalary){
            Object.assign(bestRest, currRest);
         }
      }
      let sortedWorkers = bestRest.workers.sort((a,b) => {b.split(" ")[1] - a.split(" ")[1] });

      let restOutput = document.querySelector("#bestRestaurant p");
      let workersOutput = document.querySelector("#workers p");
      let buff = "";

      for(let worker of sortedWorkers){
          buff += `Name: ${worker.split(" ")[0]} With Salary: ${worker.split(" ")[1]} `;
      }

      restOutput.textContent = `Name: ${bestRest.name} Average Salary: ${bestRest.averageSalary.toFixed(2)} Best Salary: ${bestRest.highestSalary.toFixed(2)}`;
      workersOutput.textContent = buff;
   }
  

}