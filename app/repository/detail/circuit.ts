import Axios from 'axios';
import getUrl from '../../app.utils';

export class CircuitRepository {
  circuitId: number | null = null;
  circuitUrl: string | null = null;

  constructor(circuitId: number | 0) {
    this.circuitId = circuitId;
    this.circuitUrl = getUrl(`/circuits/${this.circuitId}`);
  }

  async overview() {
    const queryQl = {};
    const overview = await Axios.get(this.circuitUrl);
    return overview;
  }

  async itineraire() {
    return {};
  }

  async participation() {
    return {};
  }

  async politique() {
    return {};
  }

  async tourInfo() {}
}
