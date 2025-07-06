'use client';

import {  useEffect, useRef } from 'react';
import { Agent } from '@/types';
import AgentCard from './AgentCard';
import SearchBar, { SearchBarRef } from './SearchBar';
import FilterCard from './FilterCard';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { 
    setAllAgents, 

} from '@/lib/redux/slices/agentSlice';



const AgentList = ({ initialAgents }: {initialAgents:Agent[]}) => {
    const dispatch = useAppDispatch();
    const { filteredAgents } = useAppSelector(state => state.agent);
    const searchBarRef = useRef<SearchBarRef>(null);

    useEffect(() => {
        dispatch(setAllAgents(initialAgents));
    }, [dispatch, initialAgents]);



    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 sm:justify-between items-start">
                <div className="h-fit">
                    <FilterCard 

                    />
                </div>
                <div>
                    <SearchBar 
                        ref={searchBarRef}
                        agents={initialAgents} 
                    />
                </div>
            </div>

            {filteredAgents.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-lg">No agents found matching your search criteria.</p>
                </div>
            ) : (
                <div   className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                    {filteredAgents.map((agent) => (
                        <AgentCard 
                            key={agent.id} 
                            agent={agent} 

                        />
                    ))}
                </div>
            )}

            {filteredAgents.length > 0 && (
                <div className="text-center text-gray-500">
                    Showing {filteredAgents.length} of {initialAgents.length} agents
                </div>
            )}
        </div>
    );
};

export default AgentList;
