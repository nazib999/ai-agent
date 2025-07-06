import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import {Agent} from "@/types";

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function AgentCard({ agent }: { agent: Agent }) {
    return (
        <motion.div
            key={agent.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <Card className="w-full h-[260px] shadow-md transition-shadow">
                <CardHeader>
                    <CardTitle>{agent.name}</CardTitle>
                    <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Status: {agent.status}</p>
                    <p>Category: {agent.category}</p>
                </CardContent>
                <CardFooter>
                    <p>Pricing: {agent.pricingModel}</p>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
