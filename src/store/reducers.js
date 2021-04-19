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

const LOADING_STATES = { IDLE: 'idle', LOADING: 'loading', SUCCEEDED: 'succeeded', FAILED: 'failed' }

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

const defaultType = { id: 'all', type: 'all', name: 'All' }
const defaultActiveType = 'all'

export const reducer = createReducer(initialState, {
  [getFiltersTypesRequest]: state => {
    state.filters.types.status = LOADING_STATES.LOADING
    state.filters.types.items = [defaultType]
    state.filters.types.activeTypes = [defaultActiveType]
  },
  [getFiltersTypesSuccess]: (state, { payload }) => {
    state.filters.types.status = LOADING_STATES.SUCCEEDED
    state.filters.types.items = [defaultType, ...payload]
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
