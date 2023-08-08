
import React from 'react'
import { merge } from '../lib';
import { RenderBadgeLiveDesign, RenderBadgeLiveDesignProps } from './RenderBadgeLiveDesign';

export type BadgeLiveDesignProps = {
} & RenderBadgeLiveDesignProps;

export const BadgeLiveDesign = function (props: BadgeLiveDesignProps) {
    return (<RenderBadgeLiveDesign
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}