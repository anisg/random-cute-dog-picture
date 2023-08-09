
// ~ auto-generated - do not edit ~
import React from 'react';
import { combine, cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderBadgeLiveDesignProps = {
    frames?: {
["badgeLiveDesign"]?: DivProps;
["madeOn"]?: SpanProps;
["group869"]?: SvgProps;
["liveDesign"]?: SpanProps}
;
}

export function RenderBadgeLiveDesign(props: RenderBadgeLiveDesignProps) {
    const { frames = {}, ...restProps } = props;
    return (
        <Div {...frames["badgeLiveDesign"]} className={cls(frames, "badgeLiveDesign")} style={{gap: 2, flexDirection: 'row', width: 'fit-content', alignItems: 'flex-start', overflow: 'hidden', position: 'relative', boxShadow: '0px 2px 2px rgba(0.2356770783662796, 0.2644856870174408, 0.3125, 0.10000000149011612)', borderRadius: 6, padding: '9px 14px 7px 14px', backgroundColor: '#ffffff', opacity: 1, display: 'flex', ...frames["badgeLiveDesign"]?.style}}>
  <Span {...frames["madeOn"]} className={cls(frames, "madeOn")} style={{fontFamily: 'Inter', fontSize: 12, fontWeight: 500, color: '#26292f', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative', ...frames["madeOn"]?.style}}>Made on</Span>
  <svg className="group869" width={19} height={17} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M0 17L3.28916 11H15.9398L19 17H0Z" fill="#295CD7" />
    <ellipse cx="9.5" cy={14} rx="4.5" ry={1} fill="white" />
    <circle cx="9.5" cy="6.5" r={6} fill="#295CD7" stroke="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16 6.5C16 10.0899 13.0899 13 9.5 13C5.91015 13 3 10.0899 3 6.5C3 2.91015 5.91015 0 9.5 0C13.0899 0 16 2.91015 16 6.5ZM9.5 12C12.5376 12 15 9.53757 15 6.5C15 3.46243 12.5376 1 9.5 1C6.46243 1 4 3.46243 4 6.5C4 9.53757 6.46243 12 9.5 12Z" fill="white" />
  </svg>
  <Span {...frames["liveDesign"]} className={cls(frames, "liveDesign")} style={{fontFamily: 'Inter', fontSize: 12, fontWeight: 500, color: '#26292f', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative', ...frames["liveDesign"]?.style}}>LiveDesign</Span>
</Div>
    );
}