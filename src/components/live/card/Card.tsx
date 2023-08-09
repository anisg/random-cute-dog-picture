
import React from 'react'
import { combine } from '../lib';
import { RenderCard, RenderCardProps } from './RenderCard';

export type CardProps = {
} & RenderCardProps;

export const Card = function (props: CardProps) {
    return (<RenderCard
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}