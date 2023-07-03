export enum Sex {
  male,
  female,
}

export interface IGuineaPig {
  health: number;
  hunger: number;
  thirst: number;
  sleep: number;

  isSleeping: boolean;

  isHungry: boolean;
  isThirsty: boolean;
  isSleepy: boolean;
  isNeedHealing: boolean;

  age: number;
  sex: Sex;
};
