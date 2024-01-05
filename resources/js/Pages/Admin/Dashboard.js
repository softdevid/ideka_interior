import Main from "@/Layouts/Admin/Main";

const Dashboard = ({ title }) => {
    return (
        <>
            <h1 className="text-xl">{title}</h1>
            <div className="grid grid-cols-4 gap-2">
                <div className="p-2 border">lorem</div>
                <div className="p-2 border">lorem</div>
                <div className="p-2 border">lorem</div>
                <div className="p-2 border">lorem</div>
            </div>
        </>
    );
};

Dashboard.layout = (page) => <Main children={page} />;
export default Dashboard;
