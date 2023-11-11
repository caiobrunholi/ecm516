import {Ship} from './shipping';
import { Shipping } from './shipping';
// import Shipping = require('shipping');

var ns: Ship = new Ship();

var s = new Shipping.NewShip();

class AnotherShip implements Shipping.Ship{
    name: string = 'Another Ship';
    tons: number = 1500;
}
