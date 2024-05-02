import Referral from "@/types/Referral";
import { useDispatch } from "react-redux";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { AppDispatch } from "@/store";
import {
  deleteReferral,
  removeTempReferral,
  setReferralInput,
  defaultReferralInput,
  setReferral,
} from "../../slices/referralsSlice";

type ReferralItemProps = {
  referral: Referral;
};

const ReferralItem = ({ referral }: ReferralItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleEditReferral = (referral: Referral) => {
    dispatch(
      setReferralInput({
        ...defaultReferralInput,
        ...referral,
      })
    );
    dispatch(removeTempReferral());
    dispatch(setReferral(referral));
  };

  const handleDeleteReferral = (_id: string) => {
    dispatch(deleteReferral(_id));
  };

  return (
    <TableRow className="text-gray-400">
      <TableCell className="font-medium">{referral.givenName}</TableCell>
      <TableCell>{referral.surName}</TableCell>
      <TableCell>{referral.email}</TableCell>
      <TableCell>{referral.phone}</TableCell>
      <TableCell className="text-center w-[120px]">
        <Button
          variant="ghost"
          className="mr-1"
          size="icon"
          onClick={() => handleEditReferral(referral)}
        >
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleDeleteReferral(referral._id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ReferralItem;
