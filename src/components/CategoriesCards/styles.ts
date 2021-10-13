import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

interface ColorProps{
    color: string;
}

export const Container = styled.View<ColorProps>`
    align-items: center;
    height: 177px;
    width: ${RFValue(105)}px;
    border-radius: 20px;
    background-color: ${({ theme, color }) => 
    color === 'yellow' ? theme.colors.background_yellow : theme.colors.background};
    margin-right: 20px;
`

export const ImageFood = styled.Image`
    height: 60px;
    width: 60px;
    margin: 24px 0px 10px 0px;
`

export const Name = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`

export const Button = styled.TouchableOpacity<ColorProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: ${RFValue(26)}px;
    height: ${RFValue(26)}px;
    background-color: ${({ theme, color }) => 
    color === 'yellow' ? theme.colors.background : theme.colors.background_red};
    border-radius: 20px;
`

export const Icon = styled(Feather)`
    color: ${({ theme, color }) => 
    color === 'yellow' ? theme.colors.text_dark : theme.colors.background};
`
