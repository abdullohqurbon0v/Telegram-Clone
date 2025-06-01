'use client'
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../_components/sidebar";

const MainPage = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className="flex h-screen">
            <nav className="bg-white shadow-md p-4 h-screen">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" ><Menu className="cursor-pointer" /></label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                        <div className="menu bg-base-200  min-h-full w-70 p-4">
                            <div className="avatar">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <Image src={'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'} alt="Avatar" width={50} height={50} />
                                </div>
                            </div>
                            <p className="mt-5 text-xl">Abdulloh Soft</p>
                            <ul>
                                <li className="flex  space-x-2 cursor-pointer">
                                    <p className="mt-2">My Profile</p>
                                </li>
                                <li className="flex space-x-2 cursor-pointer">
                                    <p className="mt-2">Chats</p>
                                </li>
                                <li className="flex space-x-2 cursor-pointer">
                                    <p className="mt-2">Contacts</p>
                                </li>
                                <li className="flex space-x-2 cursor-pointer">
                                    <p className="mt-2">Settings</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <aside>
                <Sidebar />
            </aside>
            <main>

            </main>
        </div>
    )
}

export default MainPage
