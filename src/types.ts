import * as CSS from 'csstype'

interface HTMLDivProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

interface FlowProps {
    flexFlow?: CSS.Property.FlexFlow
    flexDirection?: CSS.Property.FlexDirection
    flexWrap?: CSS.Property.FlexWrap
    order?: CSS.Property.Order
}

interface FlexibilityProps {
    flex?: CSS.Property.Flex
    flexBasis?: CSS.Property.FlexBasis
    flexGrow?: CSS.Property.FlexGrow
    flexShrink?: CSS.Property.FlexShrink
}

interface AlignmentProps {
    alignContent?: CSS.Property.AlignContent
    alignItems?: CSS.Property.AlignItems
    alignSelf?: CSS.Property.AlignSelf
    justifyContent?: CSS.Property.JustifyContent
    justifyItems?: CSS.Property.JustifyItems
    justifySelf?: CSS.Property.JustifySelf
}

interface ExtraConvenienceProps {
    flow?: CSS.Property.FlexFlow
    wrap?: CSS.Property.FlexWrap
    basis?: CSS.Property.FlexBasis
    grow?: CSS.Property.FlexGrow
    shrink?: CSS.Property.FlexShrink
    align?: CSS.Property.AlignItems
    justify?: CSS.Property.JustifyContent
    spacing?: CSS.Property.Margin
    margin?: CSS.Property.Margin | MarginPropDecomposed
    padding?: CSS.Property.Padding | PaddingPropDecomposed
    width?: CSS.Property.Width
    height?: CSS.Property.Height
}

export interface MarginPropDecomposed {
    top?: CSS.Property.Margin
    right?: CSS.Property.Margin
    bottom?: CSS.Property.Margin
    left?: CSS.Property.Margin
}

export interface MarginPropDecomposed {
    top?: CSS.Property.Margin
    right?: CSS.Property.Margin
    bottom?: CSS.Property.Margin
    left?: CSS.Property.Margin
}

export interface PaddingPropDecomposed {
    top?: CSS.Property.Padding
    right?: CSS.Property.Padding
    bottom?: CSS.Property.Padding
    left?: CSS.Property.Padding
}

export interface FlexboxProps extends FlowProps, FlexibilityProps, AlignmentProps, ExtraConvenienceProps {}

export interface Props extends HTMLDivProps, FlexboxProps {}
