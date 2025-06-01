'use client'
import { StepEnum } from "@/enums"
import { isValidEmail } from "@/validations/auth"
import Image from "next/image"
import { useState } from "react"

interface LoginProps {
    setStep: (step: StepEnum) => void
    setEmail: (email: string) => void
    email: string
}

const Login = ({ setStep, email, setEmail }: LoginProps) => {
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (isValidEmail(email)) {
                setError(null)
                setStep(StepEnum.otp)
            } else {
                setError("Please enter a valid email address")
                setLoading(false)
                return
            }
        } catch (error) {
            console.error("Error during login:", error)
            setLoading(false)
            return
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-space-grotesk px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6">
                <div className="flex flex-col items-center">
                    <Image src="/telegram.png" alt="Telegram" width={100} height={100} />
                    <h1 className="text-3xl font-semibold mt-4 text-gray-800">Welcome to Telegram</h1>
                    <p className="text-gray-500 text-sm mt-1">Sign in to continue</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Email address"
                            disabled={loading}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className={`px-4 py-2 border rounded-lg shadow-sm transition ${error ? 'border-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                }`}
                        />
                        {error && (
                            <p className="text-sm text-red-500 mt-1 animate-fade-in" aria-live="polite">
                                {error}
                            </p>
                        )}
                    </div>


                    <button
                        type="submit"
                        className="w-full cursor-pointer py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition"
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : "Continue"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
