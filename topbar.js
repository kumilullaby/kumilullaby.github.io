var html = '<li><a href="index.html">Home<(a></li>';

var section1 = ['HTML', 'Java', 'CSS']
for (i = 0; i<section1.length; i++){
	html += '<li><a href="' + section1[i] + '.html">' + section1[i] + '</a></li>'
}

html += '<li><a href="https://youtu.be/dQw4w9WgXcQ">Custom Link</a></li>'

document.getElementById("templaterr-topbar").innerHTML = html;
