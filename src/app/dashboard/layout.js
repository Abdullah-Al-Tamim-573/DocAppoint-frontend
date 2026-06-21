import DashboardTabsNavigation from "@/Components/Shered/Dashboard Tabs Navigation/DashboardTabsNavigation";



const DashboardPage = ({children}) => {
    return (
        <>
         <DashboardTabsNavigation></DashboardTabsNavigation>

         <div className="max-w-[85%] mx-auto">
              {children}
         </div>
         
          
        </>
    );
};

export default DashboardPage;