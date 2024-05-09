import logoText from "../assets/logo_text.png";
import udem_banner from "../assets/Udem_back.jpg";

export const IntroBanner = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full py-12 min-h-90"
      style={{
        backgroundImage: `url(${udem_banner})`,
        background: `cover`,
        backgroundPosition: "center center",
      }}
    >
      <img src={logoText} className="w-1/2" />
    </div>
  );
};
