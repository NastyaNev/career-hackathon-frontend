import React, { useEffect } from "react";


function RenderComponent({ type, isEdge, updateDisabledState }) {
    useEffect(() => {
      updateDisabledState(type, isEdge);
    }, [isEdge]);
  
    return <></>;
}

export default RenderComponent;