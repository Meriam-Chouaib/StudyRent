import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import Geocode from 'react-geocode';
import L, { PointExpression } from 'leaflet';
import houseIcon from '../../assets/icons/home.png';
import { Localization, Post } from '../../redux/api/post/post.types';
import { CardPost } from '../../components';
import { PostOnMap } from '../../components/PostOnMap/PostOnMap';
import { Stack, Paper } from '@mui/material';

const houseIconUrl = houseIcon;
const houseIconOptions = {
  iconUrl: houseIconUrl,
  iconSize: [40, 40] as PointExpression,
};

const customIcon = L.icon(houseIconOptions);
export interface MapProps {
  localizations?: Localization;
  posts?: Post;
  height: string;
}

export const MapSinglePost = ({ localizations, posts, height }: MapProps) => {
  useEffect(() => {
    Geocode.setApiKey(`${process.env.API_KEY_MAP}`);
  }, []);
  console.log('localizationnnnnnns', localizations);
  console.log('postssssssssssssss', posts);

  return (
    <>
      {localizations && posts && (
        <MapContainer
          center={localizations ? [localizations.latitude, localizations.longitude] : undefined}
          zoom={12}
          style={{ height: `${height}`, width: '100%', borderRadius: '3rem' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[localizations.latitude, localizations.longitude]} icon={customIcon}>
            <Popup>
              {posts && <Stack sx={{ width: '9rem' }}>{/* //<PostOnMap post={posts} /> */}</Stack>}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};
