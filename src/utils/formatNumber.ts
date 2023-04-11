import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fData(number: number) {
  return numeral(number).format('0.0 b');
}
