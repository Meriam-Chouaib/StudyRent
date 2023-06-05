import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Geocode from 'react-geocode';
import L from 'leaflet';
import { PointExpression } from 'leaflet';
import houseIcon from '../../assets/icons/home.png';
import { Localization, Post } from '../../redux/api/post/post.types';
import { PostOnMap } from '../../components/PostOnMap/PostOnMap';
import { Stack } from '@mui/material';

const houseIconUrl = houseIcon;
const houseIconOptions = {
  iconUrl: houseIconUrl,
  iconSize: [40, 40] as PointExpression,
};

const customIcon = L.icon(houseIconOptions);

export interface MapProps {
  localizations: Localization[];
  posts: Post[];
  height: string;
}

export const Map = ({ localizations, posts, height }: MapProps) => {
  useEffect(() => {
    Geocode.setApiKey(`${process.env.API_KEY_MAP}`);
  }, []);

  return (
    <MapContainer
      center={
        localizations && localizations.length > 0
          ? [localizations[0].latitude, localizations[0].longitude]
          : undefined
      }
      zoom={9}
      style={{ height: height, width: '100%', borderRadius: '3rem' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {localizations &&
        localizations.map((position, index) =>
          position && position.latitude && position.longitude ? (
            <Marker
              key={index}
              position={[position.latitude, position.longitude]}
              icon={customIcon}
            >
              <Popup>
                <Stack sx={{ width: '9rem' }}>
                  <PostOnMap post={posts[index]} />
                </Stack>
              </Popup>
            </Marker>
          ) : null,
        )}
    </MapContainer>
  );
};
