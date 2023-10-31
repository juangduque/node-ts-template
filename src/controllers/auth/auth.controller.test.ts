import chai from 'chai';
import express from 'express';
import supertest from 'supertest';

import router from './auth.controller'; // Asegúrate de que estás importando el router correcto.

const expect = chai.expect;
const request = supertest(express().use(router)); // Crea una instancia de Express y usa el router.

describe.skip('auth.controller', () => {
	it('should return a JSON message from /', (done) => {
		request
			.get('/')
			.end()
			.then((res) => {
				expect(res.status).to.equal(200);
				expect(res.type).to.equal('application/json');
				expect(res.body).to.deep.equal({ message: 'Hello from auth' });
			})
			.catch((err) => {
				done(err); // Manejar errores si los hay.
			})
			.finally(() => {
				done(); // Llamar a done() independientemente de si hubo un error o no.
			});
	});
});
