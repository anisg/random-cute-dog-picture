
import React from 'react'
import { combine } from '../lib';
import { RenderBadgeLiveDesign, RenderBadgeLiveDesignProps } from './RenderBadgeLiveDesign';

export type BadgeLiveDesignProps = {
} & RenderBadgeLiveDesignProps;

export const BadgeLiveDesign = function (props: BadgeLiveDesignProps) {
    return (<RenderBadgeLiveDesign
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}