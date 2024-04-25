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
import { Card, CardTitle, CardHeader, CardContent } from "~/components/ui/card";

const formSchema = z.object({
  tittel: z.string().min(1, { message: "Feltet kan ikke være tom" }),
  innhold: z.string().min(1, { message: "Feltet kan ikke være tom" }),
  kategori: z.string().optional(),
  tags: z.array(z.string()).optional(),
  attachments: z.any().optional(),
});

const PostForm = () => {
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

  // Corrected form submission handling
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data); // Handle the form data
  };

  return (
    <Card className="w-full max-w-md p-6">
      <CardHeader>
        <CardTitle>Opprett en post</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
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
            <Button type="submit">Send</Button> {/* Form submission button */}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
