import * as actionTypes from './actionTypes';

// set loader state
export const fetchProductsStart = () => {
	return { type: actionTypes.FETCH_PRODUCTS_START };
};

export const fetchProductsFail = (error) => {
	return { type: actionTypes.FETCH_PRODUCTS_FAIL, error: error };
};

export const fetchProductsSuccess = (data) => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		payload: data
	};
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = () => {
	return async (dispatch) => {
		dispatch(fetchProductsStart());
		try {
			await sleep(2000);
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsFail(error));
		}
	};
};

// varje api anrop med redux kräver 3 olika actions. 1. start (anropar apin), 2. succes(när vi fått datan från anropet) 3. FAIL(skicka ett error meddelande)
