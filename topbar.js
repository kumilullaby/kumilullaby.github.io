var html = '<a href="/">■ Home</a> ';

html += '<a href="/about">■ About</a> '
html += '<a href="/gallery">■ Gallery</a> '
html += '<a href="/blog">■ Blog</a> '
html += '<a href="/translations">■ Translations</a> '
html += '<a href="/credits">■ Credits</a> '
html += '<li>
	                <strong>Submenu (hover)</strong>
	                <ul>
	                  <li><a href="/writing">■ Writing</a></li>
	                  <li><a href="https://marshmallow-qa.com/6d379n294ez7eal" target="_blank">■ Ask Box</a></li>
					  <li><a href="/philosophy">■ Philosophy</a></li>



	                </ul>
	            </li>
	          </ul>
	        </nav>'

document.getElementById("templaterr-topbar").innerHTML = html;
