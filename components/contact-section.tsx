"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT

    if (!endpoint) {
      toast.error("Form submission endpoint is not configured.")
      return
    }

    const promise = fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    })

    toast.promise(promise, {
      loading: "Sending message...",
      success: () => {
        form.reset()
        return "Your message has been sent successfully!"
      },
      error: "There was an error sending your message.",
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] font-black text-foreground/5 leading-none pointer-events-none select-none whitespace-nowrap">
        LET'S TALK
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-accent text-accent-foreground mb-6 sm:mb-8 animate-float">
            <Mail className="w-8 h-8 sm:w-10 sm:w-10 md:w-12 md:h-12" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-8 text-balance leading-none">
            Ready to create something <span className="italic text-accent">extraordinary?</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Let's discuss how we can elevate your brand and drive real business results.
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="h-14 px-6 rounded-full text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="h-14 px-6 rounded-full text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          {...field}
                          className="min-h-40 p-6 rounded-3xl text-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                  className="w-full group text-lg sm:text-xl px-10 sm:px-12 py-6 sm:py-8 bg-accent hover:bg-accent/90 text-accent-foreground font-black rounded-full shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}