import { useState } from 'react';

export default function useLoading() {
  const [isLoadingAction, setIsLoadingAction] = useState(false);
  const toggleLoading = (_loading) => setIsLoadingAction(_loading);
  return {
    isLoadingAction,
    toggleLoading
  };
}
