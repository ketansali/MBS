import Style from 'styled-components';
import { palette } from 'styled-theme';


export const Heading = Style.h2`
  font-size: 25px;
  color: #2d3446;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 51px;
`;

export const FormWrapper = Style.div`
  max-width: 400px;
  width: 100%;
  margin: 35px 0 81px;
  .field-container {
    .ant-form-item {
      &.switch-form-item {
        margin-left: -6px;
        .ant-form-item-label {
          margin: 0 0 0 7px;
        }
      }
      .ant-form-item-label {
        margin-bottom: 3px;
      }
      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          .ant-form-item-children {
            input.ant-input,
            .ant-select-selection--single {
              height: 50px;
              padding-left: 15px;
              padding-right: 15px;
              font-size: 14px;
              font-weight: 500;
              &::placeholder {
                color: #8c90b5;
              }
            }
            .ant-select-selection__rendered {
              line-height: 48px;
              margin: 0;
              .ant-select-selection__placeholder {
                color: #8c90b5;
                font-weight: 500;
                font-size: 14px;
              }
              .ant-select-selection-selected-value {
                .ant-badge-status-dot {
                  display: none;
                }
                .ant-badge-status-text {
                  margin-left: 0;
                }
              }
            }
          }
          .ant-form-explain {
            margin-top: 7px;
          }
        }
      }
    }
  }
  button[type='submit'],
  button[type='submit'].ant-btn-primary {
    border-radius: 6px;
    height: 54px;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export const Wrapper = Style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 15px;
  @media (min-width: 768px) {
    padding: 0;
  }
`;
export const TopBar = Style.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 24px;
`;

export const ElementWrapper = Style.div`
    display: flex;
    justify-content: space-between;
    .elementWidth {
    width: 49.5%
  }
`

export const BottomButtonWrapper = Style.div`

  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: justify;
  justify-content: flex-end;
  margin-bottom: 10px;

  &.viewMode {
    @media only screen and (max-width: 400px) {
      justify-content: space-between;
    }
  }

  a {
    text-decoration: none;
  }
  .isoGoInvoBtn {
    margin-right: 15px;
  }
  .isoInvoPrint {
    background: ${palette('blue', 14)};
    margin: ${(props) =>
      props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px'};
    @media (max-width: 500px) {
      margin-top: 15px;
    }

    @media (max-width: 485px) {
      margin: 0;
      margin-top: 15px;
    }
  }
  .saveBtn {
    background: ${palette('blue', 14)};
    margin: ${(props) =>
      props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px'};
  }
`
export const OtherFeesWrapper = Style.div`
  
`
export const PaymentBTN = Style.div`
  display: flex;
  justify-content: space-between;
  .paymentBtn {
    margin-right:7px;
  }
  @media only screen and (max-width: 600px){
    display: block;
    margin: 0px 0px 0px 10px;
  }
`
export const OtherFeesInnerElement = Style.div`
  display: flex;
`
export const AmountWrapper = Style.div`
  .firstInputElement {
    margin: 30px 0px 10px 0px;
  }
  .inputElement {
    margin-bottom: 10px;
   
  }
`
export const StatusAndEmailWrapper = Style.div`
    display: flex;
    align-items: baseline;
    margin-top: 20px;
    .statuswrapper {
      display: inherit;
      align-items: baseline;
    }
    .EReceipt{
      margin-left: 100px;
    }
    @media only screen and (max-width: 600px){
      display: block;
      .statuswrapper {
        display: flex;
        align-items: baseline;
      }

      .EReceipt{
        margin-left: 0px;
        margin-bottom :10px;
      }
    }
`
export const MainWrapper = Style.div`
    display: flex;
    justify-content:space-between;

    @media only screen and (max-width: 600px){
      display:block;
    }
`


