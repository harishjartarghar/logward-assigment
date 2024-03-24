import { useContext } from 'react';

import CommentsContext from '@/context/CommentsContext';


const useComments = () => useContext(CommentsContext);

export default useComments;

