import React from 'react';
import OpenStreetMap from "../components/OpenStreetMap";
import Thread from "../components/Thread";
import { useState, useEffect } from 'react';
import { fetchParentItems, fetchChildItems } from "../helpers/Api";
import ResizeHandle from '../components/ResizeHandle';

// ResizableReactComponents
import { Panel, PanelGroup } from "react-resizable-panels";

// MaterialUI
import { Box } from "@mui/material";

export default function DesktopView() {
    const [parentPins, setParentPins] = useState([]);
    const [childPins, setChildPins] = useState([]);
    const [threadId, setThreadId] = useState(null);

    const fetchReturnToAllParents = () => {
        fetchParentItems()
            .then((parentItems) => {
                setParentPins(parentItems);
                setChildPins([]);
                setThreadId(null);
            })
            .catch((error) => console.error("Failed initial fetch of parent items:", error));
    };

    // Initial call to API.
    useEffect(() => {
        fetchReturnToAllParents();
    }, []);

    const onPinClick = (pinId) => {
        let parentPin = parentPins.find((pin) => pin._id === pinId);
        if (parentPin) {

            // This means we are showing the detailed view for a parent item.
            // Since they clicked it again, we should return to all parent items.
            if (parentPins.length === 1) {
                fetchReturnToAllParents();
            }
            else {
                // Fetch the child items for this parent item.
                fetchChildItems(pinId)
                    .then((childItems) => {

                        console.log("Showing detailed view for pinId:", pinId);
                        setParentPins([parentPin]);
                        setChildPins(childItems);
                        setThreadId(pinId);

                    })
                    .catch((error) => console.error("Failed fetch of child items:", error));
            }

        }
    };

    const onMapClick = ({ lat, lng }) => {
        // console.log("onMapClick", lat, lng);
    };

    const makeThread = () => {
        return threadId
            ? <Thread parentItem={parentPins[0]} childItems={childPins} />
            : null;
    };

    return (
        <Box className="DesktopViewContainer">
            <PanelGroup direction="horizontal">
                <Panel defaultSize={80}>
                    <OpenStreetMap
                        parentPins={parentPins}
                        childPins={childPins}
                        onPinClick={onPinClick}
                        onMapClick={onMapClick}
                    />
                </Panel>
                <ResizeHandle />
                <Panel className="ThreadContainer">
                    {makeThread()}
                </Panel>
            </PanelGroup>
        </Box>
    );
};
