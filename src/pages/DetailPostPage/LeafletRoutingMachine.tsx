import { useEffect } from 'react';
// ______________________________________leaflet map ______________________________
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';
// _____________________________________ utils to get user _____________________________
import { getPersistData } from '../../utils';
import { IUser } from '../../redux/api/user/user.types';
// _____________________________________ icons _______________________
import defIcon from '../../assets/icons/icon_transparent_marker.png';
import houseIcon from '../../assets/icons/home.png';
import userIconMarker from '../../assets/icons/user_marker_icon.png';

interface LeafletRoutingMachineProps {
  positions: L.LatLngTuple[];
}
const houseIconUrl = houseIcon;
const defaultIconUrl = defIcon;
const userMarkerIconUrl = userIconMarker;

const LeafletRoutingMachine = ({ positions }: LeafletRoutingMachineProps) => {
  const user: IUser = getPersistData('user', true);
  const map = useMap();

  // ___________________________________ create icons __________________________
  const DefaultIcon = L.icon({
    iconUrl: defaultIconUrl,
    iconSize: [40, 40],
  });
  const houseIcon = L.icon({
    iconUrl: houseIconUrl,
    iconSize: [40, 40],
  });
  const userIcon = L.icon({
    iconUrl: userMarkerIconUrl,
    iconSize: [40, 40],
  });
  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;
    const firstPositionMarker = L.marker([positions[0][0], positions[0][1]], {
      icon: houseIcon,
    });
    const secondPositionMarker = L.marker([positions[1][0], positions[1][1]], { icon: userIcon });
    map.addLayer(firstPositionMarker);
    map.addLayer(secondPositionMarker);

    const waypoints = [L.latLng(positions[0][0], positions[0][1])];

    // _________________________________ test if user add his university to add the marker for address university______________________
    if (user?.role === 'STUDENT' && user.universityAddress !== null) {
      waypoints.push(L.latLng(positions[1][0], positions[1][1]));
    }

    L.Routing.control({
      waypoints,
      lineOptions: {
        styles: [{ color: 'blue', weight: 4, opacity: 0.7 }],
        extendToWaypoints: true,
        missingRouteTolerance: 100,
      },
      routeWhileDragging: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,
    }).addTo(map);
  }, []);
  return null;
};

export default LeafletRoutingMachine;
