import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
const loggedIn = {
  firstName: "Olinya",
  email: "olinyacpaul7849@gmail.com",
  lastName: "paul",
};

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={(loggedIn && loggedIn.firstName) || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={133}
            totalCurrentBalance={1250.65}
          />
        </header>
        rescent transaction
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ bank2: "ssss" }, { bank1: "sssss" }]}
      />
    </section>
  );
};

export default Home;
