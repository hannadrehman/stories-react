import { Fragment } from 'react';
import { Left, Right } from './Actions.styled';

interface IActionsProps {
  onNextClick: () => void;
  onPrevClick: () => void;
  onPause: () => void;
}

export function Actions({ onNextClick, onPrevClick, onPause }: IActionsProps) {
  console.log({ onNextClick, onPause, onPrevClick });
  return (
    <Fragment>
      <Left />
      <Right />
    </Fragment>
  );
}
