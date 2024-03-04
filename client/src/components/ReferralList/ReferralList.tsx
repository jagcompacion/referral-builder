import Referral from "@/types/Referral";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

type ReferralProps = {
  referrals: Referral[];
  onEdit: (data: Referral) => void;
  onDelete: (_id: string) => void;
};

const ReferralList = ({ referrals, onEdit, onDelete }: ReferralProps) => {
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
            <TableRow key={referral._id} className="text-gray-400">
              <TableCell className="font-medium">
                {referral.givenName}
              </TableCell>
              <TableCell>{referral.surName}</TableCell>
              <TableCell>{referral.email}</TableCell>
              <TableCell>{referral.phone}</TableCell>
              <TableCell className="text-center w-[120px]">
                <Button
                  variant="ghost"
                  className="mr-1"
                  size="icon"
                  onClick={() => onEdit(referral)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(referral._id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReferralList;
