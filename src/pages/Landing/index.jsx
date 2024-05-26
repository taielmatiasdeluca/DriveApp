import "./landing.css";
import { Input } from "antd";
import { FaRegUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
export const Landing = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/panel");
  };

  return (
    <main className="p-2 bg-primary w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" bg-slate-300 px-2 lg:px-10 py-5 grid gap-3  rounded w-screen lg:w-2/6"
      >
        <h1 className="text-4xl text-primary font-bold text-center py-5">
          DriveApp
        </h1>

        <Input size="large" prefix={<FaRegUser />} placeholder="Usuario" />
        <Input.Password
          size="large"
          placeholder="Contraseña"
          prefix={<RiLockPasswordFill />}
          iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
        />

        <Button htmlType="password" size="large" type="primary">
          Iniciar Sesion
        </Button>

        <a
          href="Recovery"
          className=" text-primary opacity-60 hover:opacity-100"
        >
          Olvide mi contraseña
        </a>
        <a
          href="/register"
          className=" text-primary opacity-60 hover:opacity-100"
        >
          !Quiero una cuenta¡
        </a>
      </form>
    </main>
  );
};
