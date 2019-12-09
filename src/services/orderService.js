import axios from 'axios';
import { handleError } from '../utils/mainUtils';

class orderService {
  static getItems(onSuccess) {
    axios
      .get('https://demo5544737.mockable.io/items')
      .then(onSuccess)
      .catch(handleError);
  }
}

export default orderService;
