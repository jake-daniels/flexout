import React from 'react'
import { styled } from 'goober'
import { Props } from './types'
import { transformPropsToCss } from './utils'

export const Flex = styled('div', React.forwardRef)(transformPropsToCss) as React.FC<Props>

export const Row = styled(
    'div',
    React.forwardRef,
)((props: Props) => transformPropsToCss({ ...props, flexDirection: 'row' })) as React.FC<Props>

export const Col = styled(
    'div',
    React.forwardRef,
)((props: Props) => transformPropsToCss({ ...props, flexDirection: 'column' })) as React.FC<Props>
