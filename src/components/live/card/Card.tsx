
import React from 'react'
import { merge } from '../lib';
import { RenderCard, RenderCardProps } from './RenderCard';

export type CardProps = {
} & RenderCardProps;

export const Card = function (props: CardProps) {
    return (<RenderCard
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}