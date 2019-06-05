// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application

document.addEventListener('DOMContentLoaded',function(){


const myForm = document.querySelector('#new_todo');

myForm.addEventListener('submit', function(e){

    e.preventDefault();

    console.log("I m in the event submit");

    const formData = new FormData(myForm);



    fetch(myForm.getAttribute('action'),{
        method: myForm.getAttribute('method'),
        body: formData,
        headers:{
            
            'Accept': 'application/json'
        },
        // credentials: 'same-origin'
       // responseType: 'JSON'
    }).then(res=> res.json())
    .then(function(response){

        console.log("Success::",response);
        document.querySelector('#todo_content').value = '';
        const myList = document.querySelector('#myList');
        //myList.insertAdjacentHTML('beforeend', response); //html response
        const newItem = document.createElement('li');
        newItem.innerText = response.content;
   
      myList.appendChild(newItem);
    });

})
});