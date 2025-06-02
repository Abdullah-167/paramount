import MainHome from "@/Components/Home/Index";

export const metadata = {
  title: "Welcome to Paramount",
  description:
    "Paramount is your trusted partner for innovative solutions and exceptional service. Explore our offerings and discover how we can help your business thrive.",
  icons: {
    icon: "/favicon.png", // Default favicon for home page in /public folder
  },
};

export default function Home() {
  return (
    <main>
      <MainHome />
    </main>
  );
}
