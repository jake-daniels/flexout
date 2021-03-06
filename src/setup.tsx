import { setup } from 'goober'
import { prefix } from 'goober/prefixer'
import { shouldForwardProp } from 'goober/should-forward-prop'
import React from 'react'
import { FlexboxProps } from './types'

const OmmitedProps: Array<keyof FlexboxProps> = [
    'flexFlow',
    'flexDirection',
    'flexWrap',
    'order',
    'flex',
    'flexBasis',
    'flexGrow',
    'flexShrink',
    'alignContent',
    'alignItems',
    'alignSelf',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'placeContent',
    'placeItems',
    'gap',
    'rowGap',
    'columnGap',
    'flow',
    'wrap',
    'basis',
    'grow',
    'shrink',
    'align',
    'justify',
    'width',
    'height',
    'margin',
    'padding',
]

function forwardProp(prop: string) {
    return !OmmitedProps.includes(prop as keyof FlexboxProps)
}

setup(React.createElement, prefix, undefined, shouldForwardProp(forwardProp))
