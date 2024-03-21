import { GoogleIcon, LeftArrowIcon, UserIcon } from "@/assets";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);

  const handlePress = () => {
    if (tab == "login") {
      if (step >= 1) {
        router.push("/");
      } else {
        setStep((prev) => prev + 1);
      }
    } else {
      if (step >= 1) {
        router.push("/");
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };
  const handleSwitchTab = () => {
    tab == "login" ? setTab("signup") : setTab("login");
  };

  return (
    <div>
      <Header />
      <div className="my-6 flex w-full items-center justify-center">
        <div className="w-fit rounded-xl border border-gray-300 p-6">
          {tab === "login" && (
            <div className="flex flex-col items-center gap-5">
              <div className="rounded-full border border-gray-300 bg-gray-200 p-2">
                <UserIcon />
              </div>
              <h2 className="text-2xl font-light">Нэвтрэх</h2>
              <div className="flex flex-col items-center gap-5">
                <span className="flex w-full whitespace-pre font-light">
                  <p className="font-semibold">Имэйл</p>
                  <p> эсвэл </p>
                  <p className="font-semibold">утасны дугаараа</p>
                  <p> оруулна уу</p>
                </span>
                <Input
                  clearButton
                  setValue={setEmail}
                  value={email}
                  className={`w-[35vw]`}
                  placeholder="Энд бичнэ үү"
                />
                {step > 0 && (
                  <>
                    <p className="w-full font-semibold">Нууц үг</p>
                    <Input
                      type="password"
                      setValue={setPassword}
                      value={password}
                      className={`w-[35vw]`}
                    />
                  </>
                )}
                <button
                  onClick={handlePress}
                  className="w-full rounded-md bg-orange-600 py-3 uppercase text-white active:translate-y-1"
                >
                  {step < 1 ? "Үргэлжлүүлэх" : "Хадгалах"}
                </button>
                <a className="w-full cursor-pointer text-sm hover:underline">
                  Нууц үгээ мартсан?
                </a>
                <button className="flex w-fit flex-row gap-3 rounded-md border border-gray-800 p-4 px-6 font-semibold active:translate-y-1">
                  <GoogleIcon className="text-gray-500" />
                  Google
                </button>
                <a
                  onClick={handleSwitchTab}
                  className="flex cursor-pointer flex-row font-semibold hover:underline"
                >
                  <p>Шинээр бүртгүүлэх</p>
                  <LeftArrowIcon />
                </a>
              </div>
            </div>
          )}
          {tab === "signup" && (
            <div className="flex flex-col items-center gap-5">
              <div className="rounded-full border border-gray-300 bg-gray-200 p-2">
                <UserIcon />
              </div>
              <h2 className="text-2xl font-light">Бүртгүүлэх</h2>
              <div className="flex flex-col items-center gap-5">
                <span className="flex w-full whitespace-pre font-light">
                  <p className="font-semibold">Имэйл</p>
                  <p> эсвэл </p>
                  <p className="font-semibold">утасны дугаараа</p>
                  <p> оруулна уу</p>
                </span>
                <Input
                  clearButton
                  setValue={setEmail}
                  value={email}
                  className={`w-[35vw]`}
                  placeholder="Энд бичнэ үү"
                />
                {step > 0 && (
                  <>
                    <span className="flex w-full flex-col whitespace-pre font-light">
                      <p className="font-semibold">Баталгаажуулах код</p>
                      <p className="text-xs">
                        Таны дугаарт илгээсэн баталгаажуулах кодыг оруулна уу.
                      </p>
                    </span>
                    <Input
                      setValue={setConfirmCode}
                      value={confirmCode}
                      className={`w-[35vw]`}
                      placeholder="XXXXXX"
                    />
                  </>
                )}
                {step > 1 && (
                  <>
                    <p className="w-full font-semibold">Нууц үг</p>
                    <Input
                      type="password"
                      setValue={setPassword}
                      value={password}
                      className={`w-[35vw]`}
                    />
                  </>
                )}
                <button
                  onClick={handlePress}
                  className="w-full rounded-md bg-orange-600 py-3 uppercase text-white active:translate-y-1"
                >
                  {step < 2 ? "Үргэлжлүүлэх" : "Хадгалах"}
                </button>
                <a className="w-full cursor-pointer text-sm hover:underline">
                  Нууц үгээ мартсан?
                </a>
                <button className="flex w-fit flex-row gap-3 rounded-md border border-gray-800 p-4 px-6 font-semibold active:translate-y-1">
                  <GoogleIcon className="text-gray-500" />
                  Google
                </button>
                <a
                  onClick={handleSwitchTab}
                  className="flex cursor-pointer flex-row font-semibold hover:underline"
                >
                  <p>Нэвтрэх</p>
                  <LeftArrowIcon />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
