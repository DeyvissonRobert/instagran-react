import { AiOutlineHome } from 'react-icons/ai';
import { RiGlobalLine } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';
import { MdMonitor } from 'react-icons/md';
import { BsSun, BsGear } from 'react-icons/bs';
import { BiMoon, BiExit } from 'react-icons/bi';

import LogoInstagram from "../../assets/logo-instagram.svg";
import FotoPerfil from "../../assets/FOTO-PERFIL.jpeg";

import { Flex, Spacer, Typography } from "../../style";
import * as C from './style';

const menuNav = [
    {
        icon: <AiOutlineHome />,
        menuName: 'Inicio'
    },
    {
        icon: <RiGlobalLine />,
        menuName: 'Explorar'
    },
    {
        icon: <FiSend />,
        menuName: 'Direct'
    },
    {
        icon: <MdMonitor />,
        menuName: 'IGTV'
    },
    {
        icon: <BsGear />,
        menuName: 'Ajustes'
    },
]

export function NavBar({ themeToggler, theme }) {
    function GroupText({ title, subTitle }) {
        return (
            <Flex gap="4px">
                <Typography>{title}</Typography>
                <Typography weight="300" size="12px" height="14px">
                    {subTitle}
                </Typography>
            </Flex>
        );
    }

    return (
        <C.Container>
            <Flex>
                <C.BtnTheme onClick={themeToggler}>
                    {theme == 'light' ? <BiMoon /> : <BsSun />}
                </C.BtnTheme>
            </Flex>

            <img src={LogoInstagram} alt="Logo Instagram"></img>

            <Flex>
                <C.Profile>
                    <img src={FotoPerfil} alt="Foto de perfil" /*Trocar foto https://avatars.githubusercontent.com/u/152037577?v=4*/ />
                </C.Profile>

                <GroupText title="Deyvisson Robert" subTitle="@robert.cpz" />
            </Flex>

            <Spacer margin="8px" />

            <Flex direction="row" justfy="space-between">
                <GroupText title="148" subTitle="Publicação" />
                <GroupText title="15K" subTitle="Seguidores" />
                <GroupText title="1K" subTitle="Seguindo" />
            </Flex>

            <Spacer />

            <Flex align="start" gap="16px">
                {
                    menuNav.map((menu) => (
                        <C.ListIcon key={menu.menuName}>
                        {menu.icon}
                        <Typography>{menu.menuName}</Typography>
                        </C.ListIcon>
                    ))
                }
            </Flex>

            <Spacer />
            <C.Divider />
            <Spacer margin="8px" />

            <Flex align="start">
                        <C.ListIcon>
                            <BiExit />
                            <Typography>Sair</Typography>
                        </C.ListIcon>
            </Flex>

        </C.Container>
    );
}

