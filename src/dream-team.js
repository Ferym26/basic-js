import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

export default function createDreamTeam(members) {
	if (!members || !Array.isArray(members)) return false;
	let str = '';
	const letterArr = members.filter((item) => typeof item === 'string').map((word) => word.trim()[0]);
	letterArr.forEach((item) => str += item.toUpperCase());
	return str.split('').sort().join('');
}
