import Axios from 'axios';
import getUrl from '../../app.utils';

export class TabsRepository {
  circuitId: number | null = null;
  circuitUrl: string | null = null;

  constructor(circuitId: number | 0) {
    this.circuitId = circuitId;
    this.circuitUrl = getUrl(`/circuits/${this.circuitId}`);
  }

  async dataOverview() {
    const queryQl = {};
    const overview = await Axios.get(this.circuitUrl);
    return overview;
  }

  async dataItineraire() {
    return {};
  }

  async dataParticipation() {
    return {};
  }

  async dataPolitique() {
    return {};
  }
}
