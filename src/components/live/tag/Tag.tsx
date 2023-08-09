
import React from 'react'
import { combine } from '../lib';
import { RenderTag, RenderTagProps } from './RenderTag';

export type TagProps = {
} & RenderTagProps;

export const Tag = function (props: TagProps) {
    return (<RenderTag
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}