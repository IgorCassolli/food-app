import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

export const Container = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator : false,
})`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_screen};
`

export const Header = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 60px;
    padding: 0 20px;
`
export const PhotoUser = styled.Image`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: 50px;
`

export const ButtonOption = styled.TouchableOpacity`
`

export const IconButtonOption = styled(Feather)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(40)}px;
`

export const ApplicationInfo = styled.View`
    margin-top: 30px;
    padding: 0px 20px;
`

export const TitleApplication = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;  
    color: ${({ theme }) => theme.colors.text}; 
`

export const SubtitleApplication = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(32)}px; 
    color: ${({ theme }) => theme.colors.text}; 
`

export const SearchContainer = styled.View`
    padding: 0px 20px;
`

export const SearchInput = styled.View`
    margin-top: 36px;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
`

export const IconSearch = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text};
`
export const InputSearch = styled.TextInput.attrs({
    placeholder: "Search..."
})`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    width: 100%;
    margin-left: 12px;
    border-bottom-width: 2px;
    border-style: solid;
    border-bottom-color: #CDCDCD;
    transform: rotate(-0.19deg);
`

export const CategoriesContainer = styled.View`
    padding: 30px 0px 0px 20px;
`

export const TitleCategoriesContainer = styled.Text`
    margin-bottom: 15px;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`

export const ScrollCategoriesCard = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator : false,
})`
`

export const PopularFoodsContainer = styled.View`
    padding: 30px 0px 0px 20px;
`
export const TitlePopularFoodsContainer = styled.Text`
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`
export const ScrollPopularFoods = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator : false,
})`
`