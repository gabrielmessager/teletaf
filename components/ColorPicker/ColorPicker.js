import React, { useState } from "react"
import { ChromePicker } from "react-color"
import { Cover, Popover, StyledButton } from "./ColorPicker.styles"

// const DEFAULT_COLOR = {
//   rgb: {
//     a: 1,
//     b: 13,
//     g: 13,
//     r: 214,
//   },
// }

export function ColorPicker({ color, setColor }) {
  const [isOpen, setIsOpen] = useState(false)

  const getRGBA = color => {
    if (!color) return
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
  }

  return (
    <div>
      <StyledButton
        color={getRGBA(color?.rgb)}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Popover>
          <Cover onClick={() => setIsOpen(!isOpen)} />
          <ChromePicker
            color={color?.rgb}
            handleChangeComplete={(color, event) => setColor(color)}
            onChange={(color, event) => setColor(color)}
          />
        </Popover>
      )}
    </div>
  )
}
