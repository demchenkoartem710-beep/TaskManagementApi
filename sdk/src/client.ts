import createClient from "openapi-fetch";
import type { paths } from "../generated/schema";

export const apiClient = createClient<paths>({
  baseUrl: "https://api.example.com/v1",
});

export function setAccessToken(token: string): void {
  apiClient.use({
    onRequest({ request }) {
      request.headers.set("Authorization", `Bearer ${token}`);
      return request;
    },
  });
}