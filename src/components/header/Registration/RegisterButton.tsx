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
      className=" bg-znanylekarz py-4 px-10 text-xl font-extrabold hover:bg-znanylekarzHover"
      custom={true}
      name="Umów się do nas "
      onClick={() => {
        modalStateSetter(!modalState);
      }}
    />
  );
};

export default RegisterButton;
