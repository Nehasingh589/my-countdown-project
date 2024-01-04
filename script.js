const endDate = "15 August 2024 12:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

// 1
function clock (){
const end = new Date(endDate)
const now = new Date()
// console.log(end);
// console.log(now);

const diff = (end-now)/1000; //divinfg by 1000 to change milidsec in sec
// console.log(diff);

if(diff < 0) return;
// console.log(Math.floor(diff /3600 /24));
inputs[0].value = Math.floor(diff /3600 /24);
// console.log(Math.floor(diff/3600) % 24);
inputs[1].value = Math.floor(diff/3600) % 24;
// console.log(Math.floor(diff / 60) % 60);
inputs[2].value = Math.floor(diff / 60) % 60
// console.log(Math.floor(diff % 60));
inputs[3].value = (Math.floor(diff) % 60);
}
clock()

//1 day = 24hrs
//1hr = 60minutes
//60 mins = 3600 sec

setInterval(
 () => {
    clock()
 },
 1000  
)
