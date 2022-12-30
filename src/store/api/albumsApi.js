import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    fetchAlbums: builder.query({
      providesTags: ["Albums"],
      query: (user) => {
        return {
          url: "/albums",
          method: "GET",
          params: {
            userId: user.id,
          },
        };
      },
    }),
    addAlbum: builder.mutation({
      invalidatesTags: ["Albums"],
      query: (user) => {
        return {
          url: "/albums",
          method: "POST",
          body: {
            userId: user.id,
            title: faker.commerce.productName(),
          },
        };
      },
    }),
  }),
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export default albumsApi;
