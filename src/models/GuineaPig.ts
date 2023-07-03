import { IGuineaPig, Sex } from '../types';


export class GuineaPig implements IGuineaPig {
  health = 100;
  hunger = 0;
  thirst = 0;
  sleep = 100;

  isSleeping = false;

  isHungry = false;
  isThirsty = false;
  isSleepy = false;
  isNeedHealing = false;

  age = 0;
  sex = Sex.male;

  constructor({ sex }: Pick<IGuineaPig, 'sex'>) {
    this.sex = sex;
  }
}
