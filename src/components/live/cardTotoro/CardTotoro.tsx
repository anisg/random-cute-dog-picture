
import React from 'react'
import { merge } from '../lib';
import { RenderCardTotoro, RenderCardTotoroProps } from './RenderCardTotoro';

export type CardTotoroProps = {
} & RenderCardTotoroProps;

export const CardTotoro = function (props: CardTotoroProps) {
    return (<RenderCardTotoro
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}