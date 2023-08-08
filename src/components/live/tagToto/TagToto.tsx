
import React from 'react'
import { merge } from '../lib';
import { RenderTagToto, RenderTagTotoProps } from './RenderTagToto';

export type TagTotoProps = {
} & RenderTagTotoProps;

export const TagToto = function (props: TagTotoProps) {
    return (<RenderTagToto
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}