import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors, position } from '../../styles';
import { Centered, Row } from '../layout';
import { TruncatedText } from '../text';
import ModalHeaderButton from './ModalHeaderButton';

const ModalHeaderHeight = 50;

const Container = styled(Row).attrs({
  align: 'center',
  flex: 0,
  justify: 'space-between',
})`
  background-color: ${colors.white};
  flex-shrink: 0;
  height: ${ModalHeaderHeight};
  width: 100%;
`;

const TitleContainer = styled(Centered)`
  ${position.cover};
  zIndex: 0;
`;

const TitleText = styled(TruncatedText).attrs({
  size: 'large',
  weight: 'bold',
})`
  height: 21;
  letter-spacing: -0.2px;
`;

const ModalHeader = ({
  onPressBack,
  onPressClose,
  showBackButton,
  title,
  ...props
}) => (
  <Container {...props}>
    {showBackButton && (
      <ModalHeaderButton
        label="Settings"
        onPress={onPressBack}
        showBackArrow
        side="left"
      />
    )}
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
    <ModalHeaderButton
      label="Done"
      onPress={onPressClose}
      side="right"
    />
  </Container>
);

ModalHeader.propTypes = {
  onPressBack: PropTypes.func,
  onPressClose: PropTypes.func,
  showBackButton: PropTypes.bool,
  title: PropTypes.string,
};

ModalHeader.height = ModalHeaderHeight;

export default ModalHeader;
