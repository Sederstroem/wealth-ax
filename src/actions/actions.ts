// 'use server'
// import { revalidatePath } from "next/cache";
//
// export const addAccount = async (formData: FormData) => {
//     const content = formData.get('accountname');
//     const accountName = content as string;
//     // try {
//     //     await ...
//     //     // Here i need to add to the database!
//     //     // Create a method for adding to database and call it here.
//     // } catch (e) {
//     //     return {
//     //         error: e,
//     //     }
//     // }
//     //
//
//     // Simulate adding the account logic here
//     console.log('Account added:', accountName);
//     revalidatePath("/accounts");
//     return accountName;
//
//     // THEN revalidate to update the UI to reflect the new contents of the DB.
//     // revalidatePath("/accounts");
// }