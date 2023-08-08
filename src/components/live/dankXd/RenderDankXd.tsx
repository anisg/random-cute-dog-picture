
// ~ auto-generated - do not edit ~
import React from 'react';
import { cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderDankXdProps = {
    frames?: {
["dankXd"]?: DivProps;
["photography"]?: SpanProps}
;
}

export const RenderDankXd = function (props: RenderDankXdProps) {
    const { frames = {}, ...restProps } = props;
    return (
        <Div {...frames["dankXd"]} className={cls(frames,"dankXd", `gap-0 flex-row w-fit items-center overflow-hidden relative bg-[#dee3ed] opacity-100 px-4 py-[5px] rounded-[999px] flex`)}><Span {...frames["photography"]} className={cls(frames,"photography", `font-['Helvetica_Neue'] text-xs font-bold text-zinc-700 text-center flex flex-row justify-center shrink-0 relative`)}>#photography</Span>
</Div>
    );
}