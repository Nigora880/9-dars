import { styled } from "styled-components";

export const HeaderButtonContent = styled.div`
 padding: 21px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav{
    display: flex;
    align-items: center;
    gap: 52px;
  }

  nav > a{
    font-weight: 600;
      font-size: 14px;
      line-height: 30px;
      letter-spacing: 0%;
      text-align: center;
      vertical-align: middle;
      color: #111111;
  }
  nav :first-child{
    color: #5A5AC9;
  }

  .btn-wrapper{
    display: flex;
    align-items: center;
    gap: 30px ;


    button{
      background:transparent;
      border:none
    }
  }


`;
