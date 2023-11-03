import { useTranslation } from "react-i18next";

const OpenToWorkComponent = () => {
  const [t] = useTranslation("global");
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow rounded-lg bg-[#7de5bb] dark:bg-[#1AC280] flex items-center justify-center">
        <p className="flex flex-col leading-6 items-center font-bold dark:text-white">
          <span>{t("opentoworkSection.span1")}</span>
          <span>{t("opentoworkSection.span2")}</span>
          <span>{t("opentoworkSection.span3")}</span>
        </p>
      </div>
    </div>
  );
};

export default OpenToWorkComponent;
