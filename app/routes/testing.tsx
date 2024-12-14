import { useState } from "react";
import {motion} from "framer-motion";

const cardData = [
    {
        src: "/images/fantasy-cards/gemstone.png",
        type: "gemstone",
        title: "Gemstone",
        quantity: 25,
    },
    {
        src: "/images/fantasy-cards/shield-1.png",
        type: "shield",
        title: "Shield",
        shieldAmount: 1,
        quantity: 7,
    },
    {
        src: "/images/fantasy-cards/shield-2.png",
        type: "shield",
        title: "Shield",
        shieldAmount: 2,
        quantity: 5,
    },
    {
        src: "/images/fantasy-cards/shield-5.png",
        type: "shield",
        title: "Shield",
        shieldAmount: 5,
        quantity: 3,
    },
    {
        src: "/images/fantasy-cards/shield-10.png",
        type: "shield",
        title: "Shield",
        shieldAmount: 10,
        quantity: 1,
    },
    {
        src: "/images/fantasy-cards/gemstone-decoy.png",
        type: "protection",
        protectionType: 'decoy',
        title: "Gemstone Decoy",
        quantity: 3,
    },
    {
        src: "/images/fantasy-cards/staff-of-deflection.png",
        type: "protection",
        protectionType: "deflection",
        title: "Staff of Deflection",
        quantity: 2,
    },
    {
        src: "/images/fantasy-cards/defensive-spell.png",
        type: "protection",
        title: "Defensive Spell",
        protectionType: "base",
        protectionAmount: 5,
        quantity: 8,
    },
    {
        src: "/images/fantasy-cards/gemstone-dagger.png",
        type: "action",
        title: "Gemstone Dagger",
        actionType: "attack",
        requiresGemstone: true,
        damageRange: 'single',
        damageMultiplier: {one: 4, two: 6, three: 8},
        quantity: 5,
    },
    {
        src: "/images/fantasy-cards/kals-spear.png",
        type: "action",
        actionType: "attack",
        title: "Kal's Spear",
        requiresGemstone: true,
        damageRange: "all",
        damageMultiplier: {one: 2, two: 4, three: 6},
        quantity: 3,
    },
    {
        src: "/images/fantasy-cards/fireball.png",
        type: "action",
        actionType: "attack",
        title: "Fireball",
        requiresGemstone: false,
        damage: 2,
        damageRange: "single",
        quantity: 7,
    },
    {
        src: "/images/fantasy-cards/ice-demon.png",
        type: "action",
        actionType: "attack",
        title: "Ice Demon",
        requiresGemstone: false,
        damage: 2,
        damageRange: "all",
        quantity: 4,
    },
    {
        src: "/images/fantasy-cards/lightning-strike.png",
        type: "action",
        actionType: "attack",
        title: "Lightning Strike",
        requiresGemstone: false,
        damage: 5,
        damageRange: "single",
        quantity: 5,
    },
    {
        src: "/images/fantasy-cards/minor-health-potion.png",
        type: "action",
        actionType: "heal",
        title: "Minor Health Potion",
        healAmount: 5,
        quantity: 5,
    },
    {
        src: "/images/fantasy-cards/major-health-potion.png",
        type: "action",
        actionType: "heal",
        title: "Major Health Potion",
        healAmount: 10,
        quantity: 2,
    },
    {
        src: "/images/fantasy-cards/overwhelming-greed.png",
        type: "action",
        actionType: "draw",
        title: "Overwhelming Greed",
        quantity: 10,
    },
    {
        src: "/images/fantasy-cards/gemstone-thief.png",
        type: "action",
        actionType: "theft",
        title: "Gemstone Thief",
        quantity: 2,
    },
]


export default function TestingPage() {

    const [showCards, setShowCards] = useState(false);
    const [viewCard, setViewCard] = useState(false);
    const [cardIndex, setCardIndex] = useState(1000);

    function handleViewCard(card:number) {
        setViewCard(true);
        setCardIndex(card);
    }

    return (
        <section className="text-white default-px pt-[200px] bg-center bg-cover flex justify-center min-h-[100svh] pb-[200px] relative">
            <div className="[&_img]:h-[250px] [&_img]:cursor-pointer [&_img]:shadow-xl flex flex-col items-center gap-[16px]">
                <h1 className="text-6xl font-bold mb-8">Tap to view cards</h1>
                <motion.img src="/images/fantasy-cards/back.png" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} onClick={() =>setShowCards(!showCards)} />
                {showCards && (
                    <motion.div className="flex duration-300 gap-4 max-w-[1200px] mx-auto flex-wrap justify-center" initial={{opacity: 0}} animate={{opacity: 1}}>
                        {cardData.map((card, index) => (
                            <div key={index}>
                                <motion.img src={card.src} alt={card.title} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} onClick={() => handleViewCard(index)} />
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
            {viewCard && (
                <div className="fixed top-0 left-0 w-[100svw] min-h-[100svh] bg-[rgba(0,0,0,0.8)] pt-[200px]" onClick={() => setViewCard(false)}>
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-6xl font-bold mb-8">{cardData[cardIndex].title}</h1>
                        <img src={cardData[cardIndex].src} alt={cardData[cardIndex].title} className="max-h-[400px] h-full"/>
                    </div>
                </div>
            )}
        </section>
    )
}