var i = null;
var arobj = JSON.parse(localStorage.getItem("arobj")) || [];
var table = document.getElementById("tb1");

function ts() {
    var table = document.getElementById("tb1");
    table.innerHTML = "";
    var rws = `<tr>
                <th>Task</th>
                <th>Description</th>
                <th>Deadline</th>
                <th colspan="2">status</th>
                <th colspan="2">Action</th>
            </tr>`
            arobj.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    table.innerHTML += rws;
    arobj.map((data) => {
        var row = `<tr>
    <td>${data.task}</td>
    <td>${data.description}</td>
    <td>${data.deadline}</td>
    <td>${data.status} </td><td>   <input type="button" class="btn" onclick="toggle(this, ${0},${3})" value="Toggle Status"></td>
    <td><input type="button"  class="btn" onclick="edit(this,${0},${-1});document.getElementById('form').scrollIntoView({ behavior: 'smooth' });" value="Edit"></td>
    <td><input type="button" class="btn" onclick="deleter(this,${-1})" value="Delete"></td>
    </tr>`
        table.innerHTML += row;
    })
    // console.log(arobj[0].task);

}
function toggle(x, y, z) {
    // console.log(arobj); 
var a="";
    if(y==1){
        a=arobj[z].status;
        // alert(1);
        // alert(arobj[z].status);
        if (arobj[z].status === "Completed") {
            arobj[z].status = "Pending";
        } else {
            arobj[z].status = "Completed";
        }
    }else{
// alert(0);
    i = x.parentNode.parentNode.rowIndex;
    a=arobj[i-1].status;
    let row = x.parentNode.parentNode;
    var b = row.cells[3].textContent;
    if (arobj[i - 1].status === "Completed") {
        arobj[i - 1].status = "Pending";
    } else {
        arobj[i - 1].status = "Completed";
    }
    }

    localStorage.setItem("arobj", JSON.stringify(arobj));
    if (y === 0) {
        ts();
    } else if (y === 1) {
        document.getElementById("filter").value=a;
        add(1);
    }

    // console.log("-------------->   :" + b);
}


ts();
function add(n) {
    // var table = document.getElementById("tb1");
    if (n == 0) {
        var a = document.getElementById("task").value;
        var b = document.getElementById("description").value;
        var c = document.getElementById("date").value;
        // table.remove();

        const obj = { task: a, description: b, deadline: c, status: "Pending" }
        if (a != "" && b != "" && c != "") {
            arobj.unshift(obj);
            localStorage.setItem("arobj", JSON.stringify(arobj));
            document.getElementById("description").value = "";
            document.getElementById("task").value = "";
            document.getElementById("date").value = "";
            table.innerHTML = "";
            var rw = `<tr>
            <th>Task</th>
            <th>Description</th>
            <th>Deadline</th>
            <th colspan="2">Status</th>
        </tr>`
            table.innerHTML += rw;


            ts();
        }
    } else {

        var a;
        
            a = document.getElementById("filter").value;
        
        if (a == "") {
            ts();
        } else {


            table.innerHTML = "";
            var rw = `<tr>
            <th>Task</th>
            <th>Description</th>
            <th>Deadline</th>
            <th colspan="2">status</th>
            <th colspan="2">Action</th>
        </tr>`
            table.innerHTML += rw;
            // console.log(arobj);
            // const arr = arobj.filter((data, index) => data.status == a);
            const arr = arobj
  .map((data, originalIndex) => ({ data, originalIndex })) // Attach original index
  .filter(({ data }) => data.status === a);
//   console.log(arr[0].data.task);
            console.log(arr);
        arr.sort((a, b) => new Date(a.data.deadline) - new Date(b.data.deadline));
            arr.map((data,index) => {
                var row = `<tr>
<td>${arr[index].data.task}</td>
<td>${arr[index].data.description}</td>
<td>${arr[index].data.deadline}</td>
<td>${arr[index].data.status} </td><td> <input type="button" class="btn" onclick="toggle(this, ${1} ,'${arr[index].originalIndex}')" value="Toggle Status"></td>
<td><input type="button" class="btn" onclick="edit(this,${1}, '${arr[index].originalIndex}');document.getElementById('form').scrollIntoView({ behavior: 'smooth' });" value="Edit"></td>
<td><input type="button" class="btn" onclick="deleter(this, '${arr[index].originalIndex}')" value="Delete"></td>
</tr>`
                table.innerHTML += row
            })
        }
    }

}

function deleter(x,y) {
    if(y===-1){
    i = x.parentNode.parentNode.rowIndex-1;
    }else{
        i=y;
    }
    // document.getElementById("tb1").deleteRow(i);
    // var i = x.rowIndex;

    // console.log(i);
    arobj.splice(i , 1);
    localStorage.setItem("arobj", JSON.stringify(arobj));
    i = null;
    if(y===-1){
        ts();
    }else{
        add(1);
    }
}

function update() {

    // alert(i);

    arobj[i ].task = document.getElementById('task').value;
    arobj[i].description = document.getElementById('description').value;
    arobj[i ].deadline = document.getElementById('date').value;
    // alert(arobj[i-1].task);

    localStorage.setItem("arobj", JSON.stringify(arobj));

    document.getElementById("description").value = "";
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    i = null;

    document.getElementById('addd').style.display = 'block';
    document.getElementById('editt').style.display = 'none';
    if(document.getElementById("filter".value)===""){
        ts();
    }else{
        add(1);
    }
}

function edit(x,y,z) {
    if(y===0){
    i = x.parentNode.parentNode.rowIndex-1;
    // console.log(i);
    let row = x.parentNode.parentNode;
    var a = document.getElementById("task").value = row.cells[0].textContent;
    var b = document.getElementById("description").value = row.cells[1].textContent;
    // var g = document.getElementById("tb1").rows[i].textContent;
    var g = document.getElementById("date").value = row.cells[2].textContent;
    }else{
        i=z;
        let row = x.parentNode.parentNode;
        var a = document.getElementById("task").value = row.cells[0].textContent;
    var b = document.getElementById("description").value = row.cells[1].textContent;
    // var g = document.getElementById("tb1").rows[i].textContent;
    var g = document.getElementById("date").value = row.cells[2].textContent;
    }

    document.getElementById('addd').style.display = 'none';
    document.getElementById('editt').style.display = 'block';
}

function clearFilter() {
    document.getElementById("filter").value="";
    ts();
}