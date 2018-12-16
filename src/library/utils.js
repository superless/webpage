import { css } from 'emotion'

import {
  rem as _rem,
  transitions as _transitions
} from 'polished'

export const rem = (...arg) => _rem(...arg)
export const transitions = (...arg) => _transitions(...arg)

export const navHeight = _rem(70)

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner}
  }
`

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner}
  }
`

export const centrate = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flex = inner => css`
  display: flex;
  justify-content: ${inner.x || "center"};
  align-items: ${inner.y || "center"};
`

export const hover = inner => css`
  &:hover,
  &:focus {
    ${inner}
  }
`


export const theme = {
  mint: '#FFFFFF',
  blue: '#1b243f',
  red: '#F44336',
  gray: "#F2F2F2",
  paragraph: '#788cc7',
  lightFont: "#A2A3AB",
  whiteFont: "#f0f0f0"
}
