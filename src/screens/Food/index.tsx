import React from 'react';

import {
    Container,
    ContainerIcons,
    IconBack,
    IconFavorite,
    ContainerFood,
    Name,
    Price,
    AboutFood,
    InformationContainer,
    Info,
    AnswerInfo,
    ImageFood,
    Ingredients,
    Title,
    ImageIngredients,
    OrderButton,
    TextButton,
    IconButton
} from './styles';

import { IngredientsCards } from '../../components/IngredientsCards';

import Pizza from '../../images/pizza1/pizza1.png';
import Ham from '../../images/ham/ham.png';
import Tomato from '../../images/tomato/tomato.png';
import Garlic from '../../images/garlic/garlic.png';

export function Food(){
    return (
        <Container>
            <ContainerIcons>
                <IconBack name="chevron-left"/>
                <IconFavorite name="star"/>
            </ContainerIcons>
            <ContainerFood>
                <Name>
                    Primavera{'\n'}
                    Pizza
                </Name>
                <Price>$5.99</Price>
            </ContainerFood>
            <AboutFood>
                <InformationContainer>
                    <Info>Size</Info>
                    <AnswerInfo>Medium 14"</AnswerInfo>
                    <Info>Crust</Info>
                    <AnswerInfo>Thin Crust</AnswerInfo>
                    <Info>Delivery in</Info>
                    <AnswerInfo>30 min</AnswerInfo>
                </InformationContainer>
                
                <ImageFood 
                    source={Pizza}
                />
            </AboutFood>
            <Ingredients>
                <Title>Ingredients</Title>
                <ImageIngredients>
                    <IngredientsCards 
                        icon={Ham}
                    />
                    <IngredientsCards 
                        icon={Tomato}
                    />
                    <IngredientsCards 
                        icon={Garlic}
                    />
                </ImageIngredients>
            </Ingredients>
            <OrderButton>
                <TextButton>Place an order</TextButton>
                <IconButton name="chevron-right"/>
            </OrderButton>
        </Container>
    )
}