
import React from 'react'
import { combine } from '../lib';
import { RenderButton, RenderButtonProps } from './RenderButton';

export type ButtonProps = {
} & RenderButtonProps;

export const Button = function (props: ButtonProps) {
    return (<RenderButton
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}