import React from 'react';

import './App.css'
import CommentPage from '@/components/templates/CommentPage';
import CommentsProvider from './components/containers/CommentsProvider';


const App = () => (
    <CommentsProvider>
        <CommentPage />
    </CommentsProvider>)

export default App;
