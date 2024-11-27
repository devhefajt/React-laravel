import React from "react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import CustomButton from "@/Components/Custom";

const Dashboard = () => {
    return (
        <SidebarLayout>
            <h1>Dashboard</h1>
            
            <CustomButton className="ms-4">
                        Register
            </CustomButton>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                illum ea rerum voluptatum quos eos. Iste, architecto, assumenda
                amet eaque repellendus recusandae natus, error incidunt in porro
                non optio quia?
            </p>
        </SidebarLayout>
    );
};

export default Dashboard;
