export interface ErrorResponse {
	code: number;
	error: Error;
	vendorResponse?: unknown; // This is used to send the object response of the client
}

export interface SuccessResponse<T> {
	code: number;
	result: T | null;
}

export interface ApiResponse<T> {
	success: boolean;
	message: string;
	data: T | null;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface CustomErrorMessages {
	[key: string]: {
		code: number;
		message: string;
	};
}
