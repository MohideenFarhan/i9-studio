import { EditorElement } from '@/app/Editor/editor-provider'
import React from 'react'
import TextComponent from './text'
import Container from './container'
import VideoComponent from './video'
import LinkComponent from './link-component'
import ContactFormComponent from './contact-form-component'
import Checkout from './checkout'
import ImageComponent from './image'
import Section from './section'
import TwoColumns from './two-columns'
import ThreeColumns from './three-colums'
import Div from './div'



type Props = {
    element: EditorElement
}

const Recursive = ({ element }: Props) => {

    switch (element.type) {
        case 'text':
            return <TextComponent element={element} />;
        case '__body':
            return <Container element={element} />
        case 'container':
            return <Container element={element} />
        case 'section':
            return <Section element={element} />
        case 'div':
            return <Div element={element} />
        case '2Col':
            return <TwoColumns element={element} />
        case '3Col':
            return <ThreeColumns element={element} />
        case 'link':
            return <LinkComponent element={element} />
        case 'video':
            return <VideoComponent element={element} />
        case 'image':
            return <ImageComponent element={element} />
        case 'contactForm':
            return <ContactFormComponent element={element} />
        case 'paymentForm':
            return <Checkout element={element} />
        default: return null;
    }
}

export default Recursive