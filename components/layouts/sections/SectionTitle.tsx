import { motion } from 'motion/react';

type SectionTitleProps = {
    title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <motion.div>
            <h1 className="text-4xl tracking-widest">{title}</h1>
        </motion.div>
    );
};

export default SectionTitle;
