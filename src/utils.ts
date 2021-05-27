import { Props } from './types'

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

		${defineProperty('margin-top', props.margin?.top)}
		${defineProperty('margin-right', props.margin?.right)}
		${defineProperty('margin-bottom', props.margin?.bottom)}
		${defineProperty('margin-left', props.margin?.left)}

		${defineProperty('padding-top', props.padding?.top)}
		${defineProperty('padding-right', props.padding?.right)}
		${defineProperty('padding-bottom', props.padding?.bottom)}
		${defineProperty('padding-left', props.padding?.left)}

		${defineProperty('width', props.width)}
		${defineProperty('height', props.height)}
	`
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
