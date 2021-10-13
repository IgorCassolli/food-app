import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-right: 15px;
    border-radius: 10px;
    width: ${RFValue(100)}px;
    height: ${RFValue(80)}px;
`

export const ImageFood = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(50)}px;
`