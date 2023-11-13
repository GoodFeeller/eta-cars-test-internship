import { intervalType } from '../hooks/useHistory'
import { ICoin } from '../types/ICoin'
import { IHistory } from '../types/IHistory'
import trpc from './appRouter'

const CoinInfoService = {
  getHistory: async function (
    id: string,
    interval: intervalType,
  ): Promise<IHistory[]> {
    try {
      const response: IHistory[] = await trpc.history.getHistory.query({
        id: id,
        interval: interval,
      })
      return response
    } catch (err) {
      throw new Error('Not found')
    }
  },
}
export default CoinInfoService
