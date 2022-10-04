function search() {
      let stringToSearch = document.getElementById("searchText").value;
      let br = 0;

      let words = document.getElementById("towns").getElementsByTagName('li');

      for (let i = 0; i <= words.length - 1; i++) {
            words[i].style.textDecoration = "none";
            words[i].style.fontWeight = 'normal';
      }

      for (let i = 0; i <= words.length - 1; i++) {
         if(words[i].innerHTML.includes(stringToSearch)){
            words[i].style.textDecoration = "underline";
            words[i].style.fontWeight = 'bold';
            br++;
         }
      }

      document.getElementById("result").innerHTML = `${br} matches found`;
}
