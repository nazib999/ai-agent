
import AgentList from "@/components/AgentList";
import { getAllAgents } from "@/lib/actions/Agent.action";
import { Agent } from "@/types";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";


async function Page() {

    const agents: Agent[] = await getAllAgents();

    return (
        <main className={'min-h-screen w-full'}>
            <header className={'bg-blue-400'}>
                <div className={'container'}>
                    <div className={'py-5 px-3 flex justify-between items-center '}>
                        <Link href="/">

                            <h1 className={'text-2xl text-white uppercase'}>Ai Agent</h1>
                        </Link>
                        <AuthButton/>
                    </div>
                </div>
            </header>

            <div className={'container'}>
                <h2 className={'font-bold text-center my-5 text-3xl'}>Explore Ai Agent</h2>

                <AgentList initialAgents={agents} />
            </div>
        </main>
    );
}

export default Page;
