import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappButton = () => {
  const [typedMessage, setTypedMessage] = useState("Hello there! 🤝 \nHow can we help?");

  const handleSubmit = ()=>{
    const whatsappURL = `https://wa.me/1234567890?text=${encodeURIComponent(typedMessage)}`;
    window.open(whatsappURL, '_blank');
    
    setTypedMessage('Hello there! 🤝 \nHow can we help?');
  };

  return (
    <FloatingWhatsApp
      phoneNumber="+94760052864"
      accountName="Disura Aberathna"
      statusMessage="Replies within 20 minutes"
      darkMode={true}
      avatar="./whatsapp-profile.jpeg"
      chatMessage={typedMessage}
      onSubmit={handleSubmit}
    />
  );
};

export default WhatsappButton;
