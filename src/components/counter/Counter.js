import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/reducers/counterReducer'
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue'

export default function Counter() {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

  return (
    <div>
        <h1 data-testid='value-title'>{value}</h1>
        <button 
          onClick={onIncrement}
          data-testid='incrementButton'
          >increment
        </button>
        <button 
          onClick={onDecrement}
          data-testid='decrementButton'
          >decrement
        </button>
    </div>
  )
}
