import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 55px;
    padding: 15px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 40px;

    svg {
        font-size: 30px;
        color: #fff;

        &:hover {
            opacity: .5;
            cursor: pointer;
        }
    }

    #location {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            display: flex;
            font-size: 14px;
            color: #fff;
        }

        #date {
            font-size: 10px;
        }

    }
`