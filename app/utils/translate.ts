export function translate(locals: any, str: string, split?: string) {
  return str.split(split ?? '.').reduce((pre, cur, index) => pre[cur], locals);
}
