import { useState} from 'react';
export function useMyStatus(initialStatus) {
    const [status, setStatus] = useState(initialStatus);
  
    const updateStatus = (newStatus) => {
      setStatus(newStatus);
    };
  
    return [status, updateStatus];
  }
