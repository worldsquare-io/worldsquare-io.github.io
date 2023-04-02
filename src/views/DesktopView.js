// import Map from "../Map";
import OpenStreetMap from "../OpenStreetMap";
import Thread from "../Thread";

export default function DesktopView() {
    const threadID = "abc";

    const parentPins = [
        {
            id: "1",
            latlng: [51.505, -0.09],
        },
    ];

    const childPins = [
        {
            id: "2",
            latlng: [55.505, -0.09],
        },
        {
            id: "3",
            latlng: [61.505, 1.00],
        },
    ];

    const onPinClick = (pinId) => {
        console.log("onPinClick", pinId);
    };

    const onMapClick = ({ lat, lng }) => {
        console.log("onMapClick", lat, lng);
    };

    return (
        <div>
            <div className="Map">
                {/* <Map /> */}
                <OpenStreetMap
                    parentPins={parentPins}
                    childPins={childPins}
                    onPinClick={onPinClick}
                    onMapClick={onMapClick}
                />
            </div>
            <div className="Thread">
                <Thread threadID={threadID} />
            </div>
        </div>
    );
};
