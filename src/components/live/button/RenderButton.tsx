
// ~ auto-generated - do not edit ~
import React from 'react';
import { cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderButtonProps = {
    frames?: {
["button"]?: DivProps;
["title"]?: SpanProps}
;
}

export function RenderButton(props: RenderButtonProps) {
    const { frames = {}, ...restProps } = props;
    return (
        <Div {...frames["button"]} className={cls(frames, "button")} style={{gap: 10, flexDirection: 'row', width: 'fit-content', alignItems: 'flex-start', overflow: 'hidden', position: 'relative', border: '1px  SOLID #c73d3d', borderRadius: 3, padding: '5px 11px 5px 11px', backgroundColor: '#db4242', opacity: 1, display: 'flex', ...frames["button"]}}><Span {...frames["title"]} className={cls(frames, "title")} style={{fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: '#ffffff', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative', ...frames["title"]}}>title</Span>
</Div>
    );
}