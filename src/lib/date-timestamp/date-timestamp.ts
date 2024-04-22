/**
 * Gets the current timestamp in the format "day-month-year hours:minutes:seconds".
 *
 * @returns {string} - The current timestamp.
 */
export const getCurrentTimestamp = (): string => {
	const currentDate = new Date();

	const day = String(currentDate.getDate()).padStart(2, '0');
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const year = currentDate.getFullYear();
	const hours = String(currentDate.getHours()).padStart(2, '0');
	const minutes = String(currentDate.getMinutes()).padStart(2, '0');
	const seconds = String(currentDate.getSeconds()).padStart(2, '0');

	return `${day}-${month}-${year}  ${hours}:${minutes}:${seconds}`;
};

/**
 * Gets the current date in the format "day-month-year".
 *
 * @function
 * @returns {string} - The current date.
 */
export const getCurrentDate = (): string => {
	const currentDate = new Date();

	const day = String(currentDate.getDate()).padStart(2, '0');
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const year = currentDate.getFullYear();

	return `${day}-${month}-${year}`;
};

/**
 * Gets the current time in the format "hours:minutes:seconds".
 *
 * @function
 * @returns {string} - The current time.
 */
export const getCurrentTime = (): string => {
	const currentDate = new Date();

	const hours = String(currentDate.getHours()).padStart(2, '0');
	const minutes = String(currentDate.getMinutes()).padStart(2, '0');
	const seconds = String(currentDate.getSeconds()).padStart(2, '0');

	return `${hours}:${minutes}:${seconds}`;
};
