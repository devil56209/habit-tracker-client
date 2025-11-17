import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { GiHealing } from "react-icons/gi";

const items = [
    {
        icon: <FaBrain size={32} />,
        title: "Better Focus",
        desc: "Sharpen your concentration",
        bg: "bg-blue-100",
    },
    {
        icon: <GiMeditation size={32} />,
        title: "Reduced Stress",
        desc: "Find peace in routine",
        bg: "bg-green-100",
    },
    {
        icon: <FiTrendingUp size={32} />,
        title: "Increased Productivity",
        desc: "Get more done, effortlessly",
        bg: "bg-orange-100",
    },
    {
        icon: <GiHealing size={32} />,
        title: "Improved Well-being",
        desc: "A healthier, happier you",
        bg: "bg-purple-100",
    },
];

const WhyHabits = () => {
    return (
        <div className="w-full py-20 px-6 md:px-16 bg-[#f9f9f9]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

                
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Why Build <br /> Habits?
                    </h1>
                    <hr className="w-40 mt-4 border-gray-400" />
                </motion.div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md p-6 flex gap-4 items-start"
                        >
                            <div className={`${item.bg} p-3 rounded-xl`}>
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyHabits;
