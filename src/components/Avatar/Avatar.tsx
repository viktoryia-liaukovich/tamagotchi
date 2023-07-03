import { useContext } from 'react';
import './Avatar.scss';
import { GuineaPigContext } from '../../contexts';
import pigImg from '../../assets/test_pig.png';

export default function Avatar() {
  const guineaPig = useContext(GuineaPigContext);

  return <div className='avatar'>
    Health: {guineaPig?.health}
    Age: {guineaPig?.age}
    Sex: {guineaPig?.sex}
    Hunger: {guineaPig?.hunger}
    Thirst: {guineaPig?.thirst}
    Sleep: {guineaPig?.sleep}
    Is sleeping: {guineaPig?.isSleeping.toString()}
    Is hungry: {guineaPig?.isHungry.toString()}
    Is thirsty: {guineaPig?.isThirsty.toString()}
    Is sleepy: {guineaPig?.isSleepy.toString()}
    Is need healing: {guineaPig?.isNeedHealing.toString()}
    <img src={pigImg} />
  </div>;
};
