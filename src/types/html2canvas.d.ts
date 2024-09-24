
declare module 'html2canvas' {
  interface Html2CanvasOptions {
    scale?: number;  // Allow the scale property
    // Add other properties if needed
  }

  function html2canvas(element: HTMLElement, options?: Html2CanvasOptions): Promise<HTMLCanvasElement>;

  export default html2canvas;
}
