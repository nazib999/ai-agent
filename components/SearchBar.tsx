'use client';

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Agent } from '@/types';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setSearchQuery, applyFilters } from '@/lib/redux/slices/agentSlice';

interface SearchBarProps {
    agents: Agent[];
}

export interface SearchBarRef {
    resetSearch: () => void;
}

const SearchBar = forwardRef<SearchBarRef, SearchBarProps>((_, ref) => {
    const dispatch = useAppDispatch();
    const [localSearchQuery, setLocalSearchQuery] = useState('');

    // Expose the resetSearch method to parent components
    useImperativeHandle(ref, () => ({
        resetSearch: () => {
            setLocalSearchQuery('');
            dispatch(setSearchQuery(''));
            dispatch(applyFilters());
        }
    }));

    useEffect(() => {

        dispatch(setSearchQuery(localSearchQuery));
        dispatch(applyFilters());
    }, [localSearchQuery, dispatch]);

    return (
        <div className="relative">
            <div className="flex items-center">
                <svg 
                    className="absolute left-3 w-5 h-5 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
                <input
                    type="text"
                    placeholder="Search by name or description..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
