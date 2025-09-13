import CounterModel from '../models/CounterModel';

class CounterViewModel {
  constructor() {
    this.model = new CounterModel();
  }
  
  get count() {
    return this.model.count;
  }
  
  handleIncrement = () => {
    this.model.increment();
  }
  
  handleDecrement = () => {
    this.model.decrement();
  }
  
  handleReset = () => {
    this.model.reset();
  }
}

export default CounterViewModel;