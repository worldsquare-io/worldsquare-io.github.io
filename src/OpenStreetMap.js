import { Icon } from 'leaflet';
import { useEffect } from 'react';
import { TileLayer, MapContainer, Marker, Polyline, useMapEvent, useMap } from 'react-leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

// Constants
const defaultCenter = [0, 0];
const defaultZoom = 12;

// Methods
const CreateMarkerIcon = () => new Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const Pin = ({ id, latlng, onClick }) => {
    return (
        <Marker
            position={latlng}
            eventHandlers={{ click: () => onClick ? onClick(id) : null }}
            icon={CreateMarkerIcon()}
        />
    );
};

const MoveToUserOnLoad = () => {
    const map = useMap();
    useEffect(() => {

        map.locate().on('locationfound', (e) => {
            console.log("Initial user position acquired");
            map.setView(e.latlng, 12);
        });

        // eslint-disable-next-line
    }, []);
    return null;
};

const OnMapClickComponent = ({ onMapClick }) => {
    useMapEvent('click', (e) => onMapClick ? onMapClick(e.latlng) : null);
    return null;
};

const CreateVectorLayer = ({ parentPin, childPins }) => {
    return childPins.map((childPin) => (
        <Polyline
            // This is to appease the warning about every item in a list needing a unique key.
            key={`${parentPin.id}-${childPin.id}`}

            pathOptions={{ color: 'black', weight: 2 }}
            positions={[parentPin.latlng, childPin.latlng]}
        />
    ));
};

const CreatePins = ({ parentPins, childPins, onPinClick }) => {
    const makePinFromPin = (pin) => (
        <Pin
            // This is to appease the warning about every item in a list needing a unique key.
            key={pin.id}

            id={pin.id}
            latlng={pin.latlng}
            onClick={onPinClick}
        />
    );

    return (
        <div>
            {parentPins.map(makePinFromPin)}
            {childPins.map(makePinFromPin)}
        </div>
    );
};

const OpenStreetMap = ({ parentPins, childPins, onPinClick, onMapClick }) => {
    // Pin should be of form { id: string, latlng: [number, number] }.
    return (
        <MapContainer center={defaultCenter} zoom={defaultZoom}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* This will move the map to the location of the user on load. */}
            <MoveToUserOnLoad />

            {/* This will listen for clicks on the map (not on a pin) and call the handler. */}
            <OnMapClickComponent onMapClick={onMapClick} />

            {/* This will draw all of our pins (parents and children) on the map. */}
            <CreatePins parentPins={parentPins} childPins={childPins} onPinClick={onPinClick} />

            {/* This will draw the lines from the child pins to the parent pin. */}
            {(parentPins.length === 1) && <CreateVectorLayer parentPin={parentPins[0]} childPins={childPins} />}
        </MapContainer>
    );
};

export default OpenStreetMap;
