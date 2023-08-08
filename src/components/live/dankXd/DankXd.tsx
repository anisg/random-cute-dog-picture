
import React from 'react'
import { merge } from '../lib';
import { RenderDankXd, RenderDankXdProps } from './RenderDankXd';

export type DankXdProps = {
} & RenderDankXdProps;

export const DankXd = function (props: DankXdProps) {
    return (<RenderDankXd
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}