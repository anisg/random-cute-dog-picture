
import React from 'react'
import { merge } from '../lib';
import { RenderButton, RenderButtonProps } from './RenderButton';

export type ButtonProps = {
} & RenderButtonProps;

export const Button = function (props: ButtonProps) {
    return (<RenderButton
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}