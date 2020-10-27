import { Button, Flex } from '@chakra-ui/core';
import { Context, DISPLAY_INDEX_ACTIONS } from '../context/Store';

import { useContext } from 'react';

const Navigation = () => {
  const { cats, displayIndex, setIndexDispatch } = useContext(Context);
  const handlePrev = () => {
    if (displayIndex !== 0) {
      setIndexDispatch({ type: DISPLAY_INDEX_ACTIONS.SET_INDEX, payload: displayIndex - 1 });
    }
  };
  const handleNext = () => {
    if (cats.length > displayIndex) {
      setIndexDispatch({ type: DISPLAY_INDEX_ACTIONS.SET_INDEX, payload: displayIndex + 1 });
    }
  };
  return (
    <Flex justifyContent={'space-between'} marginTop={6}>
      <Button disabled={displayIndex === 0} onClick={handlePrev} variantColor={'blue'}>
        Prev
      </Button>
      <Button disabled={cats.length === displayIndex + 1} onClick={handleNext} variantColor={'blue'}>
        Next
      </Button>
    </Flex>
  );
};

export default Navigation;
