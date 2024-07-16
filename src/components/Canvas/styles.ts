import { kumbh, roboto } from '../../lib/fonts'

export const scale = 4

export const styles = {
    height: 2200,
    widthInitial: 5000,
    maxCharsPerLine: 12,
    maxCharsPerLineGCD: 18,
    positions: {
        ogcdSeparatorLineHeight: 40 * scale,
        gcdLabelTopPadding: 32 * scale,
        prepullPadding: 16 * scale,
        pullLineHeightBelow: 35 * scale,
        pullLineHeightAbove: 140 * scale,
        rotationPadding: 64 * scale,
        canvasCornerRadius: 8 * scale,
        textBottomPadding: 16 * scale,
        midlineAdjustBottom: 100 * scale,
        jobIconWidth: 128 * scale,
        jobIconAdjustTop: 16 * scale,
        jobIconAdjustLeft: 16 * scale,
        jobIconPadding: 8 * scale,
        titleMarginTop: 64 * scale,
        titleMarginLeft: 64 * scale,
        subtitleLinePadding: 16 * scale,
        pullTimeAdjustTop: 4 * scale,
        buffLineHeight: 32 * scale,
        buffLineTextLeft: 64 * scale,
        buffLineTextPadding: 8 * scale,
        buffLineArrowPadding: 4 * scale,
        buffLineArrowLength: 8 * scale,
        buffLineIconWidth: 24 * scale,
        buffLineIconHeight: 30 * scale,
        balanceLogoWidth: 64 * scale,
        balanceLogoHeight: 64 * scale,
        balanceLogoAdjustTop: 24 * scale,
        balanceLogotypeWidth: 256 * scale,
        balanceLogotypeHeight: 24 * scale,
        balanceLogoGap: 16 * scale,
        balanceLogotypeAdjustTop: 8 * scale,
        balanceUrlAdjustTop: 20 * scale,
        balanceUrlAdjustLeft: 95 * scale,
        weaveSlotWidth: 64 * scale,
        weaveSlotHeight: 24 * scale,
        weaveSlotYOffset: 8 * scale,
        gcdWidth: 64 * scale,
        gcdHeight: 64 * scale,
        ogcdWidth: 48 * scale,
        ogcdHeight: 48 * scale,
        ogcdAdjustInward: 3 * scale,
        ogcdClipPadding: 8 * scale,
        ogcdBottomPadding: 24 * scale,
        frameAdjustLeft: 3 * scale,
        frameAdjustTop: 3 * scale,
        frameExtraWidthGcd: 8 * scale,
        frameExtraWidthOgcd: 6 * scale,
        frameExtraHeightGcd: 12 * scale,
        frameExtraHeightOgcd: 10 * scale,
        hardcastEndWidth: 4 * scale,
        weaveslotEndAdjustLeft: 4 * scale,
        prepullGcdPadding: 16 * scale,
        prepullOgcdPadding: 40 * scale,
    },
    fonts: {
        pullLabel: `${32 * scale}px ${roboto.style.fontFamily}`,
        label: `${16 * scale}px ${roboto.style.fontFamily}`,
        pullTime: `${20 * scale}px ${roboto.style.fontFamily}`,
        title: `700 ${48 * scale}px ${kumbh.style.fontFamily}`,
        subtitle: `${32 * scale}px ${kumbh.style.fontFamily}`,
        url: `${20 * scale}px ${kumbh.style.fontFamily}`,
    },
    colors: {
        background: '#121213',
        text: '#e1e4e6',
        title: '#e1e4e6',
        subtitle: '#c8cbce',
        line: '#e1e4e6',
        url: '#95959b',
        gcdCount: '#7a7b7d'
    },
} as const
