import { RiArrowLeftRightFill } from "react-icons/ri";
import { PanelResizeHandle } from "react-resizable-panels";

const ResizeHandle = () => {
    return (
        <PanelResizeHandle className="ResizeHandleOuter">
            <div className="IconContainer d-flex align-items-center">
                <RiArrowLeftRightFill />
            </div>
        </PanelResizeHandle>
    );
};

export default ResizeHandle;
