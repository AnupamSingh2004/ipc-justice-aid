
import { useTranslation } from "@/lib/i18n/LanguageContext";

export function ResultsDisclaimer() {
  const { t } = useTranslation();
  
  return (
    <div className="mt-10 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {t("app.disclaimer")}
      </p>
    </div>
  );
}
