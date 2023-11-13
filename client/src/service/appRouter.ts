import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { appRouterType } from '../../../server/src/appRouter'
const trpc = createTRPCProxyClient<appRouterType>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
})

export default trpc
