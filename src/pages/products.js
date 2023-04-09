import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Products = () => {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];

    const color = useTransform(x, xInput, [
        "#f7bf27",
        "#b5aaa3",
        "#c63837"
    ]);
    const tickPath = useTransform(x, [10, 100], [0, 1]);
    const crossPathA = useTransform(x, [-10, -55], [0, 1]);
    const crossPathB = useTransform(x, [-50, -100], [0, 1]);

    return (
        <motion.div className=" w-full h-[100vh] flex justify-center items-center  ">
            <div >
                <motion.div
                    className="w-[150px] h-[150px]  "
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                >

                    <svg className="w-[80%] h-[80%] " viewBox="0 0 50 50">
                        <motion.path
                            fill="none"
                            strokeWidth="2"
                            stroke={color}
                            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                            style={{ translateX: 5, translateY: 5 }}
                        />
                     
                        <motion.path
                            fill="none"
                            strokeWidth="2"
                            stroke={color}
                            d="M14,26 L 22,33 L 35,16"
                            strokeDasharray="0 1"
                            style={{ pathLength: tickPath }}
                        />
                        <motion.path
                            fill="none"
                            strokeWidth="2"
                            stroke={color}
                            d="M17,17 L33,33"
                            strokeDasharray="0 1"
                            style={{ pathLength: crossPathA }}
                        />
                        <motion.path
                            fill="none"
                            strokeWidth="2"
                            stroke={color}
                            d="M33,17 L17,33"
                            strokeDasharray="0 1"
                            style={{ pathLength: crossPathB }}
                        />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
};


export default Products 