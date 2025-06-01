import Image from "next/image";
import React from "react";

const Sidebar = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const data = [
        {
            chat_id: 1,
            user: {
                id: 1,
                name: "John Doe",
                avatar: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
            },
            lastMessage: "Hello, how are you?",
            createdAt: "2023-10-01T12:00:00Z",
            unreadCount: 2,
        },
    ];

    const filteredData = data.filter((chat) =>
        chat.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-80 h-screen bg-gray-100 border-r border-gray-300 overflow-y-auto">
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {filteredData.map((chat) => (
                <div
                    key={chat.chat_id}
                    className="flex items-center p-4 hover:bg-gray-200 cursor-pointer"
                >
                    <div className="avatar avatar-online ">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                                src={chat.user.avatar}
                                alt={chat.user.name}
                                width={48}
                                height={48}
                            />
                        </div>
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-gray-800">
                                {chat.user.name}
                            </h3>
                            <span className="text-xs text-gray-500">
                                {new Date(chat.createdAt).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 truncate w-48">
                                {chat.lastMessage}
                            </p>
                            {chat.unreadCount > 0 && (
                                <span className="ml-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {chat.unreadCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

