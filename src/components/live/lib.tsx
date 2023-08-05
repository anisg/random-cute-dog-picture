import React from 'react'
import { twMerge } from 'tailwind-merge'


// export type ElementProps<T extends keyof JSX.IntrinsicElements = "div"> = JSX.IntrinsicElements[T];

export function cls(framesTree: Record<string, any> | undefined, name: string, className: string): string {
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


type ElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
  outer?: JSX.Element | null;
  inner?: JSX.Element | null;
}

export type DivProps = ElementProps<"div">;
export function Div(props: ElementProps<"div">) {
  const { outer, inner, ...rest } = props;
  if (outer !== undefined) {
    return outer;
  }
  if (inner !== undefined) {
    return <div {...rest}>{inner}</div>
  }
  return <div {...rest} />;
}

export type SpanProps = ElementProps<"span">;
export function Span(props: ElementProps<"span">) {
  const { outer, inner, ...rest } = props;
  if (outer !== undefined) {
    return outer;
  }
  if (inner !== undefined) {
    return <span {...rest}>{inner}</span>
  }
  return <span {...rest} />;
}

export type SvgProps = ElementProps<"svg">;
export function Svg(props: ElementProps<"svg">) {
  const { outer, inner, ...rest } = props;
  if (outer !== undefined) {
    return outer;
  }
  if (inner !== undefined) {
    return <svg {...rest}>{inner}</svg>
  }
  return <svg {...rest} />;
}