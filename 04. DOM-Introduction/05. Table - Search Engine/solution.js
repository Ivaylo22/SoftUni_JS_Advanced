function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let stringToSeach = document.getElementById("searchField").value;
      let rows = Array.from(document.querySelectorAll("tbody tr"));

      rows.forEach(row => {
         if (row.innerHTML.includes(stringToSeach)){
               row.className = "select"
         }
         else{
            row.className = "";
         }
      });

      document.getElementById("searchField").value = "";
   }
}