import styled from "styled-components";

export const Container = styled.div`

    padding: 15px;
    margin: 5px;
    border-radius: 5px;

    background-color: rgba(0,0,0,0.2);
    text-align: center;
    color: #fff;
    
    > h2 {
        font-size: 12px;

    }

    > p {
        font-size: 12px;
    }

    > div {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    > div img {
        width: 35px;
    }

    > div p {
        font-size: 15px;
    }

`