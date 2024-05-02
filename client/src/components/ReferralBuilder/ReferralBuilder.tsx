import { useDispatch, useSelector } from "react-redux";
import {
  createReferral,
  updateReferral,
  setReferral,
  defaultReferralInput,
} from "@/slices/referralsSlice";
import { AppDispatch, RootState } from "@/store";
import ReferralForm from "@/components/ReferralForm";
import Referral from "@/types/Referral";

const ReferralBuilder = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { input, isLoading } = useSelector(
    (state: RootState) => state.referrals
  );

  const handleSubmit = async (
    data: Referral,
    reset: (data: Referral) => void
  ) => {
    if (data._id === "temp") {
      await dispatch(createReferral(data));
    } else {
      await dispatch(updateReferral(data));
    }
    reset(defaultReferralInput);
  };

  const handleInputChange = (data: Referral) => {
    dispatch(setReferral(data));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Referral Builder</h1>
      <ReferralForm
        isLoading={isLoading}
        defaultValues={input}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ReferralBuilder;
