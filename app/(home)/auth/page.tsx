'use client'

import { StepEnum } from "@/enums"
import { useState } from "react"
import Login from "../_components/login"
import Otp from "../_components/otp"


const AuthPage = () => {
    const [email, setEmail] = useState<string>("")
    const [step, setStep] = useState<StepEnum>(StepEnum.login)
    return (
        <div>
            {step === StepEnum.otp && <Otp email={email} />}
            {step === StepEnum.login && <Login setStep={setStep} setEmail={setEmail} email={email} />}

        </div>
    )
}

export default AuthPage
