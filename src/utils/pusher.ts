import Pusher from "pusher-js";
import { env } from "~/env.mjs";

export const pusher = new Pusher(env.NEXT_PUBLIC_PUSHER_KEY, {
  cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
  authEndpoint: "/api/auth",
  auth: {
    params: {
      user_name: "idk",
    },
  },
  forceTLS: true,
});
