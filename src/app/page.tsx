import PostForm from "~/components/PostForm";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Forum</h1>
      <p className="text-primary text-2-xl">
        Skriv litt om dette prosjektet her
      </p>
      <PostForm />
    </main>
  );
}
