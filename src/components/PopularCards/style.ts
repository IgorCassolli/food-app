import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { FontAwesome, FontAwesome5, AntDesign  } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    width: ${RFValue(335)}px;
    height: 161px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 20px;
    padding: 24px 0px 0px 0px;
`

export const InfoContainer = styled.View`
    
`

export const TextContainer = styled.View`
    padding-left: 22px;
`

export const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Icon = styled(FontAwesome5)`
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.background_yellow};
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    font-size: ${RFValue(14)}px;
`

export const Name = styled.Text`
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    font-size: ${RFValue(14)}px;

`
export const Weight = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    color: #C4C4C4;
`

export const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
`

export const Button = styled.TouchableOpacity`
    width: ${RFValue(100)}px;
    height: ${RFValue(53)}px;
    background-color: ${({ theme }) => theme.colors.background_yellow};
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-left: -15px;
    margin-bottom: -15px;
`

export const IconButton = styled(AntDesign)`
    width: 10px;
    height: 10px;
    color: ${({ theme }) => theme.colors.text};
`

export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`

export const IconRating = styled(FontAwesome)`
    margin-left: 20px;
    margin-right: 5px;
`

export const Rating = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    font-size: ${RFValue(12)}px;

`
export const ImageContainer = styled.View`


`
export const ImageFood = styled.Image`
    position: relative;
    width: ${RFValue(190)}px;
    height: ${RFValue(100)}px;
    margin-left: 50px;

`