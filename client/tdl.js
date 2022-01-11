var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// close button
let closeArr = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeArr.length; i++) {
  closeArr[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}
// checked

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
   []
  }
},  false);
// add
// document.getElementById('id1').onsubmit = function (event) {
//   console.log('In here');
//   event.stopImmediatePropagation()
//   // event.preventDefault();
// }

  document.getElementById('submit').onclick = function (event) {
  // event.preventDefault();
  // event.stopImmediatePropagation()
  console.log(event)
  // event.stopPropagation()
  // debugger;
  let addons = [];
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  console.log(
      'Hello World'
  );
  addons.push(inputValue);
  fetch('http://localhost:3000/',{method:"POST",
  body:JSON.stringify({text: inputValue, status: true}) 
}).then(response =>  response.json()).then(data => console.log(data))
 
  li.appendChild(t);
  const checkbox = document.createElement('input');
  checkbox.type= 'checkbox'
  // checkbox.id=''    
  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < closeArr.length; i++) {
    closeArr[i].onclick = function(event) {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}