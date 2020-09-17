export const MaskMoney = (value:string) => {
    const maxLen = 20;
    const SeparadorDecimal = ',';
    const SeparadorMilesimo = '.';

	let len = value.length;
	let key = '';
	let i = 0;
	const strCheck = '0123456789';
    let aux = '';

	if (strCheck.indexOf(key) === -1) {
		return;
	}

	if (len >= maxLen) {
		return;
	}

	for (i = 0; i < len; i += 1) {
		if ((value.charAt(i) !== '0') && (value.charAt(i) !== SeparadorDecimal)) {
			break;
		}
    }
    
	for (; i < len; i += 1) {
		if (strCheck.indexOf(value.charAt(i)) !== -1) {
			aux += value.charAt(i);
		}
    }
    
	aux += key;
    len = aux.length;
    
	if (len === 0) {
		value = '';
    }
    
	if (len === 1) {
		value = `0${SeparadorDecimal}0${aux}`;
    }
    
	if (len === 2) {
		value = `0${SeparadorDecimal}${aux}`;
    }
    
	if (len > 2) {
		let aux2 = '';
		let len2 = 0;
		let j = 0;
		for (j = 0, i = len - 3; i >= 0; i -= 1) {
			if (j === 3) {
				aux2 += SeparadorMilesimo;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j += 1;
		}
		value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i -= 1) {
			value += aux2.charAt(i);
		}
		value += SeparadorDecimal + aux.substr(len - 2, len);
    }

	return value;
}