import { createReducer } from '@reduxjs/toolkit'
import {
  getFiltersTypesRequest,
  getFiltersTypesSuccess,
  getFiltersTypesError,
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  filtersToggleCheckbox,
  changeFiltersTypes,
  changeFiltersSearchInput,
} from './actions'
import { DEFAULT_TYPE_ID, LOADING_STATES } from '../helpers'

const initialState = {
  filters: {
    checkboxes: [
      {
        id: 'isNew',
        label: 'New',
        value: false,
      },
      {
        id: 'isLimited',
        label: 'Limited',
        value: false,
      },
    ],
    types: {
      status: LOADING_STATES.IDLE,
      items: [],
      activeTypes: [],
    },
    searchQuery: '',
  },
  products: {
    status: LOADING_STATES.IDLE,
    items: [],
  },
}

const DEFAULT_TYPE = { id: DEFAULT_TYPE_ID, type: 'all', name: 'All' }

export const reducer = createReducer(initialState, {
  [getFiltersTypesRequest]: state => {
    state.filters.types.status = LOADING_STATES.LOADING
    state.filters.types.items = [DEFAULT_TYPE]
    state.filters.types.activeTypes = [DEFAULT_TYPE_ID]
  },
  [getFiltersTypesSuccess]: (state, { payload }) => {
    state.filters.types.status = LOADING_STATES.SUCCEEDED
    state.filters.types.items = [DEFAULT_TYPE, ...payload]
  },
  [getFiltersTypesError]: state => {
    state.filters.types.status = LOADING_STATES.FAILED
  },
  [filtersToggleCheckbox]: ({ filters }, action) => {
    const checkboxes = filters.checkboxes
    const idx = checkboxes.findIndex(it => it.id === action.payload)
    checkboxes[idx].value = !checkboxes[idx].value
  },
  [changeFiltersTypes]: (state, action) => {
    state.filters.types.activeTypes = action.payload
  },
  [changeFiltersSearchInput]: (state, action) => {
    state.filters.searchQuery = action.payload
  },

  [getProductsRequest]: state => {
    state.products.status = LOADING_STATES.LOADING
    state.products.items = []
  },
  [getProductsSuccess]: (state, { payload }) => {
    state.products.status = LOADING_STATES.SUCCEEDED
    state.products.items = payload.results
  },
  [getProductsError]: state => {
    state.products.status = LOADING_STATES.FAILED
  },
})
