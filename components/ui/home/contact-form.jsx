"use client";

import BlurFade from "@/components/ui/blur-fade";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(100, {
      message: "Name must be at most 100 characters.",
    }),
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .max(100, {
      message: "Email must be at most 100 characters.",
    })
    .email(),
  message: z
    .string()
    .min(2, {
      message: "Message must be at least 2 characters.",
    })
    .max(3000, {
      message: "Message must be at most 3000 characters.",
    }),
});

export default function ContactForm({ fullWidth = false }) {
  const [state, handleSubmit] = useFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
  );

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data) {
    handleSubmit(data);
  }

  if (state.succeeded) {
    return (
      <div
        className={`w-full text-center font-semibold text-gray-300 ${fullWidth ? "mb-8" : null}`}
      >
        Thank you for sending us message!
        <br />
        We&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <BlurFade delay={0.7} inView>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Type your full name" {...field} />
                </FormControl>
                <FormDescription>Max 100 characters.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </BlurFade>
        <BlurFade delay={0.8} inView>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Type your email address" {...field} />
                </FormControl>
                <FormDescription>
                  Must be a valid email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </BlurFade>
        <BlurFade delay={0.9} inView>
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Messages</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} />
                </FormControl>
                <FormDescription>Max 3000 characters.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </BlurFade>
        <div className="w-full text-right">
          <BlurFade delay={1} inView>
            <Button
              type="submit"
              disabled={state.submitting}
              className={`${fullWidth ? "w-full mt-2" : null}`}
            >
              {state.submitting ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </BlurFade>
        </div>
      </form>
    </Form>
  );
}
