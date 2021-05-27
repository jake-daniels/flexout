import { MarginPropDecomposed, PaddingPropDecomposed, Props } from './types'

export function transformPropsToCss(props: Props) {
    return `
		display: flex;

		${defineProperty('flex-flow', props.flexFlow)}
		${defineProperty('flex-direction', props.flexDirection)}
		${defineProperty('flex-wrap', props.flexWrap)}
		${defineProperty('order', props.order)}
		${defineProperty('flex', props.flex)}
		${defineProperty('flex-basis', props.flexBasis)}
		${defineProperty('flex-grow', props.flexGrow)}
		${defineProperty('flex-shrink', props.flexShrink)}
		${defineProperty('align-content', props.alignContent)}
		${defineProperty('align-items', props.alignItems)}
		${defineProperty('align-self', props.alignSelf)}
		${defineProperty('justify-content', props.justifyContent)}
		${defineProperty('justify-items', props.justifyItems)}
		${defineProperty('justify-self', props.justifySelf)}

		${defineProperty('flex-flow', props.flow)}
		${defineProperty('flex-wrap', props.wrap)}
		${defineProperty('flex-basis', props.basis)}
		${defineProperty('flex-grow', props.grow)}
		${defineProperty('flex-shrink', props.shrink)}
		${defineProperty('align-items', props.align)}
		${defineProperty('justify-content', props.justify)}

		${defineSpacing(props)}

		${defineProperty('margin', isString(props.margin) ? props.margin : undefined)}
		${defineProperty('margin-top', isObject<MarginPropDecomposed>(props.margin) ? props.margin.top : undefined)}
		${defineProperty('margin-right', isObject<MarginPropDecomposed>(props.margin) ? props.margin.right : undefined)}
		${defineProperty('margin-bottom', isObject<MarginPropDecomposed>(props.margin) ? props.margin.bottom : undefined)}
		${defineProperty('margin-left', isObject<MarginPropDecomposed>(props.margin) ? props.margin.left : undefined)}

		${defineProperty('padding', isString(props.padding) ? props.padding : undefined)}
		${defineProperty('padding-top', isObject<PaddingPropDecomposed>(props.padding) ? props.padding.top : undefined)}
		${defineProperty('padding-right', isObject<PaddingPropDecomposed>(props.padding) ? props.padding.right : undefined)}
		${defineProperty('padding-bottom', isObject<PaddingPropDecomposed>(props.padding) ? props.padding.bottom : undefined)}
		${defineProperty('padding-left', isObject<PaddingPropDecomposed>(props.padding) ? props.padding.left : undefined)}

		${defineProperty('width', props.width)}
		${defineProperty('height', props.height)}
	`
}

function isString(prop: any): prop is string {
    return prop !== undefined && typeof prop === 'string'
}

function isObject<T>(prop: any): prop is T {
    return prop !== undefined && typeof prop === 'object'
}

function defineProperty(name: string, value: any) {
    return value !== undefined ? `${name}: ${value};` : ''
}

function defineSpacing(props: Props) {
    if (props.spacing !== undefined && props.flexDirection === 'row') {
        return `
			& > * {
				margin-left: calc(${props.spacing} / 2);
				margin-right: calc(${props.spacing} / 2);
				&:first-child { margin-left: 0; }
				&:last-child { margin-right: 0; }
			}
		`
    }
    if (props.spacing !== undefined && props.flexDirection === 'column') {
        return `
			& > * {
				margin-top: calc(${props.spacing} / 2);
				margin-bottom: calc(${props.spacing} / 2);
				&:first-child { margin-top: 0; }
				&:last-child { margin-bottom: 0; }
			}
		`
    }
    return ''
}
