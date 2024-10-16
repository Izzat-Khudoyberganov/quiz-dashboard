import { Header, Layout, Sidebar } from "@/components";

const Dashboard = () => {
    return (
        <>
            <Header />
            <main className='flex '>
                <Sidebar />
                <div className='w-full  m-5 border-[1px] border-slate-800 rounded-lg'>
                    <Layout />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
