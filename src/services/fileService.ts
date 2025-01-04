export function getFilePath(filePath: string): string {
  return new URL(`../assets/${filePath}`, import.meta.url).href;
}
