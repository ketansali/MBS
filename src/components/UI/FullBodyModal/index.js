import React from "react";
import { IconSvg } from '@iso/components/ScrumBoard/IconSvg/IconSvg';
import ArrowIcon from "@iso/assets/images/icon/04-icon.svg";
import CloseIcon from "@iso/assets/images/icon/07-icon.svg";
import { Wrapper, FormWrapper,Heading, TopBar } from "./FullBodyModal.style";
const Index = ({ handleBack, children, title }) => {
  return (
    <Wrapper>
      <TopBar>
      <div><Heading>{title}</Heading></div>
      <div><IconSvg
          src={CloseIcon}
          border="none"
          padding={'0'}
          alt="Close Icon"
          onClick={handleBack}
          name="CLOSE ARROW"
          width="20px"
        /></div>
      </TopBar>
      {children}
    </Wrapper>
  );
};

export default Index;
