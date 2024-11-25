import React, {useState} from "react";
import {FloatingWhatsApp} from "@carlos8a/react-whatsapp-floating-button";

const WPButton = () => {
    const [theme, setTheme] = useState(false);

    return (
        <FloatingWhatsApp
            phoneNumber="+94760052864"
            accountName='Disura Aberathna'
            avatar='/assets/images/about-profile.svg'
            initialMessageByServer='Hi there! How can I assist you?'
            initialMessageByClient='Hello! I found your contact on your website. I would like to chat with you about...'
            statusMessage='Available'
            startChatText='Start chat with me'
            allowEsc={true}
            allowClickAway={true}
            darkMode={theme}
            onClick={() => {
                if (sessionStorage.getItem("theme") === "light") {
                    setTheme(false);
                } else {
                    setTheme(true);
                }
            }}
        />
    );
};

export default WPButton;
