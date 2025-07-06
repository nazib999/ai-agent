'use client';

import React, {useState} from 'react';
import { Agent } from '@/types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { 
    setStatusFilter, 
    setCategoryFilter, 
    setPricingFilter, 
    clearFilters,
    applyFilters
} from '@/lib/redux/slices/agentSlice';

const FilterCard = () => {
    const dispatch = useAppDispatch();
    const { statusFilter, categoryFilter, pricingFilter } = useAppSelector(state => state.agent);

    const [sortBy, setSortBy] = useState<string>('status');

    const handleSelect = (value: string) => {
        switch (value) {
            case 'status':

                setSortBy('status');
                break;
            case 'category':
                setSortBy('category');
                break;
            case 'pricing':
                console.log('User selected Pricing Model filter');
                setSortBy('pricing');
                break;
            default:
                console.log('Unknown selection');
        }
    };


    const statuses = ['Active', 'Beta', 'Archived'];
    const categories = [
        'Customer Service', 
        'Marketing', 
        'Development', 
        'Data Analysis', 
        'Operations', 
        'Human Resources', 
        'Finance', 
        'Legal'
    ];
    const pricingModels = ['Free Tier', 'Subscription', 'Per-Use'];

    const handleStatusChange = (status: string) => {
        if (statusFilter.includes(status)) {
            dispatch(setStatusFilter(statusFilter.filter(s => s !== status)));
        } else {
            dispatch(setStatusFilter([...statusFilter, status]));
        }
        dispatch(applyFilters());
    };

    const handleCategoryChange = (category: string) => {
        if (categoryFilter.includes(category)) {
            dispatch(setCategoryFilter(categoryFilter.filter(c => c !== category)));
        } else {
            dispatch(setCategoryFilter([...categoryFilter, category]));
        }
        dispatch(applyFilters());
    };

    const handlePricingModelChange = (pricingModel: string) => {
        if (pricingFilter === pricingModel) {
            dispatch(setPricingFilter(null));
        } else {
            dispatch(setPricingFilter(pricingModel));
        }
        dispatch(applyFilters());
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200 min-w-[300px] h-auto">
            <div className="flex justify-between items-center mb-4">
                <h3 className=" flex items-center gap-2 text-sm">
                    <p className={'font-medium text-gray-700'}>Sort By</p>
                    <Select onValueChange={handleSelect} >
                        <SelectTrigger className="w-[150px] cursor-pointer">
                            <SelectValue placeholder="Select filter" />
                        </SelectTrigger>
                        <SelectContent className={'cursor-pointer'}>
                            <SelectItem value="status" >Status</SelectItem>
                            <SelectItem value="category">Category</SelectItem>
                            <SelectItem value="pricing">Pricing Model </SelectItem>
                        </SelectContent>
                    </Select>
                </h3>
                <button 
                    onClick={() => dispatch(clearFilters())}
                    className="text-sm text-blue-600 hover:text-blue-800"
                >
                    Clear All
                </button>

            </div>

            {
                sortBy === 'status' && (
                    <div className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">Status</h4>
                        <div className="space-y-2">
                            {statuses.map(status => (
                                <div key={status} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`status-${status}`}
                                        checked={statusFilter.includes(status)}
                                        onChange={() => handleStatusChange(status)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor={`status-${status}`} className="ml-2 text-sm text-gray-700">
                                        {status}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }

            {
                sortBy === 'category' && (
                    <div className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">Category</h4>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                            {categories.map(category => (
                                <div key={category} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`category-${category}`}
                                        checked={categoryFilter.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }

            {
                sortBy === 'pricing' && (
                    <div>
                        <h4 className="font-medium text-gray-700 mb-2">Pricing Model</h4>
                        <div className="space-y-2">
                            {pricingModels.map(pricingModel => (
                                <div key={pricingModel} className="flex items-center">
                                    <input
                                        type="radio"
                                        id={`pricing-${pricingModel}`}
                                        checked={pricingFilter === pricingModel}
                                        onChange={() => handlePricingModelChange(pricingModel)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    <label htmlFor={`pricing-${pricingModel}`} className="ml-2 text-sm text-gray-700">
                                        {pricingModel}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FilterCard;
