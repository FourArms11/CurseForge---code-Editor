// import Image from "next/image"; //used to import the Image component from the Next.js library, which is used for optimized image rendering in Next.js applications.
// import React from "react";
// import { SignInPage } from "@/components/sign-in-page";
// import { auth } from '@/auth'



// function SignIn() {
//   return (
//     <>
//       <Image
//         src={"./undraw_welcome-cats_tw36.svg"}
//         alt="Sign-In"
//         className="w-32 h-32 mb-4 m-6"
//         height={300}
//         width={300}
//       />
//       <SignInPage
//         onSubmit={async ({ email, password }) => {
//           const res = await auth.signIn.email({ email, password });
//           if (res.error) return "That email and password do not match.";
//           router.navigate({ to: "/" });
//         }}
//         onOAuth={(provider) => auth.signIn.social({ provider })}
//       />
//     </>
//   );
// }

// export default SignIn;


