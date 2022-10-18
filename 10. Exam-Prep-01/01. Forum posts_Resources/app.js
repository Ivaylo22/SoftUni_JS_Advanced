window.addEventListener("load", solve);

function solve() {
    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');
    let buttonPublish = document.getElementById('publish-btn');
    let ul = document.getElementById('review-list');   

    buttonPublish.addEventListener('click', publish);
       
    function publish() {
        if(title.value.length === 0 || category.value.length === 0 || content.value.length === 0){
          return;
        }
        let li = document.createElement('li');
        li.classList.add('rpost');
        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.innerText = title.value;
        let pCategory = document.createElement('p');
        pCategory.innerText = "Category: " + category.value;
        let pContent = document.createElement('p');
        pContent.innerText = "Content: " + content.value;
        article.appendChild(h4);
        article.appendChild(pCategory);
        article.appendChild(pContent);

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('action-btn');
        buttonEdit.classList.add('edit');
        buttonEdit.textContent = "Edit";

        let buttonApprove = document.createElement('button');
        buttonApprove.classList.add('action-btn');
        buttonApprove.classList.add('approve');
        buttonApprove.textContent = 'Approve';       

        li.appendChild(article);
        li.appendChild(buttonApprove);
        li.appendChild(buttonEdit);
        ul.appendChild(li);
        
        title.value = '';
        category.value = '';
        content.value = '';

        buttonEdit.addEventListener('click', edit);
        buttonApprove.addEventListener('click', approve);

        

        function edit(){
          title.value = h4.innerText;
          category.value = pCategory.innerText.replace("Category: ","");
          content.value = pContent.innerText.replace("Content: ","");
          ul.removeChild(li);
        }

        function approve(){
          let ulApprove = document.getElementById('published-list');
          li.removeChild(buttonApprove);
          li.removeChild(buttonEdit);
          ulApprove.appendChild(li);     

          let buttonClear = document.getElementById('clear-btn');
          buttonClear.addEventListener('click', clear);
          function clear(){
            ulApprove.removeChild(li);
          }     
        }

      };
}
