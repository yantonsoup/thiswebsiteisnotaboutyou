import React from "react";
import { css } from "@emotion/core";
import CanvasDraw from "react-canvas-draw";

import { formatUtcToHumanReadable } from "../helpers";

import Icon from "./Icon";

const getSelectedBox = ({ selectedIndex, contributions }) => {
  const selectedBox = contributions[selectedIndex] || {};
  console.warn("selectedBox", selectedBox);

  const { ip, createdAt, color, canvas, locationString } = selectedBox;

  const paresedDate = formatUtcToHumanReadable(createdAt);

  return {
    ip,
    color,
    canvas,
    locationString,
    created: paresedDate,
  };
};

const SelectedBox = ({
  selectedIndex,
  setSelectedIndex,
  contributions,
  isBoxSelected,
  canvasSize,
}) => {
  const { locationString, created, color, canvas } = getSelectedBox({
    selectedIndex,
    contributions,
  });
  console.warn("locationString", locationString);

  return (
    <>
      {isBoxSelected && (
        <>
          <div
            css={css`
              position: fixed;
              z-index: 50;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: flex;
            `}
          >
            <div
              css={css`
                background-color: white;
                width: ${canvasSize}px;
                height: ${canvasSize}px;
                border: 2px solid #036cdb;
                background-color: ${color};
                cursor: not-allowed;
              `}
            >
              <CanvasDraw
                canvasWidth={canvasSize}
                canvasHeight={canvasSize}
                gridColor={color}
                disabled={true}
                saveData={canvas}
                immediateLoading={false}
                hideInterface={true}
                style={{ background: color, pointerEvents: "none" }}
              />

              <div
                onClick={() => {
                  setSelectedIndex(-1);
                }}
                css={css`
                  &:hover {
                    cursor: pointer;
                    svg {
                      background-color: white;
                    }
                  }
                `}
              >
                <div
                  css={css`
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size: 14px;
                    @media (min-width: 768) {
                      font-size: 18px;
                    }
                    transform: translate(0%, calc(100% + 2px));
                  `}
                >
                  Contributed on {created}
                  {locationString && locationString}
                </div>

                <Icon
                  css={css`
                    cursor: pointer;
                    float: right;
                    top: 0;
                    right: 0;
                    position: absolute;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2;
                    height: 60px;
                    width: 60px;
                    transform: translate(calc(100% + 20px), 0%);
                    border: 2px solid #036cdb;
                  `}
                  name="close"
                  stroke="red"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SelectedBox;
