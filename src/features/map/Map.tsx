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
  localizations: Localization[];
  posts: Post[];
}

export const Map = ({ localizations, posts }: MapProps) => {
  useEffect(() => {
    Geocode.setApiKey('797cce99946243e887bf61f0b59f26cc');
  }, []);

  return (
    <>
      <MapContainer
        center={[localizations[0].latitude, localizations[0].longitude]}
        zoom={12}
        style={{ height: '25rem', width: '100%', borderRadius: '3rem' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {localizations.map((position, index) => (
          <Marker key={index} position={[position.latitude, position.longitude]} icon={customIcon}>
            <Popup>
              <Stack sx={{ width: '9rem' }}>
                <PostOnMap post={posts[index]} />
              </Stack>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};
