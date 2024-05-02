import ReferralList from "./components/ReferralList";
import ReferralBuilder from "./components/ReferralBuilder";

function App() {
  return (
    <div className=" bg-gray-100">
      <div className="flex flex-col lg:flex-row h-screen">
        <aside className="bg-white w-full lg:w-1/3 p-10">
          <ReferralBuilder />
        </aside>
        <main className="flex-1 p-10">
          <ReferralList />
        </main>
      </div>
    </div>
  );
}

export default App;
