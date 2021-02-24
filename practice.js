var tbody=document.getElementById("tbody")
getData()

function getData()

{
fetch('http://192.168.1.10:80/api/users/' )
.then(res => res.json())
.then((apidata)=> display(apidata))
.catch((error)=>{
    console.log(error)
})

}
var res="";// for deleteing data

function display(display1)
{
    let tbl="";//for show data on table
    res=display1.result;
    // let i=0;
    // console.log(res.length)
    for(let i=0;i< res.length ;i++)
    {
        // console.log(res[i].id)
tbl+=`<tr>
<td> ${res[i].id}</td>
<td> ${res[i].name}</td>

<td><button type="button"  id="${res[i].id}"  onclick="cwlick(${i})" class="btn btn-success">View</button>
<button type="button" id="${res.id}" onclick="create_data(${i})" class="btn btn-secondary" >Create</button>
<button type="button" id="${res.id}" onclick="deleterecord(${i})" class="btn btn-danger"   >Delete</button>
<button type="button" id="${res.id}" onclick="updaterecord(${i})" class="btn btn-primary" >Update</button></td>
</tr>
`
  
document.getElementById("tbody").innerHTML=tbl
    }

}



function cwlick(id)
{

console.log(id)
    fetch(" http://192.168.1.10:80/api/users/", {"method":"GET"})
    .then((res)=> res.json())
    .then( (apidata) =>{
let res= apidata.result;  

var table=` <tr>
<td>`+res[id].id+`</td>
<td>`+res[id].name+`</td>

<td>`+res[id].address+`</td>

<td>`+res[id].phone+`</td>

<td>`+res[id].email+`</td>




    
</tr>`
tbody.innerHTML = table;
    } )
}





function create_data()
{
   
    let form="";
    
            form +=" <form id='form_table'>";
            form +="<label for=''>Name &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='name' id='name' class='input_post_form' placeholder='' ><br><br>";

            form +="<label for=''>Email Id </label>";
            form +="<input type='text' name='email' id='' class='input_post_form' placeholder=''><br><br>";

            form +="<label for=''>Address&nbsp;</label>";
            form +="<input type='text' name='address' id='' class='input_post_form'><br><br>";

            form +="<label for=''>Phone &nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='phone' id='' class='input_post_form'><br><br>";

            form +="<label for=''>Gender&nbsp;&nbsp;</label>";
            form +="<input type='text' name='gender' id=''  class='input_post_form'><br><br>";

            form +="<label for=''>Country&nbsp;</label>";
            form +="<input type='text' name='country' id=''  class='input_post_form'><br><br>";

            form +="<label for=''>state   &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='state' id='' class='input_post_form'><br><br>";
            form +="<input type='submit' name='name' id='' value='submit' >"
            form +="</form>";
            
            document.getElementById("body").innerHTML=form;

            
            form_table.onsubmit = async (e) => {
                e.preventDefault();

                let response = await fetch(' http://192.168.1.10:80/api/auth/register', {
                method: 'POST',
                body: new FormData(form_table)
                });

                let result = await response.json();

                alert(result.message);
            };
}




function deleterecord(id)
    {
        alert("are you sure you want to delete?"+id);
        let obj=res[id].id;

        fetch('http://192.168.1.10:80/api/user/delete/'+obj,{ method: 'DELETE'})
        .then((response) => response.json())
        .then((data) =>  console.log(data))
        .catch(function (err) {
            console.log(err);
        });
    }

function updaterecord(id)
{
    let change=res[id].id;
    fetch(' http://192.168.1.10:80/api/user/update/5'+change,{method: 'PUT'})
    .then ((response)=>response.json())
    .then ((data)=>console.log(data))
    .catch(function (err){
        console.log(err);
    

    });
}