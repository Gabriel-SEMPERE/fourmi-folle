import { jsPDF } from "jspdf";

export function saveCanvasAsPdf(canvas: HTMLCanvasElement, fileName: string): void {
  const { width, height } = canvas;
  const pdf = new jsPDF({
    orientation: width >= height ? "landscape" : "portrait",
    unit: "px",
    format: [width, height],
    hotfixes: ["px_scaling"],
  });
  pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);
  pdf.save(fileName);
}
