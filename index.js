// let btnn=document.getElementById('btn');
// const button=document.querySelector('button');
// var isRun=false;
// btnn.classList.add("btn");

// button.addEventListener("click",()=>{
//     if(!isRun){
//     btn.innerHTML="Stop";
//     btnn.classList.add("btn");
//     isRun=true;
//     btnn.style.backgroundColor="red";
//     }else{
//         btn.innerHTML="Start";
//     btnn.classList.add("btn");
//     isRun=false;
//     btn.style.backgroundColor="green";
//     }
// })
// var arobj = [];
var arobj = [
    { 'task': 'Meeting', 'description': 'Client Meeting', 'timer': '00:50:43' },
    { 'task': 'Project-abc', 'description': 'Developing-xyz', 'timer': '01:42:02' },
    { 'task': 'Persona break', 'description': '-', 'timer': '00:22:15' },
    { 'task': 'Meeting', 'description': 'Daily scrum', 'timer': '00:32:28' },

];
var table = document.getElementById("tb1");
function ts() {
    var table = document.getElementById("tb1");
    table.innerHTML = "";
    var rws = `<tr>
                <th>Task</th>
                <th>Description</th>
                <th>Duration</th>
                <th colspan="2">Action</th>
            </tr>`
    table.innerHTML += rws;
    arobj.map((data) => {
        var row = `<tr>
    <td>${data.task}</td>
    <td>${data.description}</td>
    <td>${data.timer}</td>
    <td><input type="button" class="btn" onclick="edit(this)" value="Edit"></td>
    <td><input type="button" class="btn" onclick="deleter(this)" value="Delete"></td>
    </tr>`
        table.innerHTML += row;
    })
}
ts();





// function tshow() {
//     var table = document.getElementById("tb1");
//     myArray.map((data) => {
//         var row = `<tr>
//     <td>${data.task}</td>
//     <td>${data.description}</td>
//     <td>${data.duration}</td>
// </tr>`
//         table.innerHTML += row
//     })
// }
// tshow();

seconds = 0;
minutes = 0;
hours = 0;
isRunning = false;
let formatedTime = ""

function timer(c, h, m, s) {
    if (c == 1) {
        seconds = s;
        minutes = m;
        hours = h;
    }
    if (!isRunning) {
        isRunning = true;
        time = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            } if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
            formatedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
            document.getElementById("sw").innerText = formatedTime;
            document.getElementById("btn").innerText = "stop";
            btn.style.backgroundColor = "red";
        }, 1000)
    }
    else {
        document.getElementById("btn").innerText = "start";
        btn.style.backgroundColor = "green";
        clearInterval(time);
        isRunning = false;
    }
}

function reset() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    formatedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    document.getElementById("sw").innerText = formatedTime;
}


function add(n) {
    // var table = document.getElementById("tb1");
    console.log(formatedTime);
    if (n == 0) {
        var a = document.getElementById("task").value;
        var b = document.getElementById("description").value;
        var c = document.getElementById("sw").textContent;
        // table.remove();

        const obj = { task: a, description: b, timer: c }
        if (a != "" && b != "") {
            arobj.unshift(obj);
            document.getElementById("description").value = "";
            document.getElementById("task").value = "";
            table.innerHTML = "";
            var rw = `<tr>
            <th>Task</th>
            <th>Description</th>
            <th>Duration</th>
        </tr>`
            table.innerHTML += rw;
            ts();
            //         arobj.map((data) => {
            //             var row = `<tr>
            //     <td>${data.task}</td>
            //     <td>${data.description}</td>
            //     <td>${data.timer}</td>
            // </tr>`
            //             table.innerHTML += row;
            //         })

        }
    } else {

        var a = document.getElementById("filter").value;
        if (a == "") {
            ts();
        } else {
            table.innerHTML = "";

            var rw = `<tr>
        <th>Task</th>
        <th>Description</th>
        <th>Duration</th>
    </tr>`
            table.innerHTML += rw;
            const arr = arobj.filter((data, index) => data.task == a(),);
            // arobj.map((data) => {
            //     arr.
            // })
            console.log(arr);
            arr.map((data) => {
                var row = `<tr>
    <td>${data.task}</td>
    <td>${data.description}</td>
    <td>${data.timer}</td>
</tr>`
                table.innerHTML += row
            })
        }
    }

}

function deleter(x) {
    // alert("Row index is: " + x.rowIndex);
    var i = x.parentNode.parentNode.rowIndex;
    document.getElementById("tb1").deleteRow(i);
    // var i = x.rowIndex;

    // console.log(i);
    arobj.splice(i - 1, 1);
}

function edit(x) {
    var i = x.parentNode.parentNode.rowIndex;
    let row = x.parentNode.parentNode;
    var a = document.getElementById("task").value = row.cells[0].textContent;
    var b = document.getElementById("description").value = row.cells[1].textContent;
    var g = document.getElementById("tb1").rows[i].textContent;
    // console.log(i);
    arobj.splice(i - 1, 1);
    formatedTime = row.cells[2].textContent;
    document.getElementById("tb1").deleteRow(i);
    var t = formatedTime.split(":");
    console.log(t);
    document.getElementById("sw").innerText = formatedTime;
    document.getElementById("d4").innerHTML = "";
    document.getElementById("d4").innerHTML += `<button id="btn" class="btn" onclick="timer(1,${t[0]},${t[1]},${t[2]})">Start</button>`

    // console.log(1);
    // document.getElementById("demo").innerHTML = x;
}




