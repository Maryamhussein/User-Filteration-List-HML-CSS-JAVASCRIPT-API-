let list=document.getElementById('userlist')
let searchInput=document.getElementById('search');
const baseUrl='https://randomuser.me/api/?results=100'
let listItems=[];
async function getUser(){
    const response= await fetch(baseUrl);
    const {results} = await response.json()
    list.innerHTML='';
    results.forEach(user => {
       // console.log(user);
       let li=document.createElement('li')
       listItems.push(li)
         li.innerHTML =`
            <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                     <h4>${user.name.first} ${user.name.last}</h4>
                     <p>${user.location.country}, ${user.location.city}</p>
                </div>
        `
        list.appendChild(li)

    });
    console.log(listItems)
}
getUser()

//Search Event
searchInput.addEventListener('input' ,(e=>{
    let inputValue=e.target.value;
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(inputValue.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
           item.classList.add('hide')
        }
    })

}))

