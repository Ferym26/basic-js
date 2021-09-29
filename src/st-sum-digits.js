import {
	NotImplementedError
} from '../extensions/index.js';

/**
 * Given a nmber, replace this nmber with
 * the sum of its digits until we get to a one digit nmber.
 *
 * @param {nmber} n
 * @return {nmber}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
	let nm = n.toString();
	do {
		let sum = 0;
		for (let i = 0; i < nm.length; i++) {
			sum += Number(nm[i]);
		}
		nm = String(sum);
	}
	while (nm.length !== 1);
	return Number(nm);
}