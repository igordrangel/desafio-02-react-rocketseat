import { Minus, Plus } from 'phosphor-react'
import React, {
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useImperativeHandle,
  useRef,
} from 'react'
import { CardInputContainer } from './styles'

export const NumberInput = React.memo(
  forwardRef(({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref) => {
    const internalRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => internalRef.current, [])

    function stepUp(event: MouseEvent<HTMLButtonElement>) {
      const input = event.currentTarget.parentNode?.querySelector(
        'input[type=number]',
      ) as HTMLInputElement

      if (input) {
        input.stepUp()

        if (props.onChange) {
          const event = new Event('change') as any
          Object.defineProperty(event, 'target', {
            writable: false,
            value: input,
          })
          props.onChange(event)
        }
      }
    }

    function stepDown(event: MouseEvent<HTMLButtonElement>) {
      const input = event.currentTarget.parentNode?.querySelector(
        'input[type=number]',
      ) as HTMLInputElement

      if (input) {
        input.stepDown()

        if (props.onChange) {
          const event = new Event('change') as any
          Object.defineProperty(event, 'target', {
            writable: false,
            value: input,
          })
          props.onChange(event)
        }
      }
    }

    return (
      <CardInputContainer>
        <button type="button" onClick={stepDown}>
          <Minus size={14} weight="bold" />
        </button>
        <input type="number" disabled ref={internalRef} {...props} />
        <button type="button" onClick={stepUp}>
          <Plus size={14} weight="bold" />
        </button>
      </CardInputContainer>
    )
  }),
)
