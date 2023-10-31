import { expect } from 'chai';

import { sum, subtract } from './dummy';

describe('Math Operations', () => {
	it('should add two numbers', () => {
		const result = sum(3, 4);
		expect(result).to.equal(7);
	});

	it('should subtract two numbers', () => {
		const result = subtract(7, 3);
		expect(result).to.equal(4);
	});
});
