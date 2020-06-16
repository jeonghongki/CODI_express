/*
    file  : action.js (CODi)
    autor : 정재균 (jgiraffe@naver.com)
    breif : javascript for html elements
*/

function mainToConnect() {
	document.querySelector('.main').style.display = 'none';
	document.querySelector('.connect').style.display = 'block';
	document.querySelector('.edit').style.display = 'none';
}

function connectToEditor() {
	document.querySelector('.main').style.display = 'none';
	document.querySelector('.connect').style.display = 'none';
	document.querySelector('.edit').style.display = 'block';
    editor.refresh();
}

function checknumber(number) {
	number.value = number.value.replace(/[^0-9]/g,"");
	if(number.value.length > 4) {
		number.value = number.value.slice(0, 4);
	}
}

function roomIDCheck() {
	const num = document.getElementsByClassName('input')[0];
    if (num.value && num.value >= 0 && num.value <= 9999) {
        return true;
    }
    else {
        alert("CODi에는 0번방부터 9999번 방 까지만 존재합니다.");
    }
}