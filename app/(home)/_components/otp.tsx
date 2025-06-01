'use client'
import { useRef, useState } from "react"

const Otp = ({ email }: { email: string }) => {
    const [otp, setOtp] = useState(Array(5).fill(""))
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return // Only allow digits
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)
        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const otpValue = otp.join("")
        if (otpValue.length < 5) {
            setError("Please enter a complete OTP")
            setLoading(false)
            return
        }
        setTimeout(() => {
            console.log("OTP submitted:", otpValue)
            setLoading(false)
            setOtp(Array(5).fill(""))
            setError(null)
        }, 1000)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-space-grotesk px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 text-center">
                <h1 className="text-3xl font-semibold text-gray-800">OTP Verification</h1>
                <div>
                    <p className="text-gray-500 text-sm">We are send to {email} 5 digits code</p>
                    <p className="text-gray-500 text-sm">Please enter for continue</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex justify-center space-x-3 mt-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => { inputRefs.current[index] = el; }}
                                className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        ))}
                    </div>

                    {error && (
                        <p className="text-sm text-red-500 mt-2 transition-opacity duration-300" aria-live="polite">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-2 cursor-pointer px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition mt-2"
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : "Verify"}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Otp
