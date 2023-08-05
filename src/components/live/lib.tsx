import React from 'react'
import { twMerge } from 'tailwind-merge'


export type ElementProps<T extends keyof JSX.IntrinsicElements = "div"> = JSX.IntrinsicElements[T];

export function cls(framesTree: Record<string, any> | undefined, name: string, className: string): string {
  // later: use tailwind-merge
  if (framesTree?.[name]?.className) {
    return (
      twMerge(className, framesTree[name]?.className)
    );
  }
  return className;
}

function mergeDeep(target: any, ...sources: any[]) {
  function isObject(item: any) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
  function isReactObject(source: any): boolean {
    return source.$$typeof != null;
  }

  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source) && !isReactObject(source)) {
    for (const key in source) {
      if (isObject(source[key]) && !isReactObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
}

export function merge<OverrideType>(...arr: OverrideType[]): OverrideType {
  return arr.reduce((res, cur) => mergeDeep(res, cur), {} as OverrideType);
}
