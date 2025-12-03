var html = '<a href="index.html">Home</a>';

var section1 = ['HTML', 'Java', 'CSS']
for (i = 0; i<section1.length; i++){
	html += '<a href="' + section1[i] + '.html">' + section1[i] + '</a>'
}

html += '<a href="https://youtu.be/dQw4w9WgXcQ">Custom Link</a>'

document.getElementById("templaterr-topbar").innerHTML = html;
