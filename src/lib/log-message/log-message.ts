/* eslint-disable no-console */

import { getCurrentTimestamp } from '@lib/date-timestamp';

/**
 * Logs a message to the console.
 *
 * @param {string} message - The message to log.
 */
export const logMessage = (message: string): void => {
	console.log(`\n[${getCurrentTimestamp()}]: ${message}`);
};

/**
 * Logs an error message with the current timestamp.
 *
 * @param {Error} error - The error to log.
 * @returns {void}
 */
export const logError = (error: Error): void => {
	console.error(`\n[${getCurrentTimestamp()}]: ${error}`);
};
