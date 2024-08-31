import NavAdmin from "@/components/NavAdmin";
import "react-toastify/dist/ReactToastify.css";
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // Fetch the session server-side

  return (
    <>
      <NavAdmin />

      {children}
    </>
  );
};

export default RootLayout;
