// types/agent.ts
export type Agent = {
    id: string;
    name: string;
    description: string;
    status: 'Active' | 'Beta' | 'Archived';
    category:
        | 'Customer Service'
        | 'Marketing'
        | 'Development'
        | 'Data Analysis'
        | 'Operations'
        | 'Human Resources'
        | 'Finance'
        | 'Legal';
    pricingModel: 'Free Tier' | 'Subscription' | 'Per-Use';
    // Optional animation key for Framer Motion animations
    animationKey?: string;
};
