import { AspectRatioBox, Box, Button, Image, Stack, Text } from '@chakra-ui/core';
import { CATS_ACTIONS, Context, DISPLAY_INDEX_ACTIONS } from '../context/Store';
import { useContext, useEffect, useState } from 'react';

import axios from 'axios';

const CatCard = () => {
  const { cats, catsDispatch, displayIndex, setIndexDispatch } = useContext(Context);
  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search').then((res) => {
      catsDispatch({ type: CATS_ACTIONS.SET_CAT, payload: res.data });
    });
  }, []);

  const handleFetch = () => {
    axios.get('https://api.thecatapi.com/v1/images/search').then((res) => {
      catsDispatch({ type: CATS_ACTIONS.SET_CAT, payload: res.data });
      if (displayIndex === cats.length - 1) {
        setIndexDispatch({ type: DISPLAY_INDEX_ACTIONS.SET_INDEX, payload: displayIndex + 1 });
      }
    });
  };
  return (
    <Box>
      {cats.length > 0 && cats[displayIndex] && (
        <Stack rounded={6} bg={'white'}>
          <AspectRatioBox maxW='560px' ratio={16 / 9} overflow={'hidden'}>
            <Box overflow={'hidden'}>
              <Image src={cats[displayIndex].url} roundedTop={6} width={'100%'} />
            </Box>
          </AspectRatioBox>
          <Stack p={6} spacing={4}>
            <Text>Breed: {cats[displayIndex]?.breeds[0] || 'NA'}</Text>
            <Text>Life Span: {cats[displayIndex].life_span || 'NA'}</Text>
            <Text>URL: {cats[displayIndex].url || 'NA'}</Text>
            <Button onClick={handleFetch} variantColor={'blue'}>
              Fetch New Cat
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default CatCard;
