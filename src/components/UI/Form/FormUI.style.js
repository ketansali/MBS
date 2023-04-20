import Style from "styled-components";


export const TwoElementWrapper = Style.div`
    display: flex;
    justify-content: space-between;
    .elementWidth {
      width: 49.5%
  }
  @media only screen and (max-width: 600px){
    display: block;
    .elementWidth {
      width: 100%
  }
  }
`