import Style from "styled-components";

export const FromLeftItemStyle = Style.div`
    display: inline-block;
    width : calc(50% - 8px);
    .inputNumber{
      width:500px !important;
    }
    @media only screen and (max-width: 600px) {
        display:block;
        width : calc(100% - 8px);
        margin:0 8px;
        .inputNumber{
          width:80%;
        }
      }
`;
export const FromRightItemStyle = Style.div`
    display: inline-block;
    width : calc(50% - 8px);
    margin:0 8px;
    .inputNumber{
      width:500px;
    }
    @media only screen and (max-width: 600px) {
        display: block;
        width : calc(100% - 8px);

        .inputNumber{
          width:80%;
        }
      }

`;
