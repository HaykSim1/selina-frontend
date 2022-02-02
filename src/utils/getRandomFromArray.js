// Generating single time for every file load
const RANDOM = Math.random();

/**
 * Function for shuffle and return 'n' items of array
 * @param array
 * @param n
 * @returns {*[]|*}
 */
function getRandomFromArray(array, n) {
	if(array.length < n) return array;

	const shuffled = [...array].sort(() => 0.5 - RANDOM);

	return shuffled.slice(0, n);
}

export default getRandomFromArray;