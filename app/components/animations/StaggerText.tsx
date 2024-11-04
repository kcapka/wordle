//READ ME
//This component uses framer-motion. Make sure you have run "npm install framer-motion" on project
//HOW TO USE: import component and wrap desired text in component. 
//example: <p><StaggerText>Hello this is my animated text</StaggerText></p>
//NOTE: If you would like to stagger animation based on characters, rather than words, follow steps below.
//1. change text.split(" ") to text.split("")
//2. get rid of "+ space" in line 53
//NOTE: This animation only plays once. If you want it to play each time the text appears on screen, change line 50 to "once: false"

import { motion } from 'framer-motion';


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 75
    },
    animate: (index: any) => ({
        opacity: 1,
        y: 0,
        transition: {
            //play with delay to adjust timing
            delay: 0.06 * index,
            type: 'spring',
            stiffness: 90
            
        }
    })
}


export default function StaggerText (props:any) {

    const text = props.children;
    const stringArray = text.split(" ");
    const space = String.fromCodePoint(0x000A0);
    const inline = {
        display: 'inline-block'
    }


    return (
        <div>
            {stringArray.map((item:any, index:any) => (
                <motion.span style={inline} key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView='animate'
                viewport={{
                    once: true
                }}
                custom={index}
                >{item === ' ' ? space : item + space}</motion.span>
            ))}
        </div>
    )
}