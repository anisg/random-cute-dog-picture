
// ~ auto-generated - do not edit ~
import React from 'react';
import { combine, cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderButtonProps = {
    frames?: {
    ["button"]?: DivProps
    ["containerButton"]?: DivProps
    ["clickMe"]?: SpanProps

  }
;
}

export function RenderButton(props: RenderButtonProps) {
    const { frames = {}, ...restProps } = props;
    return (
        <Div {...frames["button"]} className={cls(frames, "button")} style={{gap: 0, flexDirection: 'column', position: 'relative', padding: '0px 0px 0px 0px', opacity: 1, display: 'flex', ...frames["button"]?.style}}>
  <Div {...frames["containerButton"]} className={cls(frames, "containerButton")} style={{gap: 10, flexDirection: 'row', width: 'fit-content', alignItems: 'flex-start', flexShrink: 0, overflow: 'hidden', position: 'relative', border: '1px  SOLID #c73d3d', borderRadius: 3, padding: '5px 11px 5px 11px', backgroundColor: '#e3a8a8', opacity: 1, display: 'flex', ...frames["containerButton"]?.style}}>
    <Span {...frames["clickMe"]} className={cls(frames, "clickMe")} style={{fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: '#ffffff', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative', ...frames["clickMe"]?.style}}>click me</Span>
  </Div>
</Div>
    );
}