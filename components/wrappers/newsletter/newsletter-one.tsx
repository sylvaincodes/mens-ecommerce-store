import { Column } from '@/components/ui/column'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/forms/input'
import { Heading } from '@/components/ui/heading'
import React from 'react'

export const NewsletterOne = () => {
  return (
    <section className='mt-20 bg-gray-300 py-12'>
        <Container>
                    <Heading classPlus="text-primary-800 uppercase">
                        subscribe
                    </Heading>

                    <div className='pt-10 flex flex-col items-center justify-center gap-4'>
                        <Input type='text' name="search" />
                    </div>
        </Container>
    </section>
  )
}
