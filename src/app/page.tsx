"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  tittel: z.string().min(1, { message: "Feltet kan ikke være tom" }),
  innhold: z.string().min(1, { message: "Feltet kan ikke være tom" }), // Main content
  kategori: z.string().optional(), // Optional category
  tags: z.array(z.string()).optional(), // Optional tags
  attachments: z.any().optional(), // Optional attachments
});
export default function HomePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tittel: "",
      innhold: "",
      kategori: "",
      tags: [],
      attachments: [],
    },
  });

  const handleSubmit = () => {
    console.log(form.getValues());
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {" "}
      <h1 className="text-4xl font-bold text-gray-800">NullKarbo</h1>
      <p className="text-primary text-2-xl">
        Skriv litt om dette prosjektet her
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full max-w-md flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="tittel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tittel</FormLabel>
                <FormControl>
                  <Input placeholder="Tittel" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="innhold"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Innhold</FormLabel>
                <FormControl>
                  <Textarea placeholder="Skriv ditt innlegg her" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Send</Button>
        </form>
      </Form>
    </main>
  );
}
