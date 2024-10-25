import { useState } from "react";

export const useTab = (initTag,allTag) => {
    if(!allTag || !Array.isArray(allTag)) return;
    const [currIdx,setCurrIdx] = useState(initTag);
    return {
      currItem: allTag[currIdx],
      changeItem: setCurrIdx
    }
  }