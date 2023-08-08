import React from 'react'



export function cls(framesTree: Record<string, any> | undefined, name: string): string {
  if (framesTree?.[name]?.className) {
    return (
      `${name} ${framesTree[name]?.className}`
    );
  }
  return name;
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

export function combine<OverrideType>(...arr: OverrideType[]): OverrideType {
  return arr.reduce((res, cur) => mergeDeep(res, cur), {} as OverrideType);
}


type ElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
  replace?: JSX.Element | string | null;
  content?: JSX.Element | string | null;
}

export type DivProps = ElementProps<"div">;
export function Div(props: ElementProps<"div">) {
  const { replace, content, ...rest } = props;
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <div {...rest}>{content}</div>
  }
  return <div {...rest} />;
}

export type SpanProps = ElementProps<"span">;
export function Span(props: ElementProps<"span">) {
  const { replace, content, ...rest } = props;
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <span {...rest}>{content}</span>
  }
  return <span {...rest} />;
}

export type SvgProps = ElementProps<"svg">;
export function Svg(props: ElementProps<"svg">) {
  const { replace, content, ...rest } = props;
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <svg {...rest}>{content}</svg>
  }
  return <svg {...rest} />;
}

export type ImgProps = ElementProps<"img">;
export function Img(props: ElementProps<"img">) {
  const { replace, content, ...rest } = props;
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <img {...rest}>{content}</img>
  }
  return <img {...rest} />;
}
