import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import {
  createReferral,
  updateReferral,
  getReferrals,
  setReferral,
  removeTempReferral,
  deleteReferral,
} from "./slices/referralsSlice";
import ReferralForm from "./components/ReferralForm";
import Referral from "./types/Referral";

import ReferralList from "./components/ReferralList/ReferralList";

const defaultValues: Referral = {
  _id: "temp",
  givenName: "",
  surName: "",
  email: "",
  phone: "",
  homeName: "",
  street: "",
  suburb: "",
  state: "",
  postCode: "",
  country: "",
};

function App() {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.referrals
  );
  const dispatch = useDispatch<AppDispatch>();

  const [inputValues, setInputValues] = useState(defaultValues);

  useEffect(() => {
    dispatch(getReferrals());
  }, [dispatch]);

  const handleSubmit = async (
    data: Referral,
    reset: (data: Referral) => void
  ) => {
    if (data._id === "temp") {
      await dispatch(createReferral(data));
    } else {
      await dispatch(updateReferral(data));
    }
    reset(defaultValues);
  };

  const handleInputChange = (data: Referral) => {
    dispatch(setReferral(data));
  };

  const handleEditReferral = (data: Referral) => {
    setInputValues({
      ...defaultValues,
      ...data,
    });
    dispatch(removeTempReferral());
    dispatch(setReferral(data));
  };

  const handleDeleteReferral = (_id: string) => {
    dispatch(deleteReferral(_id));
    setInputValues(defaultValues);
  };

  return (
    <div className=" bg-gray-100">
      <div className="flex flex-col lg:flex-row h-screen">
        <aside className="bg-white w-full lg:w-1/3 p-10">
          <h1 className="text-3xl font-bold mb-4">Referral Builder</h1>
          <ReferralForm
            isLoading={isLoading}
            defaultValues={inputValues}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </aside>
        <main className="flex-1 p-10">
          <ReferralList
            referrals={data}
            onEdit={handleEditReferral}
            onDelete={handleDeleteReferral}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
