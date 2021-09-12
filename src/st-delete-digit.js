import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
	const numStr = String(n);
	const arr = [];
	for(let i = 0; i < numStr.length; i++) {
		const str = numStr.slice(0, i) + numStr.slice(i + 1);
		arr.push(Number(str))
	}
	return Math.max(...arr)
}