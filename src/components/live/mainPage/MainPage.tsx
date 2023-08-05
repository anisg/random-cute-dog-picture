
import React from 'react'
import { merge } from '../lib';
import { RenderMainPage, RenderMainPageProps } from './RenderMainPage';

export type MainPageProps = {
} & RenderMainPageProps;

export const MainPage = function (props: MainPageProps) {
    return (<RenderMainPage
        {...props}
        frames={merge(props.frames, {
            // edit frames here
        })}
    />);
}