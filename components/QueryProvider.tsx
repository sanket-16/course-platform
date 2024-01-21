"use client";

import * as React from "react";
import {
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';

const queryClient = new QueryClient()
function QueryProvider( {children}:{children : React.ReactNode}) {
  return(
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
}
export default QueryProvider;