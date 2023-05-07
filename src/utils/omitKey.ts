/* eslint-disable @typescript-eslint/no-explicit-any */
export function omitKey(key: any, obj: any) {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}
