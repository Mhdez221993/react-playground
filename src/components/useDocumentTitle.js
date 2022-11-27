import { useEffect } from 'react';

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Title ${count}`
  }, [count])
};

export default useDocumentTitle
