var employeData = [
    {EId:1,
    Name:"aaa bbb",
    Age:24,
    Gender:"Male"
    },
    {EId:2,
    Name:"ccc ddd",
    Age:30,
    Gender:"Female"
    }
];

var employeId = [1,2];


var validateForm =() => {
    var Id = document.getElementById("EId").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

   
}


var dispalyTableData = () =>{
    var html = "<table class='table'>";
    setTimeout(() => {
        html+="<thead>";
        html+="<tr>";
        html+="<th>"+'EID'+"</th>";
        html+="<th>"+'Name'+"</th>";
        html+="<th>"+'Age'+"</th>";
        html+="<th>"+'Gender'+"</th>";
        html+="<th style='width: 400px;'>"+'Actions'+"</th>";
        html+= "</tr>";
        html+= "</thead>";

        for (var i=0; i< employeData.length; i++){
            html+="<tr>";
            html+="<td>"+employeData[i].EId+"</td>";
            html+="<td>"+employeData[i].Name+"</td>";
            html+="<td>"+employeData[i].Age+"</td>";
            html+="<td>"+employeData[i].Gender+"</td>";
            html+="<td>"+`<button type="button" class="btn edit">Edit</button>
            <button type="button" class="btn delete" onclick="DeleteItem(${employeData[i].EId})">Delete</button>`+"</td>";
            html+= "</tr>";
            
        }
        html+="</table>";
        document.getElementById("table").innerHTML = html
        
    },200);
}

dispalyTableData();


var addOnClick = () =>{
    var EId = document.getElementById('EId').value;
    var name = document.getElementById('name').value;
    var Age = document.getElementById('age').value;
    var Gender = document.getElementById('gender').value;

    if(EId && name && Age && Gender){
        employeData.push({EId: EId, Name:name, Age:Age, Gender:Gender})
        employeId.push(EId);
        console.log(employeId);
        dispalyTableData();
        clearItems();
    }
}


var clearItems= () =>{
    document.getElementById('EId').value="";
    document.getElementById('name').value ="";
    document.getElementById('age').value ="";
    document.getElementById('gender').value ="";
}
 

var DeleteItem =(rec) =>{
    console.log(rec);

    var filt = employeData.filter((a,i)=>{
        if(rec == a.EId){
            employeData.splice(i,1);
            dispalyTableData();
        }
    })
    console.log(employeData);
}