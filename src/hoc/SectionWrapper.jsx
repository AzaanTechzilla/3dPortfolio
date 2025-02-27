import React from 'react'
import { motion } from 'framer-motion';
import {styles} from  "../styles";
import {staggerContainer} from "../utils/motion";
const SectionWrapper = (Component, idName) => function HOC() {
    return(
        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: true, amount: 0.25}}
            className={`max-w-7xl mx-auto relative z-0 ${styles.padding} ${idName}`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.div>
    )
}

export default SectionWrapper
