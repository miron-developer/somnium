import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { clearPopups, goBack } from "./popupSlice";
import styled, { css } from "styled-components";

const SDisplayFlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SPopup = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  ${SDisplayFlexCenter};
  transition: 0.5s;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: -10;
  backdrop-filter: blur(1px);

  &.opened {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    z-index: 20;
    padding: 2rem;
  }

  & .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #000000b8;
  }

  & .close {
    position: absolute;
    right: 20px;
    top: 10px;
    width: 3rem;
    height: 3rem;
    padding: 5px;
    ${SDisplayFlexCenter};
    background: red;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    box-shadow: 4px 3px 4px 0 #500000;

    &:hover {
      background: darkred;
      color: white;
    }
  }

  & .content {
    max-height: 90vh;
    max-width: 80vw;
    height: max-content;
    width: max-content;
    ${SDisplayFlexCenter};
    border-radius: 10px;
    background: #ffffffc7;
    z-index: 30;
  }
`;

const allPopups = [];

// Register register to all popups arr
export const RegisterPopup = (...popups) => {
  popups.forEach((p) => {
    if (allPopups.find((pa) => pa.name === p.name)) return;
    allPopups.push({
      name: p.name,
      component: p.component,
    });
  });
};

export default function Popup() {
  const activePopup = useSelector((state) => state.popup.active);
  const isHavePrevPopup = useSelector((state) => state.popup.popups.length > 0);
  const dispatch = useDispatch();

  const isOpened = Object.values(activePopup).length !== 0;
  const popup = allPopups.find((p) => p.name === activePopup.name);

  if (!isOpened) return <SPopup></SPopup>;
  return (
    <SPopup className="opened">
      {isHavePrevPopup && (
        <span className="go-back" onClick={() => dispatch(goBack())}>
          Назад
        </span>
      )}

      <div className="bg" onClick={() => dispatch(clearPopups())} />

      <div className="close" onClick={() => dispatch(clearPopups())}>
        <i className="fas fa-times" aria-hidden="true"></i>
      </div>

      <div className="content">{popup.component(activePopup.props)}</div>
    </SPopup>
  );
}
