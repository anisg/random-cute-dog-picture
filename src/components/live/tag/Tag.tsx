
import React from 'react'
import { merge } from '../lib';
import { RenderTag, RenderTagProps } from './RenderTag';

export type TagProps = {
} & RenderTagProps;

export const Tag = function (props: TagProps) {
    return (<RenderTag
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}