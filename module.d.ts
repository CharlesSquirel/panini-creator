declare module '*.scss' {
  const content: { [key: string]: any };
  export = content;
}

declare module '*.svg' {
  const content: string;
  export = content;
}
