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
import StyledButton from "~/components/StyledButton";
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

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data); // Handle the form data
  };

  return (
    <Card className="w-full max-w-md border border-gray-300 p-6 shadow-lg">
      {" "}
      {/* Added border and shadow for visual separation */}
      <CardHeader className="text-center">
        {" "}
        {/* Centered Card Header */}
        <CardTitle className="text-2xl font-semibold">
          Opprett en post
        </CardTitle>{" "}
        {/* Improved font styling */}
      </CardHeader>
      <CardContent className="space-y-4">
        {" "}
        {/* Added spacing between elements */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="tittel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Tittel</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tittel"
                      type="text"
                      {...field}
                      className="rounded-lg border-gray-300"
                    />
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
                  <FormLabel className="text-gray-700">Innhold</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Skriv ditt innlegg her"
                      {...field}
                      className="rounded-lg border-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <StyledButton type="submit">Send</StyledButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
