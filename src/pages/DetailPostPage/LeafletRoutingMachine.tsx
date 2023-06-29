/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
// ______________________________________leaflet map ______________________________
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';

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

  // __________________________________ create the way between two localizations _______________________
  let waypoints: any = [];
  waypoints = [L.latLng(positions[0][0], positions[0][1])];

  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;

    positions.map((item, index) => {
      map.addLayer(
        L.marker([item[0], item[1]], {
          icon: index !== 1 ? houseIcon : userIcon,
        }),
      );
      // ________________ test on the university ______________________
      if (index === 1) {
        waypoints.push(L.latLng(item[0], item[1]));
      }
    });

    const routingControl = L.Routing.control({
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
    });

    routingControl.addTo(map);

    const container = routingControl.getContainer();
    const routeListContainer = container?.querySelector('.leaflet-routing-alternatives-container');

    if (routeListContainer) {
      if (routeListContainer) {
        routeListContainer.setAttribute('style', 'display:none');
      }
    }

    return () => {
      map.removeControl(routingControl);
    };
  }, []);
  return null;
};

export default LeafletRoutingMachine;
