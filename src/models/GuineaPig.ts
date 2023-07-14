import { IGuineaPig, Sex } from '../types';


export class GuineaPig implements IGuineaPig {
  private _health = 0;
  private _hunger = 0;
  private _thirst = 0;
  private _sleep = 0;

  isSleeping = false;

  isHungry = false;
  isThirsty = false;
  isSleepy = false;
  isNeedHealing = false;

  age = 0;
  sex = Sex.male;

  constructor({ sex }: Pick<IGuineaPig, 'sex'>) {
    this.sex = sex;
    this.health = JSON.parse(localStorage.getItem('pig_health') || '100');
  }

  set health(newHealth: number) {
    this._health = newHealth;
    localStorage.setItem('pig_health', JSON.stringify({ date: new Date(), value: newHealth }));
  }

  set hunger(newHunger: number) {
    this._hunger = newHunger;
    localStorage.setItem('pig_hunger', JSON.stringify({ date: new Date(), value: newHunger }));

  }

  set thirst(newThirst: number) {
    this._thirst = newThirst;
    localStorage.setItem('pig_thirst', JSON.stringify({ date: new Date(), value: newThirst }));

  }

  set sleep(newSleep: number) {
    this._sleep = newSleep;
    localStorage.setItem('pig_sleep', JSON.stringify({ date: new Date(), value: newSleep }));

  }

  get health() {
    return this._health;
  }

  get hunger() {
    return this._hunger;
  }

  get thirst() {
    return this._thirst;
  }

  get sleep() {
    return this._sleep;
  }
}
