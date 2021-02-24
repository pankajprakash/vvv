var alldiv = document.querySelector('.all-body')
var tbody = document.getElementById('tbody');
var  arr="";
function getData()
{
  
    //url of jason file
   url=" http://192.168.1.10:80/api/users/";
   fetch (url).then((response)=>{

       return response.json()
   

}).then((data)=>{
     arr=data.result
    
    console.log(data)
    let apiData = arr.map((e) => 
    {
        return `
        
        <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>
            <ul>
           <li> <button type="button" id="${e.id}" class="btn btn-primary" onclick="myFunction1(this.id)" >View</button></li>
       <li>     <button type="button" class="btn btn-secondary" onclick="myFunction(${e.id})" id=${e.id}>Delete</button></li>
        <li>    <button type="button" class="btn btn-success" onclick="myFunction(${e.id})"id=${e.id}>edit</button></li>
            </ul>
        </td>
                
        </tr>
`
    }).join(" ")
   
    tbody.innerHTML = apiData;
 })

}
getData()

 function myFunction1(id)
{
console.log(arr[id].name);
    fetch(" http://192.168.1.10:80/api/users/"+id, {"method":"GET"})
    .then((response)=> response.json())
    .then( (data) =>{
var table=` <tr>
<td>`+arr[id].id+`</td>
<td>`+arr[id].name+`</td>

<td>`+arr[id].address+`</td>

<td>`+arr[id].phone+`</td>

<td>`+arr[id].email+`</td>




    
</tr>`
tbody.innerHTML = table;
    } )
}





function PostData()
{
 
   url=" http://192.168.1.10:80/api/users/";
   data='{"name":"pop","salary":"123","age":"23"}'
   params ={
       method :'post',
       headers:
       {
           'content-type':'application/json'
       },
    
  
   body:data
}
   
   fetch (url,params).then(response => response.json())
   .then (data=>console.log(data)
   )

}

PostData()

