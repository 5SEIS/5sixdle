import {
    ChartBarIcon,
    CogIcon,
    InformationCircleIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'
import logo from "../../5seis_logo.png"


type Props = {
    setIsInfoModalOpen: (value: boolean) => void
    setIsStatsModalOpen: (value: boolean) => void
    setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
    setIsInfoModalOpen,
    setIsStatsModalOpen,
    setIsSettingsModalOpen,
}: Props) => {

    return (
        <div className="navbar">
            <div className="px-5 navbar-content">
                <div className="flex">
                    <InformationCircleIcon
                        className="w-6 h-6 mr-2 cursor-pointer dark:stroke-white"
                        onClick={() => setIsInfoModalOpen(true)}
                    />
                    <ChartBarIcon
                        className="w-6 h-6 mr-3 cursor-pointer dark:stroke-white"
                        onClick={() => setIsStatsModalOpen(true)}
                    />
                </div>
                <p className="absolute items-center hidden text-xl font-bold sm:flex ml-center dark:text-white gap-2">
                    <img src={logo} alt="5SEIS" style={{ aspectRatio: "460/169" }} width="50px" />
                    <span>{GAME_TITLE}</span>
                </p>
                <CogIcon
                    className="w-6 h-6 mr-3 cursor-pointer dark:stroke-white"
                    onClick={() => setIsSettingsModalOpen(true)}
                />
            </div>
            <hr></hr>
        </div>
    )
}
