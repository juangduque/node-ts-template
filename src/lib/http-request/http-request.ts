/* eslint-disable indent */
import axios, { type AxiosError } from 'axios';
import { type CustomErrorMessages, type ErrorResponse } from 'types/custom-types/api/request';
import { httpStatusCodeClientError, httpStatusCodeServerError } from 'types/enums/http-responses';

interface RequestOptions {
	url: string;
	headers: Record<string, string>;
}

/**
 * Makes a HTTP POST request using axios.
 *
 * @template Body - The type of the request body.
 * @template ReturnType - The type of the response data.
 * @param {RequestOptions} options - The options for the HTTP request, including the URL and headers.
 * @param {Body} bodyRequest - The body of the HTTP request.
 * @returns {Promise<ReturnType>} - A Promise that resolves with the response data.
 * @throws {AxiosError} - Throws an error if the HTTP request fails.
 */
export const makeHttpPostRequest = async <Body, ReturnType>(
	options: RequestOptions,
	bodyRequest: Body,
): Promise<ReturnType> => {
	return await new Promise((resolve, reject) => {
		axios
			.post(options.url, bodyRequest, {
				headers: options.headers,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error: AxiosError) => {
				reject(error);
			});
	});
};

/**
 * Handles an Axios error by returning an ErrorResponse object with custom messages.
 *
 * @param {AxiosError} error - The Axios error to handle.
 * @param {CustomErrorMessages} customMessages - An object mapping HTTP status codes to custom error messages.
 * @returns {ErrorResponse} - An object containing the error code, an Error object with a custom message, and optionally the response data.
 */
export const handleAxiosError = (
	error: AxiosError,
	customMessages: CustomErrorMessages,
): ErrorResponse => {
	const status = error.response?.status;

	switch (status) {
		case httpStatusCodeClientError.BadRequest:
		case httpStatusCodeClientError.Unauthorized:
		case httpStatusCodeClientError.PaymentRequired:
		case httpStatusCodeClientError.NotFound:
			return {
				code: customMessages[status].code,
				error: new Error(customMessages[status].message),
				vendorResponse: error.response?.data,
			};
		default:
			return {
				code: httpStatusCodeServerError.InternalServerError,
				error: new Error(error.message),
			};
	}
};
