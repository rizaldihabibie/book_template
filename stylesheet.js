if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for IE x.x;
	document.write("<!--[if IE 9]><link rel='stylesheet' type='text/css' href='stylebook.css' media='screen, projection' /><link rel='stylesheet' type='text/css' href='ie_multicolumn.css' media='screen, projection' /><![endif]-->");
	document.write("<!--[if IE 8]><link rel='stylesheet' type='text/css' href='stylebook.css' media='screen, projection' /><link rel='stylesheet' type='text/css' href='ie_multicolumn.css' media='screen, projection' /><![endif]-->");
	document.write("<!--[if lte IE 7]><link rel='stylesheet' type='text/css' href='stylebook.css' media='screen, projection' /><link rel='stylesheet' type='text/css' href='css/ie_multicolumn.css' media='screen, projection' /><![endif]-->");
	document.write("<!--[if lte IE 6]><link rel='stylesheet' type='text/css' href='http://universal-ie6-css.googlecode.com/files/ie6.0.3.css' media='screen, projection' /><![endif]-->");
	document.write("<script type='text/javascript' src='js/css3-multi-column.js'><\/sc" + "ript>");
}
else {
	document.write("<link rel='stylesheet' type='text/css' href='stylebook.css' media='screen, projection' />");
}
if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { //test for Opera;
	document.write("<link rel='stylesheet' type='text/css' href='stylebook.css' media='screen, projection' />");
	document.write("<script type='text/javascript' src='js/css3-multi-column.js'><\/sc" + "ript>");
}