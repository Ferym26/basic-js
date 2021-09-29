import {
	NotImplementedError
} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
	if (!(arr instanceof Array)) {
		throw new Error(`'arr' parameter must be an instance of the Array!`)
	}
	const arrResult = [];
	const arro = [...arr];
	for (let i = 0; i < arro.length; i++) {
		if (arro[i] == '--discard-next') {
			arro[i + 1] = '--false';
		} else if (arro[i] == '--discard-prev') {
			if (arro[i - 1] != '--false' && arro[i - 1] !== undefined) arrResult.pop();
		} else if (arro[i] == '--double-next') {
			if (arro[i + 1] != undefined) arrResult.push(arro[i + 1]);
		} else if (arro[i] == '--double-prev') {
			if (arro[i - 1] != undefined && arro[i - 1] != '--false') arrResult.push(arro[i - 1]);
		} else {
			if (arro[i] != '--false') arrResult.push(arro[i]);
		}
	}
	return arrResult;
}