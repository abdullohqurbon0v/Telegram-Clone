
const Sidebar = () => {
    const data = [
        {
            chat_id: 1,
            user: {
                id: 1,
                name: "John Doe",
                avatar: "https://example.com/avatar1.jpg"
            },
            lastMessage: "Hello, how are you?",
            createdAt: "2023-10-01T12:00:00Z",
            unreadCount: 2,
        },
        {
            chat_id: 2,
            user: {
                id: 2,
                name: "Jane Smith",
                avatar: "https://example.com/avatar2.jpg"
            },
            lastMessage: "Let's meet tomorrow.",
            createdAt: "2023-10-02T09:30:00Z",
            unreadCount: 0,
        },
        {
            chat_id: 3,
            user: {
                id: 3,
                name: "Michael Johnson",
                avatar: "https://example.com/avatar3.jpg"
            },
            lastMessage: "Got the documents, thanks!",
            createdAt: "2023-10-03T15:45:00Z",
            unreadCount: 5,
        },
        {
            chat_id: 4,
            user: {
                id: 4,
                name: "Emily Davis",
                avatar: "https://example.com/avatar4.jpg"
            },
            lastMessage: "Call me when you're free.",
            createdAt: "2023-10-04T18:20:00Z",
            unreadCount: 1,
        },
        {
            chat_id: 5,
            user: {
                id: 5,
                name: "Chris Lee",
                avatar: "https://example.com/avatar5.jpg"
            },
            lastMessage: "Sent the email just now.",
            createdAt: "2023-10-05T08:10:00Z",
            unreadCount: 0,
        },
        {
            chat_id: 6,
            user: {
                id: 6,
                name: "Sara Wilson",
                avatar: "https://example.com/avatar6.jpg"
            },
            lastMessage: "Great job on the presentation!",
            createdAt: "2023-10-06T14:00:00Z",
            unreadCount: 3,
        }
    ];

    return (
        <div>

        </div>
    )
}

export default Sidebar
