import { useEffect } from 'react';
export function useMyConsoleLogger (data) {
    useEffect(() => {
      console.log('Data:', data);
    },[data]);
  }


  

