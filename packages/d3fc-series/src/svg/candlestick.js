import ohlcBase from './ohlcBase';
import { shapeCandlestick } from 'd3fc-shape';

export default () => ohlcBase(shapeCandlestick(), 'candlestick');
