import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Referral from "@/types/Referral";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import validationSchema from "./validationSchema";
import { useEffect } from "react";

type ReferralFormProps = {
  isLoading: boolean;
  defaultValues: Referral;
  onSubmit: (data: Referral, reset: (data: Referral) => void) => void;
  onInputChange: (data: Referral) => void;
};

const ReferralForm: React.FC<ReferralFormProps> = ({
  isLoading,
  defaultValues,
  onInputChange,
  onSubmit,
}) => {
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  const handleInputChange = () => {
    onInputChange(getValues());
  };

  const onSubmitHandler = (data: Referral) => {
    onSubmit(data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="mb-8">
        <div className="text-gray-500 border-gray-300 border-b mb-4 font-bold text-sm pb-2">
          PERSONAL DETAILS
        </div>
        <Input type="hidden" {...register("_id")} />
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-400 text-xs">GIVEN NAME</label>
            <Input
              type="text"
              {...register("givenName", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.givenName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.givenName.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">SURNAME</label>
            <Input
              type="text"
              {...register("surName", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.surName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.surName.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">EMAIL</label>
            <Input
              type="text"
              {...register("email", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">PHONE</label>
            <Input
              type="text"
              {...register("phone", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="text-gray-500 border-gray-300 border-b mb-4 font-bold text-sm pb-2">
          ADDRESS
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-400 text-xs">HOME NAME OR #</label>
            <Input
              type="text"
              {...register("homeName", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.homeName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.homeName.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">STREET</label>
            <Input
              type="text"
              {...register("street", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.street && (
              <p className="text-red-400 text-xs mt-1">
                {errors.street.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">SUBURB</label>
            <Input
              type="text"
              {...register("suburb", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.suburb && (
              <p className="text-red-400 text-xs mt-1">
                {errors.suburb.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">STATE</label>
            <Input
              type="text"
              {...register("state", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.state && (
              <p className="text-red-400 text-xs mt-1">
                {errors.state.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">POSTCODE</label>
            <Input
              type="text"
              {...register("postCode", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.postCode && (
              <p className="text-red-400 text-xs mt-1">
                {errors.postCode.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">COUNTRY</label>
            <Input
              type="text"
              {...register("country", {
                onChange: () => handleInputChange(),
              })}
            />
            {errors.country && (
              <p className="text-red-400 text-xs mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <Button
        className="w-full h-14"
        variant="success"
        size="lg"
        type="submit"
        disabled={isLoading}
      >
        CREATE REFERRAL
      </Button>
    </form>
  );
};

export default ReferralForm;
