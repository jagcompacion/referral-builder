import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AppDispatch, RootState } from "@/store";
import { getReferrals } from "@/slices/referralsSlice";

import ReferralItem from "../ReferralItem";

const ReferralList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getReferrals());
  }, [dispatch]);

  const { data: referrals } = useSelector(
    (state: RootState) => state.referrals
  );

  return (
    <div className="p-6 rounded-md bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">GIVEN NAME</TableHead>
            <TableHead className="font-bold">SURNAME</TableHead>
            <TableHead className="font-bold">EMAIL</TableHead>
            <TableHead className="font-bold">PHONE</TableHead>
            <TableHead className="font-bold text-center">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {referrals.map((referral) => (
            <ReferralItem key={referral._id} referral={referral} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReferralList;
