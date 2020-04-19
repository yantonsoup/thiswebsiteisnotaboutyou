import React, { useEffect } from "react";
import { css, Global } from "@emotion/core";

const Reflect = ({ reflection: { geoIpData, clientIp } }) => {
  console.warn("geoIpData", geoIpData);
  console.warn("clientIp", clientIp);
  return (
    <div
      css={css`
        position: fixed;
        color: black;
        flex-direction: column;
        left: 0;
        bottom: 0;
        height: 200px;
        width: 200px;
        background-color: white;
        font-size: 16px;
      `}
    >
      <div>clientIp: {clientIp}</div>
      <div>geoIpData: {JSON.stringify(geoIpData)}</div>
    </div>
  );
};
export default Reflect;
