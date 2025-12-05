html += '<nav>'
html += '<ul>'

var html = '<li><a href="/">■ Home</a></li> ';
html += '<li><a href="/about">■ About</a></li> '
html += '<li><a href="/gallery">■ Gallery</a></li> '
html += '<li><a href="/blog">■ Blog</a></li> '
html += '<li><a href="/translations">■ Translations</a></li> '
html += '<li><a href="/credits">■ Credits</a></li> '
html += '<li>'
html += '<ul>'
html += '<strong>Submenu (hover)</strong>'
html += '<li><a href="/writing">■ Writing</a></li>'
html += '<li><a href="https://marshmallow-qa.com/6d379n294ez7eal" target="_blank">■ Ask Box</a></li>'
html += '<li><a href="/philosophy">■ Philosophy</a></li>'


html += '</ul>'
html += '</li>'
html += '</ul>'
html += '</nav>'

document.getElementById("templaterr-topbar").innerHTML = html;
