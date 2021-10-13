import React from 'react';

import { Text } from 'react-native';

import Pizza from '../../icons/pizza/pizza.png';
import Seafood from '../../icons/shrimp/shrimp.png';
import SoftDrinks from '../../icons/soda/soda.png';

import {
    Container,
    Header,
    PhotoUser,
    ButtonOption,
    IconButtonOption,
    SearchContainer,
    ApplicationInfo,
    TitleApplication,
    SubtitleApplication,
    SearchInput,
    IconSearch,
    InputSearch,
    CategoriesContainer,
    TitleCategoriesContainer,
    ScrollCategoriesCard,
    PopularFoodsContainer,
    TitlePopularFoodsContainer,
    ScrollPopularFoods
} from './styles';

import { CategoriesCards } from '../../components/CategoriesCards';
import { PopularCards } from '../../components/PopularCards';

export function Home(){
    return (
        <Container>
            <Header>
                <PhotoUser
                    source={{ uri: 'https://avatars.githubusercontent.com/u/37945750?v=4'}}
                >
                </PhotoUser>
                <ButtonOption>
                    <IconButtonOption name="align-right"/>
                </ButtonOption>
            </Header>

            <ApplicationInfo>
                <TitleApplication>
                    Food
                </TitleApplication>
                <SubtitleApplication>
                    Delivery
                </SubtitleApplication>
            </ApplicationInfo>

            <SearchContainer>
                <SearchInput>
                    <IconSearch  name="search"/>
                    <InputSearch></InputSearch>
                </SearchInput>
            </SearchContainer>

            <CategoriesContainer>
                <TitleCategoriesContainer>Categories</TitleCategoriesContainer>
                <ScrollCategoriesCard>
                    <CategoriesCards
                        icon={Pizza}
                        name="Pizza"
                        color="yellow"
                    />
                    <CategoriesCards
                        icon={Seafood}
                        name="Seafood"
                        color="white"
                    />
                    <CategoriesCards
                        icon={SoftDrinks}
                        name="Soft Drinks"
                        color="white"
                    />
                </ScrollCategoriesCard>
            </CategoriesContainer>

            <PopularFoodsContainer>
                <TitlePopularFoodsContainer>Popular</TitlePopularFoodsContainer>
                <ScrollPopularFoods>
                    <PopularCards />
                </ScrollPopularFoods>
            </PopularFoodsContainer>
        </Container>
    )
}