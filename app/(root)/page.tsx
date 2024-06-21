import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={(loggedIn && loggedIn.name) || "Guest"}
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
