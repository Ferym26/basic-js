import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 export default function dateSample(sampleActivity) {
	if (isNaN(sampleActivity) || typeof sampleActivity != 'string') {
		return false
	}
	sampleActivity = parseFloat(sampleActivity);
	if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || isNaN(sampleActivity)) {
		return false
	}
	const g = 0.693 / HALF_LIFE_PERIOD;
	const S = Math.log(MODERN_ACTIVITY / sampleActivity);
	const result = Math.ceil(S / g);
	return result;
}
