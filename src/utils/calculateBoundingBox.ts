/* eslint-disable @typescript-eslint/no-explicit-any */
export function calculateBoundingBox(data: any) {
  let minLat = Number.MAX_VALUE;
  let maxLat = Number.MIN_VALUE;
  let minLng = Number.MAX_VALUE;
  let maxLng = Number.MIN_VALUE;

  data.map((item: any) => {
    const { lat, lng } = item.localization;

    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
    minLng = Math.min(minLng, lng);
    maxLng = Math.max(maxLng, lng);
  });

  return {
    minLat,
    maxLat,
    minLng,
    maxLng,
  };
}
