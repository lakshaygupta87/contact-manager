let fname = document.querySelector('#fname');
let lname = document.querySelector('#lName');
let phone = document.querySelector('#phone');
let btn = document.querySelector('button');
let number = document.querySelector('.num-container');




btn.addEventListener("click", function () {
    let imgSelect=document.querySelector("#imgInput").files[0]


    if (fname.value.trim() === "" || lname.value.trim() === "" || phone.value.trim() === ""  || !imgSelect ) {
        alert("Please fill out all fields.");
        return;
    }

    
    let data = new FileReader()

    data.onload=function(e){

        let ans=e.target.result

        console.log(e.target)


    let div = document.createElement("div")
    div.setAttribute("class", "num-list")
    
    let img = document.createElement("img")
    img.setAttribute("class", "profile-img")
 
    img.src=ans

    let div2 = document.createElement("div")
    div2.setAttribute("class", "contacts")

    let name = document.createElement("h2")
    name.setAttribute("class", "name")
    name.textContent = `${fname.value} ${lname.value}`

    let phoneno = document.createElement("span")
    phoneno.setAttribute("class", "phone-no")
    phoneno.textContent = phone.value
    
    let del=document.createElement("button")
    del.setAttribute("class","del")
    del.innerHTML=`<i class="fa-solid fa-trash"></i>`


    
    number.appendChild(div)
    div.appendChild(img)
    div.appendChild(div2)
    div2.appendChild(name)
    div2.appendChild(phoneno)
    div.appendChild(del)

    del.onclick=function(){
        div.remove()
    }

    }

    data.readAsDataURL(imgSelect)


})





