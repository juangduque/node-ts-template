import { expect } from 'chai';
import sinon from 'sinon';

import { logMessage, logError } from './log-message';

describe('src/lib/log-message/log-message.ts', () => {
	describe('logMessage', () => {
		let logSpy: sinon.SinonSpy;

		beforeEach(() => {
			// Create a spy for the console.log function before each test
			logSpy = sinon.spy(console, 'log');
		});

		afterEach(() => {
			// Restore the original console.log function after each test
			logSpy.restore();
		});

		it('should log the correct message to console', () => {
			const message = 'test message';
			const expectedRegex = /\n\[\d{2}-\d{2}-\d{4} +\d{2}:\d{2}:\d{2}\]: test message/;
			logMessage(message);

			// Check if the spy was called with the correct message
			expect(logSpy.firstCall.firstArg).to.match(expectedRegex);
		});
	});

	describe('logError', () => {
		let logSpy: sinon.SinonSpy;

		beforeEach(() => {
			// Create a spy for the console.log function before each test
			logSpy = sinon.spy(console, 'error');
		});

		afterEach(() => {
			// Restore the original console.log function after each test
			logSpy.restore();
		});

		it('should log the correct message to console', () => {
			const message = 'test error message';
			logError(new Error(message));

			// Check if the spy was called with the correct message
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			expect(logSpy.firstCall.firstArg).to.match(/test error message/);
		});
	});
});
