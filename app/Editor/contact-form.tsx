import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Define the ContactUserFormSchema
const ContactUserFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
})
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
    title: string
    subTitle: string
    // apiCall: (values: z.infer<typeof ContactUserFormSchema>) => any
}

const ContactForm = ({ subTitle, title }: Props) => {
    const form = useForm<z.infer<typeof ContactUserFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(ContactUserFormSchema),
        defaultValues: {
            name: '',
            email: '',
        },
    })
    const isLoading = form.formState.isLoading

    return (
        <Card className='max-w-[500px] w-[500px]'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subTitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        // onSubmit={form.handleSubmit(apiCall)}
                        className='flex flex-col gap-4'
                    >
                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Name'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Email'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <Button
                            className='mt-4'
                            disabled={isLoading}
                            type='submit'
                        >
                            {form.formState.isSubmitting ? 'Loading...' : 'Get a free quote!'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ContactForm