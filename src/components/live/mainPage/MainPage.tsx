
import React from 'react'
import { combine } from '../lib';
import { RenderMainPage, RenderMainPageProps } from './RenderMainPage';

export type MainPageProps = {
} & RenderMainPageProps;

export const MainPage = function (props: MainPageProps) {
    return (<RenderMainPage
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}