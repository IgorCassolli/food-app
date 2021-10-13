import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather, FontAwesome } from '@expo/vector-icons';

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_screen};
    padding: 0 20px;
`

export const ContainerIcons = styled.View`
    margin-top: ${RFValue(60)}px;
    flex-direction: row;
    justify-content: space-between;
`

export const IconBack = styled(Feather)`
    font-size: ${RFValue(12)}px;
    border: 1px solid #CDCDCD;
    padding: ${RFValue(14)}px;
    border-radius: 10px;     
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px; 
`

export const IconFavorite = styled(FontAwesome)`
    font-size: ${RFValue(12)}px;
    padding: ${RFValue(14)}px;
    border-radius: 10px;
    background-color:${({ theme }) => theme.colors.background_yellow};
    color: ${({ theme }) => theme.colors.background};
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px; 
`

export const ContainerFood = styled.View`
    margin-top: ${RFValue(30)}px;  
`
export const Name = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const Price = styled.Text`
    margin-top: ${RFValue(20)}px; 
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_orange};
`
export const AboutFood = styled.View`
    margin-top: ${RFValue(30)}px; 
    flex-direction: row;
    justify-content: space-between;
   
`
export const InformationContainer = styled.View`
`
export const Info = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: #CDCDCD;
`
export const AnswerInfo = styled.Text`
    margin-top: ${RFValue(5)}px; 
    margin-bottom: ${RFValue(20)}px; 
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    color: ${({ theme }) => theme.colors.text_dark};
`
export const ImageFood = styled.Image`
    position: relative;
    width: ${RFValue(296)}px;
    height: ${RFValue(176)}px;
    margin-right: ${RFPercentage(-10)}px;
`
export const Ingredients = styled.View`
    margin-top: ${RFValue(60)}px; 
`
export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_dark};
`
export const ImageIngredients = styled.View`
    margin-top: ${RFValue(19)}px;
    flex-direction: row; 
`

export const OrderButton = styled.View`
    margin-top: ${RFValue(60)}px;
    margin-bottom: ${RFValue(48)}px;
    width: ${RFValue(335)}px;
    height: ${RFValue(62)}px;
    background-color: ${({ theme }) => theme.colors.background_yellow};
    border-radius: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_dark};
    margin-right: 11px;
`

export const IconButton = styled(Feather)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(2)}px;
`