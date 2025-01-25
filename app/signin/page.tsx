import { NextPage } from "next";
import Link from "next/link";
import { RiSparkling2Fill } from "react-icons/ri";

const SignIn: NextPage = () => {
    return (
        <>
            <div className="flex min-h-full w-full justify-center items-center px-6 py-12 lg:px-8 bg-background">
                <div className="flex flex-col p-4 h-full md:min-h-[50vh] w-full md:max-w-[35vw] rounded-xl border-accent border-[1px] shadow-sm justify-center items-center bg-card">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="flex gap-3 justify-center items-center w-full text-2xl text-foreground">
                            <RiSparkling2Fill size={28} />
                            <span className="golos-text-600">Oyelabs AI</span>
                        </div>
                        <h2 className="mt-4 golos-text-600 text-center text-2xl/9 font-bold tracking-tight text-foreground">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-foreground">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-secondary px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-foreground sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-foreground">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-foreground hover:text-foreground">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-secondary px-3 py-1.5 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-foreground sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-foreground px-3 py-1.5 text-sm/6 font-semibold text-background shadow-xs hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Dont have an account?{' '}
                            <Link href="/signup" className="font-semibold text-foreground hover:text-foreground">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
