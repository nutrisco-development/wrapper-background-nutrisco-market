declare module '*.css' {
  type Styles = {
    [selector: string]: string;
  };

  const styles: Styles;

  export default styles;
}

// // declaration.d.ts
// declare module '*.css' {
//   const content: {[className: string]: string};
//   export default content;
// }

// // declaration.d.ts
// declare module '*.css' {
//   const css: any;
//   export default css;
// }
