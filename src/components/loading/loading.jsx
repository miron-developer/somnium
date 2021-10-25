import { useState } from "react";

import styled from "styled-components";

const SLoading = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: #00000036;
`;

let sl = () => {};
export const SetLoading = value => sl(value);

export default function Loading() {
    const [isLoading, setLoading] = useState(false);
    sl = setLoading;

    if (!isLoading) return null;
    return (
        <SLoading id="loading">
            <img src="/img/common/loading1.gif" alt="loading icon" />
        </SLoading>
    )
}