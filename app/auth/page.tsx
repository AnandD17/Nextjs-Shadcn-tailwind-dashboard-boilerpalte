"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { useToast } from "@/components/ui/use-toast"
import { LockIcon, UserIcon, LogInIcon } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

type FormValues = z.infer<typeof formSchema>

export default function AuthPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  //   const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setLoading(true)

    try {
      // This would be replaced with your actual auth API call
      // const response = await AuthApi.PostLogin(values);
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("user", JSON.stringify(response.data.user));

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      //   toast({
      //     title: "Login Successful",
      //     description: "Welcome back!",
      //   })
      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      //   toast({
      //     variant: "destructive",
      //     title: "Login Failed",
      //     description: "Invalid email or password. Please try again.",
      //   })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Random gradient shapes with subtle animation */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-gradient-to-br from-purple-300/40 to-blue-400/40 blur-[60px]"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[-5%] bottom-[-5%] h-[35%] w-[35%] rounded-full bg-gradient-to-tr from-indigo-300/40 to-cyan-300/40 blur-[60px]"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-[40%] right-[10%] h-[30%] w-[30%] rounded-full bg-gradient-to-bl from-pink-300/30 to-indigo-400/30 blur-[60px]"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.06, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[30%] left-[5%] h-[25%] w-[25%] rounded-full bg-gradient-to-tr from-orange-300/30 to-yellow-200/30 blur-[60px]"
        />
      </div>

      {/* Card container with glass effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 w-full max-w-md px-4"
      >
        <Card className="overflow-hidden rounded-xl border-0 bg-white/90 shadow-2xl backdrop-blur-sm">
          <CardContent className="px-6 py-8">
            {/* Logo and Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                  <LogInIcon className="text-2xl text-white" />
                </div>
              </div>
              <h2 className="m-0 text-2xl font-bold text-gray-800">Welcome Back</h2>
              <p className="mt-2 text-gray-500">Sign in to your account to continue</p>
            </div>

            <div className="my-6 h-px bg-gray-200" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <UserIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <Input placeholder="you@example.com" className="h-12 rounded-lg pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <LockIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <Input type="password" placeholder="••••••••" className="h-12 rounded-lg pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-2 flex items-center justify-end">
                  <p className="cursor-pointer text-sm text-indigo-600 transition-colors hover:text-indigo-800">
                    Forgot password?
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-lg border-0 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:from-indigo-700 hover:to-purple-700"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </Button>
                </motion.div>

                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-gray-500">Don't have an account?</p>
                    <p className="cursor-pointer font-medium text-indigo-600 transition-colors hover:text-indigo-800">
                      Sign up
                    </p>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-xs text-white/70">
          <p className="opacity-70">© {new Date().getFullYear()} Support 305. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  )
}
