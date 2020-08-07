import axios from 'axios';
import { from } from 'rxjs';

const API = 'https://5f28d082a1b6bf0016eacae3.mockapi.io';

export default class ApiService {
  static getTodos = () =>
    from(
      axios.get(`${API}/todos`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
}
