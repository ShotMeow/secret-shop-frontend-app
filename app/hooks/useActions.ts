import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { cartActions } from '../store/cart/cart.slice'

const allActions = {
	...cartActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
