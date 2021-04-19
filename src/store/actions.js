import { createAction } from '@reduxjs/toolkit'
import { fetchData } from './helpers'

export const getFiltersTypesRequest = createAction('GET_FILTERS_TYPES_REQUEST')
export const getFiltersTypesSuccess = createAction('GET_FILTERS_TYPES_SUCCESS')
export const getFiltersTypesError = createAction('GET_FILTERS_TYPES_ERROR')
export const filtersToggleCheckbox = createAction('FILTERS_TOGGLE_CHECKBOX')
export const changeFiltersTypes = createAction('CHANGE_FILTERS_TYPES')
export const changeFiltersSearchInput = createAction('CHANGE_FILTERS_SEARCH_INPUT')

export const getFiltersTypes = () => dispatch => {
  fetchData('/api/category/', dispatch, {
    onRequest: getFiltersTypesRequest,
    onSuccess: getFiltersTypesSuccess,
    onError: getFiltersTypesError,
  })
}

export const getProductsRequest = createAction('GET_PRODUCTS_REQUEST')
export const getProductsSuccess = createAction('GET_PRODUCTS_SUCCESS')
export const getProductsError = createAction('GET_PRODUCTS_ERROR')

export const getProducts = () => (dispatch, getState) => {
  const getQueryParams = filters => {
    const types = filters.types.activeTypes.filter(type => type !== 'all').map(type => `category=${type}`)
    const checkboxes = filters.checkboxes.filter(({ value }) => value).map(({ id, value }) => `${id}=${value}`)
    const searchQuery = `search=${filters.searchQuery}`

    return [...types, ...checkboxes, searchQuery].join('&')
  }

  fetchData(`/api/product?${getQueryParams(getState().filters)}`, dispatch, {
    onRequest: getProductsRequest,
    onSuccess: getProductsSuccess,
    onError: getProductsError,
  })
}
