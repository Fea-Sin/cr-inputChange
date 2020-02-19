
export function trim(val) {
  if (typeof val === 'string') {
    return val.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
}