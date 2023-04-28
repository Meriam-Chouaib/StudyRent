interface SearchParams {
  [key: string]: any;
}

// function getFilterString(params: SearchParams): string {
//   const parts = [];
//   for (const key in params) {
//     if (typeof params[key] === 'string') {
//       parts.push(`"${key}":"${params[key]}"`);
//     } else if (typeof params[key] === 'number') {
//       parts.push(`"${key}":${params[key]}`);
//     } else if (Array.isArray(params[key])) {
//       parts.push(`"${key}":[${params[key][0]},${params[key][1]}]`);
//     } else {
//       throw new Error(`Invalid parameter type for key ${key}`);
//     }
//   }
//   return `{${parts.join(',')}}`;
// }
export default function getFilterString(params: SearchParams): string {
  const parts = [];
  for (const key in params) {
    switch (true) {
      case typeof params[key] === 'string':
        parts.push(`"${key}":"${params[key]}"`);
        break;
      case typeof params[key] === 'number':
        parts.push(`"${key}":${params[key]}`);
        break;
      case Array.isArray(params[key]) &&
        params[key].every((item: number) => typeof item === 'number'):
        if (Array.isArray(params[key])) {
          parts.push(`"${key}":[${params[key][0]},${params[key][1]}]`);
        } else {
          throw new Error(`Invalid parameter type for key ${key}`);
        }
        break;
    }
  }
  return `{${parts.join(',')}}`;
}
