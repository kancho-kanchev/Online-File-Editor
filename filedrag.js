/*
filedrag.js - HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
*/
(function() {

	// check is Number
	function IsNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	// check is Number13dot2
	function IsNumber13dot2(n) {
		var splitNumber = n.split ('.');
		if (n.length < 1) return true;
		if (!(splitNumber.length == 2)) return false;
		if (!(splitNumber[1].length == 2)) return false;
		if (!(splitNumber[0].length <= 13)) return false;
		if (!IsNumber(splitNumber[0])) return false;
		if (!IsNumber(splitNumber[1])) return false;
		return true;
	}

	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}

	// output information
	function Output(msg, msgID) {
		msgID = msgID || "messages";
		var m = $id(msgID);
		m.innerHTML = msg + m.innerHTML;
	}

	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}

	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
		}
	}

	// output file information
	function ParseFile(file) {
		// validation
		function ValidationFileType () {
			return file.type.indexOf("text") == 0;
		}
		
		function ValidationFileName () {
			var name = file.name;
			var testName = '';
			if (name.length < 12) return false;
			if (name.length >= 12) {
				testName = name.substring(0,8) + name.substring(name.length-4);
				if (testName.toUpperCase() === "NRA62007.TXT") return true;
				else return false;
			}
		}

		function ValidationFeeldsNumber (intNumber, constDivider1) {
			return (intNumber % constDivider1) == 0;
		}

		function ValidationTextFeeld (text) {
			var result = true;
			var i = 0;
			var length = text.length;
			if (length < 2) result = false;
			else {
				if ((text[0] === '"') && (text[length-1] === '"') && (text.toUpperCase() === text)) {
					for (i=1; i<length-1; i++) {
						if (text[i] === '"') result = false;
					}
				}
				else result = false;
			}
			return result;
		}

		function IsDigit (text) {
			var bool = true;
			var i = 0;
			var length = text.length;
			for (i = 0; i < length; i++) {
				if (!IsNumber(text[i])) bool = false;
			}
			return bool;
		}
		
		function ValidationEmail(email) { 
			var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return re.test(email);
		}
		
		function IsDate (date) {
			var matches = /^(\d{2})[\/](\d{2})[\/](\d{4})$/.exec(date);
			if (matches == null) return false;
			var d = matches[1];
			var m = matches[2] - 1;
			var y = matches[3];
			var composedDate = new Date(y, m, d);
			return composedDate.getDate() == d && composedDate.getMonth() == m && composedDate.getFullYear() == y;
		}

		function ValidationNumber (num) {
			var result = false;
			var i = 0;
			if (IsNumber(num)) {
				while (!(num[i]===".")) {
					if (!IsNumber(num[i])) return false;
					i++;
				}
			}
			return result;
		}
		// display text
		Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size +
			"</strong> bytes</p>", "messages"
		);
		if (ValidationFileType ()) Output("<p>File type test: <strong>PASSED</strong></p>", "messages");
		else Output("<p>File type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
		if (ValidationFileName ()) Output("<p>File name test: <strong>PASSED</strong></p>", "messages");
		else Output("<p>File name test: <strong><span>NOT PASSED</span></strong></p>", "messages");

		if (ValidationFileType ()) {
			var reader = new FileReader();
			reader.onload = function(e) {
				var text = e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;");
				var array = text.split(',');
				var length = array.length;
				var buffer = '';
				var bool = true;
				if (ValidationFeeldsNumber (length, 59)) Output("<p>Number feelds type test: <strong>PASSED</strong> " + length/59 + " row(s)</p>", "messages");
				else Output("<p>Number feelds type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				text = '';
				var i = 0;
				for (i = 0; i < length; i++) {
					text = text + array[i] + " ";
				}
				//display eik
				if (ValidationTextFeeld(array[0]) && ((array[0].length == 11) || (array[0].length == 12) || (array[0].length == 15))) {
					buffer = array[0].replace(/["]/g, "");
					if (IsDigit (buffer)) {
						Output(buffer[0], "one_1");
						Output(buffer[1], "one_2");
						Output(buffer[2], "one_3");
						Output(buffer[3], "one_4");
						Output(buffer[4], "one_5");
						Output(buffer[5], "one_6");
						Output(buffer[6], "one_7");
						Output(buffer[7], "one_8");
						Output(buffer[8], "one_9");
						if (IsNumber(buffer[9])) Output(buffer[9], "one_10");
						if (IsNumber(buffer[10])) Output(buffer[10], "one_11");
						if (IsNumber(buffer[11])) Output(buffer[11], "one_12");
						if (IsNumber(buffer[12])) Output(buffer[12], "one_13");
					}
					else Output("<p>Feeld (1) digit test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				}
				else Output("<p>Feeld (1) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				// display name
				if (ValidationTextFeeld(array[1]) && (array[1].length < 61)) {
					Output(array[1].replace(/["]/g, ""), "two_1");
				}
				else Output("<p>Feeld (2) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				// display chlen na osig kasa
				if (IsNumber(array[2]) && ((array[2] === "1") || (array[2] === "0"))) Output(array[2], "three_1");
				else Output("<p>Feeld (3) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				// display email
				if (ValidationTextFeeld(array[3].toUpperCase()) && (array[3].length < 51)) {
					if (array[3].length > 2)
					if (ValidationEmail(array[3].replace(/["]/g, ""))) {
						Output(array[3].replace(/["]/g, ""), "four_1");
					}
					else Output("<p>Feeld (4) validate e-mail: <strong><span>NOT PASSED</span></strong></p>", "messages");
				}
				else Output("<p>Feeld (4) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				// display phone
				if (ValidationTextFeeld(array[4]) && (array[4].length < 21)) {
					buffer = array[4].replace(/["]/g, "");
					if (IsDigit (buffer)) {
						Output(array[4].replace(/["]/g, ""), "five_1");
					}
					else Output("<p>Feeld (5) digit test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				}
				else Output("<p>Feeld (5) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				// display gsm
				if (ValidationTextFeeld(array[5]) && (array[5].length < 21)) {
					buffer = array[5].replace(/["]/g, "");
					if (IsDigit (buffer)) {
						Output(array[5].replace(/["]/g, ""), "six_1");
					}
					else Output("<p>Feeld (6) digit test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				}
				else Output("<p>Feeld (6) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");

				// display pos.9 col.1
				if ((array[6].length > 0) && (array[6].length < 3) && (IsDigit(array[6])) && (array[6] < 13) && (array[6] > 0)) {
					if (IsNumber(array[6][1]) && IsNumber(array[6][0])){
						Output(array[6][0], "nine_one_1");
						Output(array[6][1], "nine_one_2");
					}
					else if (IsNumber(array[6][0])){
						Output("0", "nine_one_1");
						Output(array[6][0], "nine_one_2");
					}
				}
				else Output("<p>Feeld (9) month test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if ((array[7].length > 0) && (array[7].length < 5) && IsDigit(array[7]) && (array[7] < 10000) && (array[7] > 999)) {
					if (IsNumber(array[7][0])) Output(array[7][0], "nine_one_3");
					if (IsNumber(array[7][1])) Output(array[7][1], "nine_one_4");
					if (IsNumber(array[7][2])) Output(array[7][2], "nine_one_5");
					if (IsNumber(array[7][3])) Output(array[7][3], "nine_one_6");
				}
				else Output("<p>Feeld (9) year test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				//display pos.18 col.1
				if (IsDate(array[8])){
					if (IsNumber(array[8][1]) && IsNumber(array[8][0])){
						Output(array[8][0], "eighteen_one_1");
						Output(array[8][1], "eighteen_one_2");
					}
					else if (IsNumber(array[8][0])){
						Output("0", "eighteen_one_1");
						Output(array[8][0], "eighteen_one_2");
					}
					if (IsNumber(array[8][3]) && IsNumber(array[8][4])){
						Output(array[8][3], "eighteen_one_3");
						Output(array[8][4], "eighteen_one_4");
					}
					else if (IsNumber(array[8][3])){
						Output("0", "eighteen_one_3");
						Output(array[8][3], "eighteen_one_4");
					}
					if (IsNumber(array[8][6])) Output(array[8][6], "eighteen_one_5");
					if (IsNumber(array[8][7])) Output(array[8][7], "eighteen_one_6");
					if (IsNumber(array[8][8])) Output(array[8][8], "eighteen_one_7");
					if (IsNumber(array[8][9])) Output(array[8][9], "eighteen_one_8");
				}
				else Output("<p>Feeld (18) date test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				
				// kod korekcia
				if (IsNumber(array[9]) && ((array[9] === "0") || (array[9] === "1"))) Output(array[9], "seven_one_1");
				else Output("<p>Feeld (7.1) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");

				// vid plashtane
				if (IsNumber(array[10]) && ((array[10] === "9") ||
											(array[10] === "1") ||
											(array[10] === "2") ||
											(array[10] === "3") ||
											(array[10] === "4") ||
											(array[10] === "5") ||
											(array[10] === "6"))) Output(array[10], "eight_one_1");
				else Output("<p>Feeld (8.1) type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				
				if (IsNumber13dot2(array[11])) Output(array[11], "ten_one_1");       // doo
				else Output("<p>Feeld 10 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if (IsNumber13dot2(array[12])) Output(array[12], "eleven_one_1");    // Uchitelski fond
				else Output("<p>Feeld 11 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if (IsNumber13dot2(array[13])) Output(array[13], "twelve_one_1");    // DZPO
				else Output("<p>Feeld 12 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if (IsNumber13dot2(array[14])) Output(array[14], "thirteen_one_1");  // DZPO pro
				else Output("<p>Feeld 13 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if (IsNumber13dot2(array[15])) Output(array[15], "fourteen_one_1");  // ZO
				else Output("<p>Feeld 14 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if (IsNumber13dot2(array[16])) Output(array[16], "fifteen_one_1");   // GVRS
				else Output("<p>Feeld 15 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if (IsNumber13dot2(array[17])) Output(array[17], "sixteen_one_1");   // DOD
				else Output("<p>Feeld 16 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");
				if (IsNumber13dot2(array[18])) Output(array[18], "seventeen_one_1"); // DOD
				else Output("<p>Feeld 17 col.1 type test: <strong><span>NOT PASSED</span></strong></p>", "messages");

				// display pos.9 col.2
				if (IsNumber(array[19][1]) && IsNumber(array[19][0])){
					Output(array[19][0], "nine_two_1");
					Output(array[19][1], "nine_two_2");
				}
				else if (IsNumber(array[19][0])){
					Output("0", "nine_two_1");
					Output(array[19][0], "nine_two_2");
				}
				if (IsNumber(array[20][0])) Output(array[20][0], "nine_two_3");
				if (IsNumber(array[20][1])) Output(array[20][1], "nine_two_4");
				if (IsNumber(array[20][2])) Output(array[20][2], "nine_two_5");
				if (IsNumber(array[20][3])) Output(array[20][3], "nine_two_6");
				//display pos.18 col.2
				if (IsNumber(array[21][1]) && IsNumber(array[21][0])){
					Output(array[21][0], "eighteen_two_1");
					Output(array[21][1], "eighteen_two_2");
				}
				else if (IsNumber(array[21][0])){
					Output("0", "eighteen_two_1");
					Output(array[21][0], "eighteen_two_2");
				}
				if (IsNumber(array[21][3]) && IsNumber(array[21][4])){
					Output(array[21][3], "eighteen_two_3");
					Output(array[21][4], "eighteen_two_4");
				}
				else if (IsNumber(array[21][3])){
					Output("0", "eighteen_two_3");
					Output(array[21][3], "eighteen_two_4");
				}
				if (IsNumber(array[21][6])) Output(array[21][6], "eighteen_two_5");
				if (IsNumber(array[21][7])) Output(array[21][7], "eighteen_two_6");
				if (IsNumber(array[21][8])) Output(array[21][8], "eighteen_two_7");
				if (IsNumber(array[21][9])) Output(array[21][9], "eighteen_two_8");
				if (IsNumber(array[22])) Output(array[22], "seven_two_1");     // kod korekcia
				if (IsNumber(array[23])) Output(array[23], "eight_two_1");     // vid plashtane
				if (IsNumber(array[24])) Output(array[24], "ten_two_1");       // doo
				if (IsNumber(array[25])) Output(array[25], "eleven_two_1");    // Uchitelski fond
				if (IsNumber(array[26])) Output(array[26], "twelve_two_1");    // DZPO
				if (IsNumber(array[27])) Output(array[27], "thirteen_two_1");  // DZPO pro
				if (IsNumber(array[28])) Output(array[28], "fourteen_two_1");  // ZO
				if (IsNumber(array[29])) Output(array[29], "fifteen_two_1");   // GVRS
				if (IsNumber(array[30])) Output(array[30], "sixteen_two_1");   // DOD
				if (IsNumber(array[31])) Output(array[31], "seventeen_two_1"); // DOD

				// display pos.9 col.3
				if (IsNumber(array[32][1]) && IsNumber(array[32][0])){
					Output(array[32][0], "nine_three_1");
					Output(array[32][1], "nine_three_2");
				}
				else if (IsNumber(array[32][0])){
					Output("0", "nine_three_1");
					Output(array[32][0], "nine_three_2");
				}
				if (IsNumber(array[33][0])) Output(array[33][0], "nine_three_3");
				if (IsNumber(array[33][1])) Output(array[33][1], "nine_three_4");
				if (IsNumber(array[33][2])) Output(array[33][2], "nine_three_5");
				if (IsNumber(array[33][3])) Output(array[33][3], "nine_three_6");
				//display pos.18 col.3
				if (IsNumber(array[34][1]) && IsNumber(array[34][0])){
					Output(array[34][0], "eighteen_three_1");
					Output(array[34][1], "eighteen_three_2");
				}
				else if (IsNumber(array[34][0])){
					Output("0", "eighteen_three_1");
					Output(array[34][0], "eighteen_three_2");
				}
				if (IsNumber(array[34][3]) && IsNumber(array[34][4])){
					Output(array[34][3], "eighteen_three_3");
					Output(array[34][4], "eighteen_three_4");
				}
				else if (IsNumber(array[34][3])){
					Output("0", "eighteen_three_3");
					Output(array[34][3], "eighteen_three_4");
				}
				if (IsNumber(array[34][6])) Output(array[34][6], "eighteen_three_5");
				if (IsNumber(array[34][7])) Output(array[34][7], "eighteen_three_6");
				if (IsNumber(array[34][8])) Output(array[34][8], "eighteen_three_7");
				if (IsNumber(array[34][9])) Output(array[34][9], "eighteen_three_8");
				if (IsNumber(array[35])) Output(array[35], "seven_three_1");     // kod korekcia
				if (IsNumber(array[36])) Output(array[36], "eight_three_1");     // vid plashtane
				if (IsNumber(array[37])) Output(array[37], "ten_three_1");       // doo
				if (IsNumber(array[38])) Output(array[38], "eleven_three_1");    // Uchitelski fond
				if (IsNumber(array[39])) Output(array[39], "twelve_three_1");    // DZPO
				if (IsNumber(array[40])) Output(array[40], "thirteen_three_1");  // DZPO pro
				if (IsNumber(array[41])) Output(array[41], "fourteen_three_1");  // ZO
				if (IsNumber(array[42])) Output(array[42], "fifteen_three_1");   // GVRS
				if (IsNumber(array[43])) Output(array[43], "sixteen_three_1");   // DOD
				if (IsNumber(array[44])) Output(array[44], "seventeen_three_1"); // DOD

				// display pos.9 col.4
				if (IsNumber(array[45][1]) && IsNumber(array[45][0])){
					Output(array[45][0], "nine_four_1");
					Output(array[45][1], "nine_four_2");
				}
				else if (IsNumber(array[45][0])){
					Output("0", "nine_four_1");
					Output(array[45][0], "nine_four_2");
				}
				if (IsNumber(array[46][0])) Output(array[46][0], "nine_four_3");
				if (IsNumber(array[46][1])) Output(array[46][1], "nine_four_4");
				if (IsNumber(array[46][2])) Output(array[46][2], "nine_four_5");
				if (IsNumber(array[46][3])) Output(array[46][3], "nine_four_6");
				//display pos.18 col.4
				if (IsNumber(array[47][1]) && IsNumber(array[47][0])){
					Output(array[47][0], "eighteen_four_1");
					Output(array[47][1], "eighteen_four_2");
				}
				else if (IsNumber(array[47][0])){
					Output("0", "eighteen_four_1");
					Output(array[47][0], "eighteen_four_2");
				}
				if (IsNumber(array[47][3]) && IsNumber(array[47][4])){
					Output(array[47][3], "eighteen_four_3");
					Output(array[47][4], "eighteen_four_4");
				}
				else if (IsNumber(array[47][3])){
					Output("0", "eighteen_four_3");
					Output(array[47][3], "eighteen_four_4");
				}
				if (IsNumber(array[47][6])) Output(array[47][6], "eighteen_four_5");
				if (IsNumber(array[47][7])) Output(array[47][7], "eighteen_four_6");
				if (IsNumber(array[47][8])) Output(array[47][8], "eighteen_four_7");
				if (IsNumber(array[47][9])) Output(array[47][9], "eighteen_four_8");
				if (IsNumber(array[48])) Output(array[48], "seven_four_1");     // kod korekcia
				if (IsNumber(array[49])) Output(array[49], "eight_four_1");     // vid plashtane
				if (IsNumber(array[50])) Output(array[50], "ten_four_1");       // doo
				if (IsNumber(array[51])) Output(array[51], "eleven_four_1");    // Uchitelski fond
				if (IsNumber(array[52])) Output(array[52], "twelve_four_1");    // DZPO
				if (IsNumber(array[53])) Output(array[53], "thirteen_four_1");  // DZPO pro
				if (IsNumber(array[54])) Output(array[54], "fourteen_four_1");  // ZO
				if (IsNumber(array[55])) Output(array[55], "fifteen_four_1");   // GVRS
				if (IsNumber(array[56])) Output(array[56], "sixteen_four_1");   // DOD
				if (IsNumber(array[57])) Output(array[57], "seventeen_four_1"); // DOD

				Output("<p><strong>" + file.name + ":</strong></p><pre>" + text + "</pre>");
			}
			reader.readAsText(file,'CP1251');
		}
		else {
			Output(
				"<p>File information: <strong>" + file.name +
				"</strong> type: <strong>" + file.type +
				"</strong> size: <strong>" + file.size +
				"</strong> bytes <strong><span>file is not valid type</span></strong></p>"
			);
		}
	}

	// initialize
	function Init() {

		var fileselect = $id("fileselect"),
			filedrag = $id("filedrag"),
			submitbutton = $id("submitbutton");

		// file select
		fileselect.addEventListener("change", FileSelectHandler, false);

		// is XHR2 available?
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			// file drop
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			filedrag.style.display = "block";

			// remove submit button
			submitbutton.style.display = "none";
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}


})();