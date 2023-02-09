function f1() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
	document.getElementById("textarea1").style.textDecoration = "underline";

}


function f4() {
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

/*function pushData(){
const listButton = document.getElementById("list");
const content = document.getElementById("content");

  const list = window.document.createElement("ul");
  const listItem = window.document.createElement("li");
  listItem.innerHTML = "textarea1";
  list.appendChild(listItem);
  content.appendChild(list);
};*/

function updateContent() {
	document.getElementById("link").innerHTML = "Google";
	document.getElementById("link").href = "https://www.google.com";
}


function addListItem() {
	var input = document.getElementById("textarea1").value;
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input));
	ul.appendChild(li);
	document.getElementById("input").value = "";
  }
