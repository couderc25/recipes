
const button=document.getElementById('clickBtn');
const divList=document.getElementById('newRecipe');

//functions
function getrecipe() {
    let i=0
    const submit = document.getElementById('submit')
    const brec=document.getElementById('brec');
    //listen for button click then pull data from form
    submit.addEventListener('click', () => {   
        let rectitle = document.getElementById('title')
        let recbody = document.getElementById('recipe')
        let reccategory = document.getElementById('category')
        const ul = document.getElementById(`${recipe.reccategory}`)
        const li = document.createElement('li')
        //put data into array with keys i.e. title, body, category
        let body= {title:rectitle.value, body:recbody.value, category: reccategory.value}
        //sends error message if no category selected
        if (body.category == 'selectClass'){
            document.getElementById('inputError').innerHTML = 'Please select recipe type'
        }
        //sends error message if no title is input
        else if (body.title) {
            document.getElementById('inputError').innerHTML = ''
            
        //send data to server by turning it into json data(text) (server will decript)
        fetch('https://cedric-couder.npkn.net/nsxoqpnncs/',{
            method:'POST',
             body:JSON.stringify(body), 
            headers: {'Content-Type': 'application/json'}
        }

        ).then(getdata).then(clearForm) //calls getdata after button has been clicked 
        }   
        else {
            document.getElementById('inputError').innerHTML ='Please enter a title.'
    }
                

   });

}


//show/hide input form 
button.addEventListener('click', function ()  {
    // var password = document.getElementById('password')
    // var correctPassword = "1212";
    // console.log(password)
    // if (password === correctPassword){
    if (divList.style.display === 'none') {     
        divList.style.display = 'block';
        document.getElementById('clickBtn').innerHTML= 'Close'
        
    } else {
        divList.style.display = 'none';
        document.getElementById('clickBtn').innerHTML= 'Add New Recipe'
    }
    // else{
    //     document.getElementById('pswrdError').innerHTML = 'Incorrect passowrd'
    // }
});

//function to get title text from new recipe form

getrecipe();
function getdata(){
    fetch('https://cedric-couder.npkn.net/nsxoqpnncs/').then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
        //erase all the stuff on the websit so that when everything is pulled for the server things are not duplicated
        let catbin = document.getElementsByClassName('categorybin')

        for (let index=0; index<catbin.length; index++){
            while (catbin[index].firstChild){
                console.log(index)
                catbin[index].removeChild(catbin[index].firstChild)
            }
        }
        
        for (let recipe of data.data) {
            //adds title to table of contents as a hyper link and in the correct category
            let li = document.createElement('li');
            li.innerHTML = `<a href="#${recipe.title}">${recipe.title}</a>`;
            console.log(recipe.category)
            document.getElementById(recipe.category).appendChild(li);
            // adds recipe to recipe section and in correct 
            let div = document.createElement('div');
            div.innerHTML = `<h3 id="${recipe.title}">${recipe.title}</h3>
            <p class="instruction">
                <pre>${recipe.body}</pre>
            </p>`;
            document.getElementById(`${recipe.category}-recipes`).appendChild(div);

        }
    });
}
getdata();

// clearform function
function clearForm(){
    document.getElementById('title').value=''
    document.getElementById('recipe').value = ''
    document.getElementById('category').value='selectClass'
    document.getElementById('categoryError').innerHTML = ''
}






// // //////////////////////////////////////////////////////

// //delete stuff maybe i can get this to work one day??


// function deletRecipe (){
//     const deleteItem=document.getElementById('delete')
    
//     deleteItem.addEventListener('click', () => {
    
//         fetch('https://cedric-couder.npkn.net/nsxoqpnncs/').then((res) => {
//                     return res.json();
//                 }).then((data) => {
//                     let itemName = document.getElementById('itemName');
//                     console.log(itemName)
//                     let newData=data.data
//                     console.log(newData)
//                     let updatedData = newData.filter(x => x.title != itemName.value);
//                     console.log(updatedData)
//     console.log('test')
    
    
//     fetch('https://cedric-couder.npkn.net/nsxoqpnncs/', { 
//         method: 'DELETE'
//     });
    
//     fetch('https://cedric-couder.npkn.net/nsxoqpnncs/',{
//                 method:'POST',
//                  body:JSON.stringify(updatedData), 
//                 headers: {'Content-Type': 'application/json'}
//             })
//         })
//     })}
    
    
    
// deletRecipe()