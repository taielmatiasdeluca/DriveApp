import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { CiFileOn } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdFolderShared } from "react-icons/md";
import { MdOutlineFolderShared } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdLogout } from "react-icons/md";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    key: "archivos",
    label: "Archivos",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Mis Archivos",
        type: "group",
        children: [
          {
            key: "files",
            icon: <CiFileOn />,
            label: "Mis archivos",
          },
          {
            key: "update",
            icon: <MdOutlineFileUpload />,
            label: "Nuevo archivo",
          },
        ],
      },
      {
        key: "g2",
        label: "Compartidos",
        type: "group",
        children: [
          {
            key: "myshared",
            icon: <MdFolderShared />,
            label: "Tu compartes",
          },
          {
            key: "shared",
            icon: <MdOutlineFolderShared />,
            label: "Compartidos a ti",
          },
        ],
      },
    ],
  },
  {
    key: "config",
    label: "Configuracion",
    icon: <SettingOutlined />,
    children: [
      {
        key: "profile",
        icon: <CgProfile />,
        label: "Perfil",
      },
      {
        key: "parameters",
        icon: <HiAdjustmentsHorizontal />,
        label: "Parametros",
      },
      {
        key: "confirm",
        icon: <MdOutlineManageAccounts />,
        label: "Confirmacion de cuentas",
      },
    ],
  },
  {
    key: "logout",
    label: "Cerrar Sesion",
    danger: true,
    icon: <MdLogout />,
  },
];
const Sidemenu = ({ section }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key) {
      navigate(`/panel/${e.key}`);
    }
  };
  return (
    <div className="flex flex-col bg-white w-max h-screen shadow-2xl">
      <h1 className="text-4xl text-primary font-bold text-center py-5">
        DriveApp
      </h1>
      <Menu
        onClick={onClick}
        className=""
        style={{
          width: 256,
        }}
        defaultOpenKeys={["archivos"]}
        defaultSelectedKeys={section || "files"}
        mode="inline"
        items={items}
      />
    </div>
  );
};
export default Sidemenu;
