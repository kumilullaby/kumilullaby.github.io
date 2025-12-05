const js_thml = () => {
	let code = "";
	code += "	\t\t<nav>\n";
	code += "	\t\t  <ul>\n";
	code += "	\t\t\t<li><a href=\"/\">■ Home</a></li>\n";
	code += "	\t\t\t<li><a href=\"/about\">■ About</a></li>\n";
	code += "	\t\t\t<li><a href=\"/gallery\">■ Gallery</a></li>\n";
	code += "	\t\t\t<li><a href=\"/blog\">■ Blog</a></li>\n";
	code += "	\t\t\t<li><a href=\"/translations\">■ Translations</a></li>\n";
	code += "	\t\t\t<li><a href=\"/credits\">■ Credits</a></li>\n";
	code += "\n";
	code += "	\t\t\t<li>\n";
	code += "	\t\t\t\t<strong>Submenu (hover)</strong>\n";
	code += "	\t\t\t\t<ul>\n";
	code += "	\t\t\t\t  <li><a href=\"/writing\">■ Writing</a></li>\n";
	code += "	\t\t\t\t  <li><a href=\"https://marshmallow-qa.com/6d379n294ez7eal\" target=\"_blank\">■ Ask Box</a></li>\n";
	code += "					  <li><a href=\"/philosophy\">■ Philosophy</a></li>\n";
	code += "\n";
	code += "	\t\t\t\t</ul>\n";
	code += "	\t\t\t</li>\n";
	code += "	\t\t  </ul>\n";
	code += "	\t\t</nav>\n";
	return code;
}


document.getElementById("js_html").innerText = js_thml();
document.getElementById("html-text").value = js_thml();
