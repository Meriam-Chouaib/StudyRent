import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import Geocode from 'react-geocode';
import L from 'leaflet';

import { Localization, Post } from '../../redux/api/post/post.types';
import LeafletRoutingMachine from '../../pages/DetailPostPage/LeafletRoutingMachine';

export interface MapProps {
  post: Post;
  localizations: Localization[];
  height: string;
}

export const MapSinglePost = ({ localizations, height }: MapProps) => {
  useEffect(() => {
    Geocode.setApiKey(`${process.env.API_KEY_MAP}`);
  }, []);

  const positionsToSend: L.LatLngTuple[] = [];

  localizations.map((item) => {
    positionsToSend.push([item.latitude, item.longitude]);
  });

  return (
    <>
      <MapContainer
        center={positionsToSend && positionsToSend[0] && positionsToSend[0]}
        zoom={10}
        style={{ height: `${height}`, width: '100%', borderRadius: '3rem' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <LeafletRoutingMachine positions={positionsToSend} />
      </MapContainer>
    </>
  );
};
