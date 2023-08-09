
// ~ auto-generated - do not edit ~
import React from 'react';
import { combine, cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderTagProps = {
    frames?: {
    ["tag"]?: DivProps
    ["photography"]?: SpanProps

  }
;
}

export function RenderTag(props: RenderTagProps) {
    const { frames = {}, ...restProps } = props;
    return (
        <Div {...frames["tag"]} className={cls(frames, "tag")} style={{gap: 0, flexDirection: 'row', width: 'fit-content', alignItems: 'center', overflow: 'hidden', position: 'relative', borderRadius: 999, padding: '5px 16px 5px 16px', backgroundColor: '#dee3ed', opacity: 1, display: 'flex', ...frames["tag"]?.style}}>
  <Span {...frames["photography"]} className={cls(frames, "photography")} style={{fontFamily: 'Helvetica Neue', fontSize: 12, fontWeight: 700, color: '#3f3f46', textAlign: 'center', position: 'relative', ...frames["photography"]?.style}}>#photography</Span>
</Div>
    );
}