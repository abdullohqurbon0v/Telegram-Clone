import { ChildProps } from "@/types"

const MainLayout = ({ children }: ChildProps) => {
    return (
        <div className="bg-sky-200 h-screen w-screen overflow-hidden">
            {children}
        </div>
    )
}

export default MainLayout
