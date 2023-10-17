import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api= createApi({
    reducerPath:'main',
    baseQuery:fetchBaseQuery({baseUrl: import.meta.env.VITE_LOCAL_ADDRESS}),
    tagTypes:[],
    endpoints:(build)=>({
        postAiText:build.mutation({
            query:(payload)=>({ 
                url:"openai/text",
                method:"POST",
                body: payload,
            })
        })
    })
})

export const {usePostAiTextMutation} = api;