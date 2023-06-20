import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import Geocode from 'react-geocode';
import L, { PointExpression } from 'leaflet';
import houseIcon from '../../assets/icons/home.png';
import userIconMarker from '../../assets/icons/user_marker_icon.png';
import { Localization, Post } from '../../redux/api/post/post.types';
import LeafletRoutingMachine from '../../pages/DetailPostPage/LeafletRoutingMachine';

const houseIconUrl = houseIcon;
const userIconUrl = userIconMarker;

export interface MapProps {
  post: Post;
  localizations: Localization[];
  height: string;
}

export const MapSinglePost = ({ post, localizations, height }: MapProps) => {
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
