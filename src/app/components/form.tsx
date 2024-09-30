// // I want interactivity in this component
// 'use client'
// import { addAccount } from "@/actions/actions";
// import { useRef } from "react";
// import { AddAccountButton } from '@/app/components/buttons.tsx'
//
// export default function Form() {
//     const ref = useRef<HTMLFormElement | null>(null);
//     // Need to invalidate the old UI and update it so the new account is showing to the user.
//         return (
//             <form
//                 ref={ref}
//                 action={async (formData) => {
//                     // Reset the form after submission
//                     ref.current?.reset();
//
//                     // Call the server action to add the account
//                     const result = await addAccount(formData);
//
//                 }}
//                 className="flex flex-col justify-end"
//             >
//             <input
//                 type="text"
//                 name="accountname"
//                 placeholder="Enter account name"
//             />
//             <AddAccountButton/>
//         </form>
//         )
// }