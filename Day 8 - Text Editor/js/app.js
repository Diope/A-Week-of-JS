let clearBtn = document.querySelector('.clearBtn');
var heading = document.getElementById("heading");
var content = document.getElementById("content");
let headingText = "Just write";
let contentText = "Text is autosaved every 3 seconds";

heading.innerHTML = localStorage['title'];
content.innerHTML = localStorage["text"];

setInterval(function() {
  localStorage["title"] = heading.innerHTML;
  localStorage["text"] = content.innerHTML;
}, 3000);

clearBtn.addEventListener('click', function() {
  document.getElementById("heading").innerHTML = headingText;
  document.getElementById("content").innerHTML = contentText;
});

heading.addEventListener('focus', function() {
  if (heading.innerHTML == headingText) {
    heading.innerHTML = "";
  } else {
    return 0
  }
});

content.addEventListener('focus', function() {
  if (content.innerHTML == contentText) {
    content.innerHTML = "";
  } else {
    return 0
  }
});