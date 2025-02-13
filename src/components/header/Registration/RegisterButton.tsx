import { Dispatch } from "react";
import Button from "../../button/Button";

type RegisterButtonProps = {
  modalState: boolean;
  modalStateSetter: Dispatch<boolean>;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({
  modalState,
  modalStateSetter,
}) => {
  return (
    <Button
      className=" bg-znanylekarz mobile-xs:py-2 mobile-xs:px-2 mobile-xs:w-1/4 mobile-xs:text-xs mobile:text-xs mobile:py-2 mobile:px-2 mobile:w-1/4 hamburger:py-2 hamburger:px-2 hamburger:w-1/4 py-4 px-10 hamburger:text-base text-xl font-extrabold hover:bg-znanylekarzHover"
      custom={true}
      name="Umów się do nas "
      onClick={() => {
        modalStateSetter(!modalState);
      }}
    />
  );
};

export default RegisterButton;
