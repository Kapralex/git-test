/* countries.js */

/**
 * @param {string[]} countries
 */
export const getDropdown = countries => {
	return `<select>
		${countries.map(country => `<option value=${country}>${country}</option>`)}
	</select>`
};