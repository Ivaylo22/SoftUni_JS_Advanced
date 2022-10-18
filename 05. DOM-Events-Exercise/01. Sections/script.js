function create(words) {
   let content = document.getElementById('content');

   let splitted = Array.from(words);
   
   for(let i = 0; i < splitted.length; i++){
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = splitted[i];
      p.style.display = "none";

      div.appendChild(p);

      content.appendChild(div);
      console.log(p);
      console.log(div);

      div.addEventListener('click', function(){
         this.children[0].style.display = "block";
      });
   }
}