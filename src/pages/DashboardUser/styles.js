import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height)

const marginTop = screenHeight - 700;
let margin = screenWidth - 360;

screenWidth < 400 ? margin = screenWidth -340 : margin = 20

const theme = {
    margin: margin,
    marginTop: marginTop
}

export const Container = styled.View`
    flex:1;
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    /* margin-right: 20px; */
`;
export const Descriptions = styled.View`
    margin-left: 10px;
    flex-direction:column;
`;
export const DescriptionName = styled.Text`
    font-size: 30px;
`;
export const DescriptionLocation = styled.Text`
    font-size: 15px;
`;

export const Avatar = styled.Image`
    flex-direction: column;
    margin-right: 10px;
    width: 60px;
    height: 60px;    
    border-width: 2px;
    border-color: black;
    border-radius: 30px;
`;