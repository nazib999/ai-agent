import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Agent } from "@/types";

interface AgentState {
    allAgents: Agent[];
    filteredAgents: Agent[];
    statusFilter: string[];
    categoryFilter: string[];
    pricingFilter: string | null;
    searchQuery: string;
}

const initialState: AgentState = {
    allAgents: [],
    filteredAgents: [],
    statusFilter: [],
    categoryFilter: [],
    pricingFilter: null,
    searchQuery: '',
};

const agentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {
        setAllAgents: (state, action: PayloadAction<Agent[]>) => {
            state.allAgents = action.payload;
            state.filteredAgents = action.payload;
        },
        setStatusFilter: (state, action: PayloadAction<string[]>) => {
            state.statusFilter = action.payload;
        },
        setCategoryFilter: (state, action: PayloadAction<string[]>) => {
            state.categoryFilter = action.payload;
        },
        setPricingFilter: (state, action: PayloadAction<string | null>) => {
            state.pricingFilter = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        clearFilters: (state) => {
            state.statusFilter = [];
            state.categoryFilter = [];
            state.pricingFilter = null;
            state.searchQuery = '';
            state.filteredAgents = state.allAgents;
        },
        applyFilters: (state) => {
            let result = [...state.allAgents];

            // Apply search filter
            if (state.searchQuery) {
                const query = state.searchQuery.toLowerCase();
                result = result.filter(agent => 
                    agent.name.toLowerCase().includes(query) || 
                    agent.description.toLowerCase().includes(query)
                );
            }

            // Apply status filter
            if (state.statusFilter.length > 0) {
                result = result.filter(agent => state.statusFilter.includes(agent.status));
            }

            // Apply category filter
            if (state.categoryFilter.length > 0) {
                result = result.filter(agent => state.categoryFilter.includes(agent.category));
            }

            // Apply pricing model filter
            if (state.pricingFilter) {
                result = result.filter(agent => agent.pricingModel === state.pricingFilter);
            }

            state.filteredAgents = result;
        }
    }
});

export const { 
    setAllAgents,
    setStatusFilter, 
    setCategoryFilter, 
    setPricingFilter, 
    setSearchQuery, 
    clearFilters,
    applyFilters
} = agentSlice.actions;

export default agentSlice.reducer;
