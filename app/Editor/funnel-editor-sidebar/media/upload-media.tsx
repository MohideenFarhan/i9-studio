// 'use client'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { zodResolver } from '@hookform/resolvers/zod'
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'

// type Props = {
//     subaccountId: string
// }
// const formSchema = z.object({
//     link: z.string().min(1, { message: 'Media File is required' }),
//     name: z.string().min(1, { message: 'Name is required' }),
// })


// const UploadMediaForm = ({ subaccountId }: Props) => {

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         mode: 'onSubmit',
//         defaultValues: {
//             link: '',
//             name: "",
//         },
//     })

//     // async function onSubmit(values: z.infer<typeof formSchema>) {
//     //     try {
//     //         const response = await createMedia(subaccountId, values)
//     //     } catch (error) {
//     //         console.log(error)
//     //         throw error
//     //     }
//     // }
//     return (
//         <Card className='w-full'>
//             <CardHeader>
//                 <CardTitle>Media Information</CardTitle>
//                 <CardDescription>Please enter the details for your file</CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)}
                    
//             </Form>
//             </CardContent>
//         </Card>
//     )
// }

// export default UploadMediaForm